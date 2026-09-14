'use client'

import { fetchWithAuth } from "@/lib/api";

export default function MyComponent() {
  const handleFetchData = async () => {
    try {
      const result = await fetchWithAuth("/profile/me");
      console.log("FastAPI response:", result);
    } catch (error) {
      console.error("FastAPI request failed:", error);
    }
  };

  return (
    <button onClick={handleFetchData}>
      Test FastAPI Route
    </button>
  );
}