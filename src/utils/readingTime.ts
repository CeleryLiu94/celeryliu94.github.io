/**
 * Calculate reading time for a given text content
 * @param content - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Object with reading time info
 */
export function getReadingTime(content: string, wordsPerMinute: number = 200) {
  // Remove HTML tags and get plain text
  const plainText = content.replace(/<[^>]*>/g, '');
  
  // Count words (split by whitespace and filter empty strings)
  const words = plainText.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  
  // Calculate reading time
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
  return {
    wordCount,
    readingTimeMinutes,
    readingTimeText: readingTimeMinutes === 1 ? '1 min read' : `${readingTimeMinutes} min read`
  };
}
