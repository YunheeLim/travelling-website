import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    // 모달 창이 닫혔을 때 종료
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
