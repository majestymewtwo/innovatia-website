import { useCallback, useEffect, useRef, useState } from "react";

import ReactCanvasConfetti from "react-canvas-confetti";

export default function Confetti() {
  const refAnimationInstance = useRef(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7, x: 1 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const makeShot1 = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7, x: 0 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);
  const makeShot2 = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.1 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  useEffect(() => {
    rightfire();
    leftfire();
    topfire();
  }, [start]);

  //right confetti
  const rightfire = useCallback(() => {
    makeShot(0.25, {
      spread: 100,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 160,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  // left confetti
  const leftfire = useCallback(() => {
    makeShot1(0.25, {
      spread: 100,
      startVelocity: 55,
    });

    makeShot1(0.2, {
      spread: 160,
    });

    makeShot1(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot1(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot1(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot1]);

  //top confetti
  const topfire = useCallback(() => {
    makeShot2(0.25, {
      spread: 180,
      startVelocity: 55,
      ticks: 350,
    });

    makeShot2(0.2, {
      spread: 160,
      ticks: 350,
    });

    makeShot2(0.35, {
      spread: 120,
      decay: 0.91,
      scalar: 0.8,
      ticks: 350,
    });

    makeShot2(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      ticks: 350,
    });

    makeShot2(0.1, {
      spread: 120,
      startVelocity: 45,
      ticks: 350,
    });
  }, [makeShot2]);
  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    />
  );
}
