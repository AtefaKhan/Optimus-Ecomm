import { motion } from "framer-motion";
import React from "react";

function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      {children}
    </motion.div>
  );
}

export default React.memo(Reveal);