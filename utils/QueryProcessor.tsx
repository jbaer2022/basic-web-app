export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Jacob";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "jbaer";
  }

  if (query.toLowerCase().includes("largest") && query.includes(":")) {
    // Extract numbers from the query after the colon
    const colonIndex = query.indexOf(":");
    if (colonIndex !== -1) {
      const numbersPart = query.substring(colonIndex + 1);
      // Use regex to find all integers in the string
      const numberMatches = numbersPart.match(/\d+/g);
      if (numberMatches && numberMatches.length > 0) {
        // Convert string matches to integers and find the maximum
        const numbers = numberMatches.map(num => parseInt(num, 10));
        const largest = Math.max(...numbers);
        return largest.toString();
      }
    }
  }

  return "";
}
