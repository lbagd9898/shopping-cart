import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Item from "../Item";
import { userEvent } from "@testing-library/user-event";
import { vi } from "vitest";

describe("Item Component", () => {
  let mockItem;
  let mockModify;
  beforeEach(() => {
    mockItem = {
      title: "apple",
      thumbnail: "apple.img",
    };
    mockModify = vi.fn();
    render(
      <MemoryRouter>
        <Item item={mockItem} modify={mockModify} />
      </MemoryRouter>
    );
  });

  it("basic render check", () => {
    expect(screen.getByText("apple")).toBeInTheDocument();
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "apple.img");
  });

  it("on initial render, counter is equal to 0", () => {
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("counter renders 0 again after minus click", async () => {
    const plusButton = screen.getByText("+");
    const minusButton = screen.getByText("-");
    await userEvent.click(plusButton);
    expect(screen.getByText("1")).toBeInTheDocument();
    await userEvent.click(minusButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("modify called with correct values", async () => {
    const plusButton = screen.getByText("+");
    await userEvent.click(plusButton);

    expect(mockModify).toHaveBeenCalled();
    expect(mockModify).toHaveBeenCalledWith(mockItem, 1);
  });
});
