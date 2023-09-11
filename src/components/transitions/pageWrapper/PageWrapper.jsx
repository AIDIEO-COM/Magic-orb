"use client"
import { motion } from "framer-motion";

const PageWrapper = ({children}) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration: 0.5}}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    );
};

export default PageWrapper;