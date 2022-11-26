import { useAnimation } from "framer-motion";
import { useScrollY } from "../../hooks/useScrollY";
import styles from "./Up.module.css";
import UpIcon from './up.svg';
import { motion } from "framer-motion";
import { useEffect } from "react";

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button 
      className={styles.up} 
      onClick={scrolltoTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <UpIcon />
    </motion.button>
  );
};
