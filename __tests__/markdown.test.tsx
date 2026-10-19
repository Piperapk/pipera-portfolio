import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import Markdown from "../components/Markdown";

describe("project Markdown", () => {
  it("renders rich text, lists and links", () => {
    const { container } = render(<Markdown>{"**Built** a project.\n\n- First result\n- Second result\n\n[Details](https://example.com)"}</Markdown>);
    expect(container.querySelector("strong")).toHaveTextContent("Built");
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByRole("link", { name: "Details" })).toHaveAttribute("href", "https://example.com");
  });

  it("treats raw HTML as text", () => {
    const { container } = render(<Markdown>{'<script>alert("example")</script>'}</Markdown>);
    expect(container.querySelector("script")).toBeNull();
  });
});
