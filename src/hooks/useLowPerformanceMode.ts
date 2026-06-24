import { useEffect, useState } from "react";

/**
 * Detects low-end devices / constrained environments where heavy effects
 * (WebGL canvas, multiple animated blurs, smooth scrolling, etc.) cause
 * jank. Returns true on:
 *   - reduced-motion preference
 *   - <= 4 logical CPU cores
 *   - <= 4 GB device memory (when reported)
 *   - Save-Data hint
 *   - explicit ?lowperf=1 query string (for forcing during a presentation)
 */
export function useLowPerformanceMode(): boolean {
  const [low, setLow] = useState<boolean>(() => detect());

  useEffect(() => {
    setLow(detect());
  }, []);

  return low;
}

function detect(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("lowperf") === "1") return true;
    if (params.get("lowperf") === "0") return false;
  } catch {
    /* ignore */
  }

  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return true;

  const nav = navigator as Navigator & {
    deviceMemory?: number;
    connection?: { saveData?: boolean };
  };

  if (nav.connection?.saveData) return true;
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4) return true;
  if (typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4) return true;

  return false;
}
