import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import React, {useRef, useState} from "react";
import FirstImage from "../../../assets/image/memories/21/2024-01-05-23-33-37.png";

const Second = () => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })

  const [value, setValue] = useState(0)
  const windowWidth = window.innerWidth;

  useMotionValueEvent(scrollYProgress, "change", (latest: number)=> {
    setValue(latest)
  })

  return (
    <div ref={ref} className={"h-[200vh] w-screen flex flex-col items-center overflow-clip"}>
      <div
        className={
          "h-[100vh] w-[100vw] text-[16px] lg:text-[32px] " +
          "sticky top-0 select-none flex flex-row justify-evenly items-center overflow-hidden"
        }
      >
        <div>
          <motion.div
            initial={{scale: 1, x: 0}}
            animate={{scale: 1 + 3 * value, x: -value * windowWidth * 3 / 2}}
            transition={{ease: "easeOut", duration: 0.618}}
          >
            在这里，没有人会嘲笑你的梦想
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{scale: 1, x: 0}}
            animate={{scale: 1 + 3 * value, x: value * windowWidth * 3 / 2}}
            transition={{ease: "easeOut", duration: 0.618}}
          >
            在创新与分享之间，我们共同成长
          </motion.div>
        </div>
      </div>

      <div className={"h-screen w-screen flex justify-center items-center sticky top-0 bottom-0 overflow-hidden"}>
        <motion.img
          className={"h-[60vw] w-[60vw] max-h-[516px] max-w-[516px] rounded-[16px] overflow-hidden"}
          src={FirstImage} alt={""}
          animate={{
            scale: value,
            opacity: value
          }}
          transition={{ease: "easeOut", duration: 0.618}}
        />
      </div>
    </div>
  );
}

export default React.memo(Second);