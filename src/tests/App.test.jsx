import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  it("renders correct heading", () => {
    expect(screen.getByRole("heading").textContent).toMatch(
      /Welcome to Price Chopper/i
    );
  });

  it("renders correct paragraph text 1", () => {
    expect(screen.getByText("Let's fill your cart!")).toBeInTheDocument();
  });

  it("renders correct paragraph text 2", () => {
    expect(
      screen.getByText("All of your current cravings await...")
    ).toBeInTheDocument();
  });

  it("renders logo image with correct alt text", () => {
    const image = screen.getByRole("img", { name: "Price Chopper Logo" });
    expect(image).toHaveAttribute("src", "/src/assets/price-chopper-logo.png");
    expect(image.getAttribute("src")).toMatch(/price-chopper-logo/);
  });

  it("renders correct link with correct text", () => {
    const link = screen.getByRole("link", { name: /Shop Page/i });
    expect(link).toHaveAttribute("href", "/shop");
  });
});
