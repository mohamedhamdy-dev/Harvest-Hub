import { motion } from "motion/react";
import propTypes from "prop-types";

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function H2({ children }) {
  return (
    <motion.h2
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // 👈 animation runs only once
      className="mb-5 rounded-br-full rounded-tl-full bg-gradient-to-l from-emerald-500 to-emerald-900 px-5 py-2 text-center text-2xl capitalize text-white md:text-3xl"
    >
      {children}
    </motion.h2>
  );
}

H2.propTypes = { children: propTypes.string };
