import type { CompetitiveProfile } from "@/types/portfolio";

/**
 * ============================================================================
 * COMPETITIVE PROGRAMMING PROFILES CONFIGURATION
 * ============================================================================
 * Add or update your handles, ratings, and problem stats across algorithmic platforms.
 */
export const cpProfiles: CompetitiveProfile[] = [
  {
    platform: "LeetCode",
    handle: "vaibhav_chhabra",
    profileUrl: "https://leetcode.com/vaibhav_chhabra", // Configurable profile URL
    rating: "1606",
    rank: "Max Streak: 105 Days",
    stats: "500+ Data Structures & Algorithms problems solved with a 105-day maximum active streak.",
  },
  {
    platform: "CodeChef",
    handle: "vaibhav_chhabra",
    profileUrl: "https://codechef.com/users/vaibhav_chhabra", // Configurable profile URL
    rating: "1573",
    rank: "2-Star (Division 2)",
    stats: "Regular participant in rated Starters and Cook-Off competitive programming rounds.",
  },
];
