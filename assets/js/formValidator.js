export const isValid = (input) =>
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.value);
