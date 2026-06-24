import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import fs from "node:fs";
import path from "node:path";

// jsdom doesn't implement these — stub before importing the component
beforeAll(() => {
  // @ts-expect-error - test stub
  window.IntersectionObserver = class {
    observe() {} unobserve() {} disconnect() {} takeRecords() { return []; }
    root = null; rootMargin = ""; thresholds = [];
  };
  (window as unknown as { ResizeObserver: unknown }).ResizeObserver = class {
    observe() {} unobserve() {} disconnect() {}
  };
  Object.defineProperty(window.HTMLMediaElement.prototype, "load", { value: vi.fn(), writable: true });
  Object.defineProperty(window.HTMLMediaElement.prototype, "play", { value: vi.fn().mockResolvedValue(undefined), writable: true });
  Object.defineProperty(window.HTMLMediaElement.prototype, "pause", { value: vi.fn(), writable: true });
  const w = window as unknown as { CSS?: { supports?: (...a: unknown[]) => boolean } };
  if (typeof w.CSS === "undefined") w.CSS = {};
  if (typeof w.CSS.supports !== "function") w.CSS.supports = () => false;
});

describe("PodcastPlayer — runtime smoke", () => {
  it("does not throw ReferenceError for missing hook imports (e.g. useRef)", async () => {
    const { PodcastPlayer } = await import("./PodcastPlayer");
    let caught: unknown = null;
    try {
      render(<PodcastPlayer />);
    } catch (e) {
      caught = e;
    }
    // Only fail on the specific class of bug this test guards against:
    // a hook (useRef, useState, ...) used without being imported, which
    // surfaces as `ReferenceError: <hook> is not defined`. Other jsdom
    // incompatibilities from third-party players are ignored.
    if (caught instanceof ReferenceError) throw caught;
    expect(true).toBe(true);
  });
});

describe("PodcastPlayer — static hook-import lint", () => {
  const REACT_HOOKS = [
    "useRef",
    "useState",
    "useEffect",
    "useMemo",
    "useCallback",
    "useLayoutEffect",
    "useReducer",
    "useContext",
    "useId",
    "useTransition",
    "useDeferredValue",
    "useImperativeHandle",
    "useSyncExternalStore",
  ];

  const file = fs.readFileSync(
    path.resolve(__dirname, "./PodcastPlayer.tsx"),
    "utf-8",
  );

  // Extract what is imported from "react"
  const importedFromReact = (() => {
    const m = file.match(/import\s+(?:(\w+)\s*,\s*)?\{([^}]+)\}\s+from\s+["']react["']/);
    if (!m) return new Set<string>();
    return new Set(m[2].split(",").map((s) => s.trim().split(/\s+as\s+/)[0]));
  })();

  // Strip imports + comments + strings so we don't false-positive on them
  const body = file
    .replace(/import[^;]+;/g, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/[^\n]*/g, "")
    .replace(/(["'`])(?:\\.|(?!\1).)*\1/g, '""');

  for (const hook of REACT_HOOKS) {
    it(`if "${hook}" is used, it must be imported from "react"`, () => {
      const used = new RegExp(`\\b${hook}\\s*[<(]`).test(body);
      if (!used) return;
      expect(importedFromReact.has(hook)).toBe(true);
    });
  }
});
