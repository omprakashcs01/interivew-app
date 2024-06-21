function topKFrequent(words, k) {
  // Step 1: Count Word Frequencies
  const wordCounts = {};
  for (const word of words) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }

  // Step 2: Sort Words by Frequency
  const sortedWords = Object.keys(wordCounts).sort((a, b) => {
    if (wordCounts[a] !== wordCounts[b]) {
      return wordCounts[b] - wordCounts[a]; // Sort by frequency
    } else {
      return a.localeCompare(b); // Sort alphabetically
    }
  });

  // Step 3 & 4: Sort and Return Top K Words
  return sortedWords.slice(0, k);
}

// Example usage:
const words1 = ['i', 'love', 'leetcode', 'i', 'love', 'coding'];
const k1 = 2;
console.log(topKFrequent(words1, k1)); // Output: ["i", "love"]

const words2 = [
  'the',
  'day',
  'is',
  'sunny',
  'the',
  'the',
  'the',
  'sunny',
  'is',
  'is',
];
const k2 = 4;
console.log(topKFrequent(words2, k2)); // Output: ["the", "is", "sunny", "day"]
