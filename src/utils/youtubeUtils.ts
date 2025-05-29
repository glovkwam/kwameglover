
/**
 * Helper function to extract YouTube ID from URL or use direct ID
 */
export const extractYouTubeId = (url: string): string => {
  if (!url) return '';
  
  // Check if it's already an ID (not a URL)
  if (url.length < 20 && !url.includes('/') && !url.includes('.')) {
    return url;
  }
  
  // Extract from URL
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : url;
};
