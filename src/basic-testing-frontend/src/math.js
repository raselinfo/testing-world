export function add(numbers) {
  if (!numbers) {
    throw new Error("No input provided")
  }
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
