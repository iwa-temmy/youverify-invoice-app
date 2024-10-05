import { Dictionary } from "@/types/dictionary";
import { useRef, useEffect } from "react";

const LottieAnimation = ({
  animationData,
  height = "unset",
}: {
  animationData: Dictionary;
  height?: number | string;
}) => {
  const container = useRef(null);

  useEffect(() => {
    import("lottie-web").then((lottie) => {
      if (container.current) {
        lottie.default.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: animationData,
        });
      }
    });
  }, [animationData]);

  return (
    <div
      ref={container}
      className="overflow-hidden"
      style={{ height: height }}
    />
  );
};

export default LottieAnimation;
