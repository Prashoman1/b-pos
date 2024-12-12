import { useCallback, useEffect } from "react";

interface UseKeywordPressProps {
  reset: () => void;
  payNow: () => void;
}

export default function useKeywordPress(): UseKeywordPressProps {
  const reset = useCallback(() => {
    console.log("Reset action triggered!");
  }, []);

  const payNow = useCallback(() => {
    console.log("Pay Now action triggered!");
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F4") {
        event.preventDefault(); 
        reset();
      } else if (event.key === "F5") {
        event.preventDefault(); 
        payNow();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [reset, payNow]);

  return { reset, payNow };
}
