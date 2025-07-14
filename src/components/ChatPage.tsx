import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrophone } from "react-icons/fa";

const logoUrl = "/images/amplitech-logo.svg";
const avatarUrl = "/images/Raisa-agent-sara.svg";

export default function ChatPage() {
  const [connecting, setConnecting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setConnecting(false), 2000); // 2s mock connect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-[#131021]"
      style={{
        background:
          "radial-gradient(ellipse at center, #232046 0%, #131021 100%)",
      }}
    >
      <div className="relative w-full min-h-[80vh] rounded-[3rem] bg-black/70 shadow-2xl flex flex-col items-center px-4 py-8 md:py-12">
        {/* Close button (top right) */}
        <button className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-colors text-2xl text-white/60">
          ×
        </button>
        {/* Logo */}
        <div className="flex justify-center pt-2 pb-8">
          <img src={logoUrl} alt="Amplitech.ai Logo" className="h-8 md:h-10" />
        </div>
        {/* Avatar with animated glow */}
        <div className="flex flex-col items-center">
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ zIndex: 0 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: [1, 1.15, 1],
                boxShadow: [
                  "0 0 0 0 rgba(133,88,242,0.5)",
                  "0 0 60px 30px rgba(133,88,242,0.25)",
                  "0 0 0 0 rgba(133,88,242,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            />
            <img
              src={avatarUrl}
              alt="Agent Avatar"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl z-10"
            />
          </motion.div>
          {/* Welcome message */}
          <motion.p
            className="mt-10 text-center text-lg md:text-xl text-white/80 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Hi There, now that you're here... I'm excited to meet you! I'm
            RAISA, and I'd love to show you how current businesses like yours
            are turning marketing clicks and scans
          </motion.p>
        </div>
        {/* Mic/Connecting Button */}
        <div className="flex flex-col items-center mt-8">
          <AnimatePresence mode="wait">
            {connecting ? (
              <motion.button
                key="connecting"
                className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white text-lg shadow-lg border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                disabled
              >
                <span className="flex items-center gap-2">
                  Connecting
                  <span className="animate-pulse">…</span>
                </span>
              </motion.button>
            ) : (
              <motion.button
                key="mic"
                className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white text-2xl shadow-lg border border-white/20 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                {/* Glowing effect behind mic */}
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{ zIndex: 0 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(133,88,242,0.5)",
                      "0 0 30px 10px rgba(133,88,242,0.25)",
                      "0 0 0 0 rgba(133,88,242,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                <FaMicrophone className="relative z-10" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
