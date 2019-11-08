import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";

const LoadingCircle = () => {
  const iceBlue = useRef(null);
  const white = useRef(null);
  const iceBlue2 = useRef(null);
  const white2 = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      [iceBlue.current, iceBlue2.current],
      0.5,
      { y: 18 },
      { y: -18, yoyo: true, repeat: -1 }
    );
    TweenMax.fromTo(
      [white.current, white2.current],
      0.5,
      { y: -18 },
      { y: 18, repeat: -1, yoyo: true }
    );
  });

  return (
    <svg viewBox="0 0 150 33.2" width="70" height="40">
      <circle ref={iceBlue} cx="16.1" cy="16.6" r="16.1" fill=" #00ceff" />
     
      <circle ref={white} cx="55.2" cy="16.6" r="16.1" fill="white" />
      <circle ref={iceBlue2} cx="94.3" cy="16.6" r="16.1" fill="#00ceff" />
      <circle ref={white2} cx="133.4" cy="16.6" r="16.1" fill="white" />
    </svg>
  );
};

export default LoadingCircle;


