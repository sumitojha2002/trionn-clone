import { motion, useMotionValue, useAnimation } from "framer-motion";
import { useEffect } from "react";
import SilderCard from "../utilis/SilderCard";
import Person1 from "../assets/profile-pics/person.avif";
import Person2 from "../assets/profile-pics/Person1.avif";
import Person3 from "../assets/profile-pics/Person2.avif";
import Person4 from "../assets/profile-pics/person3.avif";
import Person5 from "../assets/profile-pics/person4.avif";
import SilderCard2 from "../utilis/SilderCard2";

const CardInfo = [
  {
    type: "primary",
    image: Person1,
    name: "Malte Kramer",
    post: "Founder & CEO of Luxury Presence",
  },
  {
    type: "primary",
    image: Person2,
    name: "Douge Petrie",
    post: "Founder & CEO of Fast Resume",
  },
  {
    type: "primary",
    image: Person3,
    name: "Zoltan Csonka",
    post: "Founder & CEO of Ventigence",
  },
  {
    type: "secondary",
    image: Person4,
    name: "Albert Mizuno",
    post: "Founder of the Mizuno",
    desc: "We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly recommend Trionn to businesses in the service sector or anyone in need of a web design & development solution.",
  },
  {
    type: "secondary",
    image: Person5,
    name: "Stephan Dash",
    post: "Founder and CEO of Credible",
    desc: "The Trionn team is extremely reliable, professional and talented. It has been a great pleasure collaborating with them over many months.",
  },
];

const LoopCards = [...CardInfo, ...CardInfo, ...CardInfo];

function Slider() {
  const x = useMotionValue(0);
  const controls = useAnimation();

  const cardWidth = 700;
  const cycleWidth = cardWidth * CardInfo.length;

  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      if (latest < -cycleWidth) {
        controls.set({ x: latest + cycleWidth });
      }
      if (latest > 0) {
        controls.set({ x: latest - cycleWidth });
      }
    });

    return () => unsubscribe();
  }, [x, controls, cycleWidth]);

  return (
    <div className="overflow-hidden cursor-grab">
      <motion.div
        className="flex gap-6 px-4 py-8"
        drag="x"
        style={{ x }}
        animate={controls}
        dragElastic={0.05}
        whileTap={{ cursor: "grabbing" }}
      >
        {LoopCards.map((e, index) => {
          if (e.type === "primary") {
            return <SilderCard key={index} {...e} />;
          }
          if (e.type === "secondary") {
            return <SilderCard2 key={index} {...e} />;
          }
        })}
      </motion.div>
    </div>
  );
}

export default Slider;
