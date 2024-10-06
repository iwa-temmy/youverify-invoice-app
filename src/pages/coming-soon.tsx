import LottieAnimation from "@/components/ui/lottie-animation";
import comingSoon from "@/assets/lotties/coming-soon.json";
const ComingSoon = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "84vh",
        width: "100%",
      }}
      className="bg-white"
    >
      <LottieAnimation animationData={comingSoon} />
    </div>
  );
};

export default ComingSoon;
