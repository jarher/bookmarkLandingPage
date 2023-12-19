import { addClass, getElement, removeClass } from "./utils.js";

export const isValid = (input) =>
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.value);

export function formValidation({ isAdd, isDisabled }) {
  const errorMessage = getElement(".input-error");
  const button = getElement("form button");
  const iconError = getElement(".input-error-icon");
  const siblingsElements = [errorMessage, iconError];
  
  isAdd
    ? siblingsElements.forEach((element) => addClass(element, "hidden"))
    : siblingsElements.forEach((element) => removeClass(element, "hidden"));

  button.disabled = isDisabled;
}
