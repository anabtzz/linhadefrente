import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders the home page content", () => {
    render(<App />);

    expect(screen.getByText(/Estamos na/i)).toBeInTheDocument();
  });
});
