import { useEffect, useState } from "react";

const useCountdown = (initialValue) => {
  const [countdown, setCountdown] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  return countdown;
};

export default useCountdown;