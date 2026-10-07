/** Short joining words stay lowercase mid-title ("Tacos al Pastor", "Fish and Chips"). */
const SMALL = new Set(['a', 'al', 'and', 'con', 'de', 'del', 'di', 'e', 'en', 'et', 'la', 'le', 'of', 'on', 'or', 'the', 'with', 'y']);

/** "grilled cheese" → "Grilled Cheese"; leaves the rest of each word as typed ("BBQ", "McDonald's"). */
export function titleCase(text: string): string {
  return text.trim().replace(/(^|[\s\-/(])(\p{L}[\p{L}']*)/gu, (_, sep: string, word: string, offset: number) =>
    offset > 0 && SMALL.has(word.toLowerCase()) ? sep + word : sep + word.charAt(0).toUpperCase() + word.slice(1),
  );
}
