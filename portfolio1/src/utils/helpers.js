/**
 * Format a date string in the format YYYY-MM to a localized date string
 * @param {string} dateString - Date string in the format YYYY-MM
 * @param {string} language - Language code (fr or en)
 * @returns {string} - Formatted date string
 */
export const formatDate = (dateString) => {
  // Check if the date is valid before formatting
  if (!dateString || dateString === 'now' || dateString === 'present') {
    return 'Present';
  }
  
  try {
    // Try to create a valid date object
    const date = new Date(dateString);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      // If date is invalid, just return the original string
      return dateString;
    }
    
    // Format the date
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  } catch (error) {
    // If any error occurs, return the original string
    console.warn('Date formatting error:', error);
    return dateString;
  }
};

  
  /**
   * Generate a random ID
   * @returns {string} - Random ID
   */
  export const generateId = () => {
    return Math.random().toString(36).substring(2, 9);
  };
  
  /**
   * Debounce a function to limit how often it can be called
   * @param {Function} func - The function to debounce
   * @param {number} wait - The time to wait in milliseconds
   * @returns {Function} - Debounced function
   */
  export const debounce = (func, wait = 300) => {
    let timeout;
    
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  /**
   * Throttle a function to limit how often it can be called
   * @param {Function} func - The function to throttle
   * @param {number} limit - The time limit in milliseconds
   * @returns {Function} - Throttled function
   */
  export const throttle = (func, limit = 300) => {
    let inThrottle;
    
    return function executedFunction(...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  };
  
  /**
   * Truncate a string to a specific length
   * @param {string} str - The string to truncate
   * @param {number} length - Maximum length
   * @returns {string} - Truncated string
   */
  export const truncateString = (str, length = 100) => {
    if (!str) return '';
    if (str.length <= length) return str;
    
    return str.slice(0, length) + '...';
  };
  
  /**
   * Check if an element is in the viewport
   * @param {HTMLElement} element - The element to check
   * @param {number} offset - Offset in pixels
   * @returns {boolean} - Whether the element is in the viewport
   */
  export const isInViewport = (element, offset = 0) => {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    
    return (
      rect.top >= 0 - offset &&
      rect.left >= 0 - offset &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
    );
  };
  
  /**
   * Shuffle an array
   * @param {Array} array - The array to shuffle
   * @returns {Array} - Shuffled array
   */
  export const shuffleArray = (array) => {
    const newArray = [...array];
    
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    
    return newArray;
  };