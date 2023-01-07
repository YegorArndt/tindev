import cn from "classnames";

export default function NotFound({
  className,
  ...props
}: { className?: string } & Record<string, unknown>) {
  return (
    <div
      className={cn(
        "flex-center border-left border-right border-bottom",
        className
      )}
    >
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_I9N9FLLCqY.json"
        background="transparent"
        speed="1"
        style={{ width: 300, height: 300 }}
        loop
        autoplay
        {...props}
      ></lottie-player>
    </div>
  );
}
