import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { faqs } from "../constants/index.js";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="md:mt-8 mt-12 py-2 mx-auto max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl text-cyan-100">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-fit rounded-md relative mt-0 mb-2 max-w-md mx-auto px-4 py-2 text-center text-md md:text-xl font-light uppercase tracking-wide bg-slate-950/70 border border-cyan-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.15)]"
      >
        faq
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-fit mb-6 mx-auto text-sm md:text-md lg:text-lg tracking-widest font-serif font-light text-cyan-700"
      >
        Frequently Asking Questions
      </motion.p>

      {faqs.map((faq, i) => {
        const isOpen = open === i;

        return (
          <motion.div
            key={i}
            layout
            className="mb-4 rounded-xl overflow-hidden font-mono backdrop-blur border border-slate-800 bg-slate-900/40"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex justify-between items-center p-5"
            >
              <span className="text-left">{faq.question}</span>
              <motion.span className="text-cyan-700 flex items-center justify-center cursor-pointer">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={32} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus size={32} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="px-5 pb-5 text-slate-200">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              animate={{
                opacity: isOpen ? 1 : 0.3,
                scaleX: isOpen ? 1 : 0.2,
              }}
              className="h-1 bg-cyan-800 origin-left"
            />
          </motion.div>
        );
      })}
    </section>
  );
};

export default FAQ;
