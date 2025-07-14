import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { templateContent } from "../config/templates/template1";

export default function PreChatPage() {
  const navigate = useNavigate();
  return (
    <div className="relative w-screen min-h-screen flex flex-col justify-between items-center overflow-x-hidden overflow-y-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-screen h-full object-cover z-0"
        src={templateContent.introVideo2}
        autoPlay
        playsInline
        onEnded={() => navigate("/chat")}
      />
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
        {/* Spacer to push button below the face */}
        <div className="flex-1" />
        {/* CTA Button (Let’s chat) */}
        <div className="flex justify-center mb-16">
          <motion.button
            className="inline-flex h-12 rounded-full bg-[#8558F2] px-8 py-4 text-base font-medium text-white shadow-md hover:bg-[#6d3be6] transition-colors duration-200 focus:outline-none border border-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => navigate("/agent")}
          >
            {templateContent.button2Text}
          </motion.button>
        </div>
        {/* Footer */}
        <div className="flex justify-center pb-6">
          <motion.p
            className="text-[#F6F7FB] text-xs opacity-50"
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
