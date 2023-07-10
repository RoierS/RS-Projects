export function createTooltip(element: HTMLElement): HTMLElement {
  const tooltip: HTMLElement = document.createElement("div");
  tooltip.classList.add("tooltip");
  if (element.hasAttribute("class") && element.classList.contains("small")) {
    tooltip.textContent = `<${element.tagName.toLowerCase()} class="small"></${element.tagName.toLowerCase()}>`;
  } else {
    tooltip.textContent = `<${element.tagName.toLowerCase()}></${element.tagName.toLowerCase()}>`;
  }
  element.appendChild(tooltip);
  return tooltip;
}
