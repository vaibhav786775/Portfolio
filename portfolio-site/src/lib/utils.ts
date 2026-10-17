/**
 * Utility functions for styling and general operations.
 */

/**
 * Combines conditional class names into a single string.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
