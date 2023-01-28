export const AlphabeticalSort = (someString: string, anotherString: string) => {
  if (someString.toLowerCase() < anotherString.toLowerCase()) return -1;
  if (someString.toLowerCase() > anotherString.toLowerCase()) return 1;
  return 0;
}