import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
describe("initiolize with defaultCount=0 and description=My Counter", () => {
  beforeEach(() => {
    render(<Counter defaultCount={0} description="My Counter" />);
  });
  it("default count=0 and clicked counter =1", () => {
    expect(screen.getByText(/current count: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/my counter/i)).toBeInTheDocument();
  });
  describe("when + button clicked", () => {
    beforeEach(() => {
      fireEvent.click(screen.getByRole("button", { name: "+" }));
    });
    it("first time  + clicked the count is 1", () => {
      expect(screen.getByText(/current count: 1/i)).toBeInTheDocument();
    });
  });

  it("after - clicked the count is -1", () => {
    fireEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByText(/current count: -1/i)).toBeInTheDocument();
  });
});
