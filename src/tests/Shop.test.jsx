import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Shop from "../Shop";
import { userEvent } from "@testing-library/user-event";
import { vi } from "vitest";

describe("Shop Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
  });
  it("renders cart image and header", () => {
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });
});
