import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Marquee2() {
  const trackRef2 = useRef<HTMLDivElement>(null);
  const [trackWidth2, setTrackWidth2] = useState(0);

  const text = "--LET'S DIVE IN!";
  const repeats = 20; // initial repeats

  useEffect(() => {
    if (trackRef2.current) {
      setTrackWidth2(trackRef2.current.offsetWidth);
    }
  }, []);

  const repeatedText = Array.from({ length: repeats }, () => text);
  const speed = 200; // pixels per second

  return (
    <div className="relative flex overflow-hidden whitespace-nowrap uppercase bg-[#121315] text-white">
      <motion.div
        ref={trackRef2}
        className="flex"
        animate={trackWidth2 ? { x: [0, -trackWidth2] } : { x: 0 }}
        initial={{ x: 0 }}
        transition={{
          ease: "linear",
          duration: trackWidth2 ? trackWidth2 / speed : 0,
          repeat: Infinity,
        }}
      >
        {repeatedText.map((t, i) => (
          <span
            key={i}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl "
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
