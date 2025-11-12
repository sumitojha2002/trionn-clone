import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  const text = "--Wild ideas!";
  const repeats = 20; // initial repeats

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.offsetWidth);
    }
  }, []);

  const repeatedText = Array.from({ length: repeats }, () => text);
  const speed = 200; // pixels per second

  return (
    <div className="relative flex overflow-hidden whitespace-nowrap uppercase bg-[#121315] text-white">
      <motion.div
        ref={trackRef}
        className="flex"
        animate={trackWidth ? { x: [-trackWidth, 0] } : { x: 0 }}
        initial={{ x: 0 }}
        transition={{
          ease: "linear",
          duration: trackWidth ? trackWidth / speed : 0,
          repeat: Infinity,
        }}
      >
        {repeatedText.map((t, i) => (
          <span
            key={i}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
