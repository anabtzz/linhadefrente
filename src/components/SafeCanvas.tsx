import React from "react";

interface State {
  hasError: boolean;
}

/**
 * Error boundary that swallows WebGL context creation failures
 * (browsers limit active contexts; secondary Canvases can fail).
 * Renders nothing on error so the rest of the page still works.
 */
class SafeCanvas extends React.Component<React.PropsWithChildren<{ fallback?: React.ReactNode }>, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // eslint-disable-next-line no-console
    console.warn("SafeCanvas: WebGL/Canvas error suppressed", error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

export default SafeCanvas;
