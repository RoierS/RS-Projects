import { createTooltip } from "./tooltip";

describe("createTooltip", () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement("div");
  });

  afterEach(() => {
    element.innerHTML = "";
  });

  test("should create and append a tooltip element", () => {
    const tooltip = createTooltip(element);

    expect(tooltip.tagName).toBe("DIV");
    expect(tooltip.classList.contains("tooltip")).toBe(true);
    expect(element.contains(tooltip)).toBe(true);
  });
});
