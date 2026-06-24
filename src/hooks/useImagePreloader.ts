import { useEffect } from "react";
import {
  janeiroBrancoGallery,
  janeiroBrancoCover,
  carnavalGallery,
  carnavalCover,
  novembroNegroGallery,
  novembroNegroCover,
  esproQueEuVejoGallery,
  esproQueEuVejoCover,
} from "@/assets/projetos";

/**
 * Pre-warms the browser cache with all project images so the carousel and
 * department galleries are instant during a live presentation.
 *
 * Strategy:
 *  1. Covers first (high priority) — they are visible on the home page.
 *  2. Remaining gallery images afterwards via requestIdleCallback so they
 *     don't compete with critical rendering.
 */
export function useImagePreloader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const covers = [
      janeiroBrancoCover,
      carnavalCover,
      novembroNegroCover,
      esproQueEuVejoCover,
    ];
    const galleries = [
      ...janeiroBrancoGallery,
      ...carnavalGallery,
      ...novembroNegroGallery,
      ...esproQueEuVejoGallery,
    ];

    const cache: HTMLImageElement[] = [];

    const load = (src: string, priority: "high" | "low" = "low") => {
      const img = new Image();
      // fetchPriority is supported in modern Chromium/Safari/Firefox
      (img as HTMLImageElement & { fetchPriority?: string }).fetchPriority = priority;
      img.decoding = "async";
      img.src = src;
      cache.push(img);
    };

    // Load covers immediately at high priority
    covers.forEach((src) => load(src, "high"));

    // Defer the rest until the browser is idle so it doesn't block the UI
    const idle = (cb: () => void) => {
      const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
      if (typeof w.requestIdleCallback === "function") {
        w.requestIdleCallback(cb);
      } else {
        setTimeout(cb, 1500);
      }
    };

    idle(() => {
      const remaining = galleries.filter((src) => !covers.includes(src));
      remaining.forEach((src) => load(src, "low"));
    });
  }, []);
}
