import { useEffect, useState } from "react";

const useCountdown = (initialValue: number): number => {
  const [countdown, setCountdown] = useState<number>(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  return countdown;
};

export default useCountdown;