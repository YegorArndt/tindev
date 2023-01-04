"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode, SetStateAction, Dispatch } from "react";

type Toggler = ({
  isExpanded,
  setIsExpanded,
}: {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}) => ReactNode;

type AccordionProps = {
  toggler: Toggler;
  expandedContent: ReactNode;
};

export default function Accordion({
  toggler,
  expandedContent,
}: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {toggler({ isExpanded, setIsExpanded })}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                height: "auto",
                opacity: 1,
              },
              closed: {
                height: 0,
                opacity: 0,
              },
            }}
            transition={{ duration: 0.35 }}
          >
            {expandedContent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
