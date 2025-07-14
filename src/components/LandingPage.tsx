import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { templateContent } from "../config/templates/template1";
import { useState } from "react";

export default function LandingPage() {
  const navigate = useNavigate();
  const [showPreChat, setShowPreChat] = useState(false);
  return (
    <div className="relative w-screen min-h-screen flex flex-col justify-between items-center overflow-x-hidden overflow-y-hidden">
      {/* Background Video with Fade Transition */}
      <AnimatePresence mode="wait">
        <motion.video
          key={showPreChat ? "video2" : "video1"}
          className="absolute inset-0 w-screen h-full object-cover z-0"
          src={
            showPreChat
              ? templateContent.introVideo2
              : templateContent.introVideo1
          }
          autoPlay
          loop={!showPreChat}
          muted={!showPreChat}
          playsInline
          onEnded={showPreChat ? () => navigate("/agent") : undefined}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>
      {/* Subtle Overlay for Readability */}
      <div className="absolute inset-0 w-screen h-full z-10 pointer-events-none" />
      {/* Overlay Content */}
      <div className="relative z-20 w-full flex flex-col min-h-screen">
        {/* Logo */}
        <div className="flex justify-center pt-10 md:pt-14 pb-2">
          <motion.img
            src={templateContent.companyLogo}
            alt="Amplitech.ai Logo"
            className="h-7 md:h-9"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </div>
        {/* Headings */}
        <div className="flex flex-col items-center text-center px-4 mt-6 md:mt-8 space-y-1">
          {!showPreChat && (
            <>
              <motion.div
                className="p-1 bg-gradient-to-r from-white to-[#CDB8FE] text-transparent bg-clip-text text-center text-[43px] md:text-[49px] font-medium leading-[106%] tracking-[-0.03em] w-full mb-[10px] [text-decoration:none] [--webkit-text-stroke-color:var(--dark-color)] [--webkit-text-fill-color:inherit]"
                style={{
                  WebkitTextStroke: "0.5px #22223b",
                  WebkitTextFillColor: "inherit",
                  textDecoration: "none",
                  marginTop: 0,
                  marginBottom: "10px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {templateContent.heading}
              </motion.div>
              <motion.p
                className="opacity-50 text-[#4d4d4d] text-center font-[Poppins] font-normal leading-[130%] tracking-[-0.02em] w-full text-[23px] mb-0 mt-0 [text-decoration:none]"
                style={{
                  textDecoration: "none",
                  opacity: 1,
                  marginTop: 0,
                  marginBottom: 0,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {templateContent.subheading}
              </motion.p>
            </>
          )}
        </div>
        {/* Spacer to push button below the face */}
        <div className="flex-1" />
        {/* CTA Button */}
        <div className="flex justify-center rounded-full mb-10 md:mb-12">
          {!showPreChat ? (
            <button
              className="inline-flex h-12 rounded-full bg-blue-600 px-5 py-4 text-sm font-medium text-white backdrop-blur-3xl shadow-md hover:bg-blue-700 transition-colors duration-200"
              style={{ backgroundColor: "#2563eb", borderRadius: "50px" }}
              onClick={() => setShowPreChat(true)}
            >
              {templateContent.button1Text}
            </button>
          ) : (
            <button
              className="inline-flex h-12 bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none border border-white rounded-full"
              style={{ backgroundColor: "#2563eb", borderRadius: "50px" }}
              onClick={() => navigate("/agent")}
            >
              {templateContent.button2Text}
            </button>
          )}
        </div>
        {/* Footer */}
        <div className="flex justify-center pb-6">
          <motion.p
            className="text-white text-xs opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            2025 Amplitech.ai
          </motion.p>
        </div>
      </div>
    </div>
  );
}
