import Cookies from "js-cookie";

export function useDisplayName() {
  // Try to get the displayName from cookies
  const cookieDisplayName = Cookies.get("userDisplayName");

  // Fallback to localStorage if not found in cookies
  const localStorageDisplayName = typeof window !== "undefined" 
    ? localStorage.getItem("userDisplayName") 
    : null;

  return cookieDisplayName || localStorageDisplayName || null;
}