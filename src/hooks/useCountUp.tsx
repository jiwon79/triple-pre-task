import { useEffect, useState } from "react";
import { easeInOutQuad } from "utils/animation";

const useCountUp = (target: number): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 1000;
    const frameDuration = 1000 / 60;
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
