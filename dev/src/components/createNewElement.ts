export const createNewElement = (
  tagName: string,
  className: string,
): HTMLElement => {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  return newElement;
};
