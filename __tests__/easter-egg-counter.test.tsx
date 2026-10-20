import { afterEach, beforeEach, describe, expect, it, jest } from "@jest/globals";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import EasterEggCounter from "../components/EasterEggCounter";
import { EasterEggContext } from "../context/EasterEggContext";

const counter = (eggCount: number) => (
  <EasterEggContext.Provider value={{ eggCount, isMaxEggs: eggCount >= 8, updateEggCount: () => {} }}>
    <EasterEggCounter />
  </EasterEggContext.Provider>
);

beforeEach(() => { jest.useFakeTimers(); });
afterEach(() => { jest.useRealTimers(); });

describe("Easter egg notification timing", () => {
  it("appears on discovery and hides after its display and fade duration", () => {
    const view = render(counter(0));
    expect(screen.queryByText(/You've found/)).not.toBeInTheDocument();
    view.rerender(counter(1));
    expect(screen.getByText("You've found 1 of 8 Easter Egg")).toBeInTheDocument();
    act(() => jest.advanceTimersByTime(6500));
    expect(screen.queryByText(/You've found/)).not.toBeInTheDocument();
  });

  it("keeps a newly discovered count visible when the previous notification was fading", () => {
    const view = render(counter(1));
    act(() => jest.advanceTimersByTime(6200));
    view.rerender(counter(2));
    act(() => jest.advanceTimersByTime(500));
    expect(screen.getByText("You've found 2 of 8 Easter Eggs")).toBeInTheDocument();
  });

  it("allows dismissal and gives the final notification ten seconds", () => {
    const view = render(counter(1));
    fireEvent.click(screen.getByText("You've found 1 of 8 Easter Egg"));
    act(() => jest.advanceTimersByTime(500));
    expect(screen.queryByText(/You've found/)).not.toBeInTheDocument();
    view.rerender(counter(8));
    act(() => jest.advanceTimersByTime(10000));
    expect(screen.getByText("You found all 8 Easter Eggs!")).toBeInTheDocument();
    act(() => jest.advanceTimersByTime(500));
    expect(screen.queryByText(/You found all/)).not.toBeInTheDocument();
  });
});
