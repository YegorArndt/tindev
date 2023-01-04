"use client";

export default function NotFound({ ...props }) {
  return (
    <div className="flex-center border-left border-right border-bottom">
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
