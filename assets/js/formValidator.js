export const isValid = (input) =>
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.value);

export function formValidation({ isAdd, isDisabled }) {
  const d = document;
  const errorMessage = d.querySelector(".input-error");
  const button = d.querySelector("form button");
  const iconError = d.querySelector(".input-error-icon");
  if (isAdd) {
    errorMessage.classList.add("hidden");
    button.disabled = isDisabled;
    iconError.classList.add("hidden");
  } else {
    errorMessage.classList.remove("hidden");
    button.disabled = isDisabled;
    iconError.classList.remove("hidden");
  }
}
