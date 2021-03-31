import { useEffect, useState } from "react";
import { easeInOutQuad } from "utils/easeInOutQuad";

const useCountUp = (target: number): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 700;
    const frameDuration = 700 / 60;
    const totalFrames = Math.round(animationDuration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = easeInOutQuad(frame / totalFrames);
      const currentCount = Math.round(target * progress);

      if (target >= currentCount) {
        setCount(currentCount);
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [target]);

  return count;
};

export default useCountUp;
