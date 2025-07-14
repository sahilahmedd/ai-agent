import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import type { TemplateContent, TemplateStyles } from "../types/Template";
// Placeholder import for Conversation
import { Conversation } from "./Conversation";
import { useState } from "react";

interface ChatWindowProps {
  templateConfig: {
    templateContent: TemplateContent;
    templateStyles: TemplateStyles;
  };
}

const ChatWindow: React.FC<ChatWindowProps> = ({ templateConfig }) => {
  const { templateContent, templateStyles } = templateConfig;
  const [searchParams] = useSearchParams();
  const isEmbedded = searchParams.get("embed") === "true";
  const navigate = useNavigate();
  // State to control glow
  const [isAgentSpeaking, setAgentSpeaking] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 w-full h-full min-h-screen min-w-screen bg-black flex items-center justify-center overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {/* Full viewport background image */}
        {/* <img
          src={templateStyles.bg?.backgroundImage}
        //   alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        /> */}
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 w-full h-full   z-10 p-24" />
        {/* Centered chat card content */}
        <motion.div
          className={`
            relative flex flex-col items-center justify-center bg-white/80 shadow-2xl
            w-full h-full
            m-0 rounded-none
            md:rounded-[36px] md:m-20
          `}
          style={{
            backgroundImage: templateStyles.bg?.backgroundImage,
            backgroundSize: templateStyles.bg?.backgroundSize,
            backgroundPosition: templateStyles.bg?.backgroundPosition,
            backgroundRepeat: templateStyles.bg?.backgroundRepeat,
            opacity: 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Close Button */}
          {!isEmbedded && (
            <motion.button
              className="absolute top-4 right-4 md:top-8 md:right-8 inline-flex p-1 md:p-2 rounded-full cursor-pointer bg-white/60 shadow z-30"
              style={{ color: templateStyles.buttonTextColor || "#5E2CD9" }}
              onClick={() => navigate(-1)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              aria-label="Close"
            >
              <IoCloseOutline className="text-2xl md:text-3xl" />
            </motion.button>
          )}
          {/* Logo */}
          <motion.div
            className="flex justify-center items-center mt-8 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={templateContent.companyLogo}
              alt="Company Logo"
              className="w-56 md:w-72 drop-shadow-xl"
            />
          </motion.div>
          {/* Avatar */}
          <motion.div
            className="flex justify-center items-center mt-20 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-44 h-44 md:w-56 md:h-56 flex items-center justify-center">
              {/* Always show Neon Glow Background */}
              <div
                className="absolute z-0"
                style={{
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(200,100,255,0.65) 0%, rgba(133,88,242,0.45) 60%, transparent 100%)",
                  filter: "blur(32px)",
                  width: "160%",
                  height: "160%",
                  left: "-30%",
                  top: "-30%",
                }}
              />
              <img
                src={templateContent.avatarImage}
                alt="Agent Avatar"
                className="relative z-10 rounded-full object-cover border-1 border-gray-800 shadow-lg w-44 h-44 md:w-56 md:h-56 bg-white"
              />
            </div>
          </motion.div>
          {/* Chat Area Placeholder */}
          <div className="flex-1 w-full flex flex-col justify-between items-center px-2 md:px-8 pb-4 md:pb-8">
            <Conversation
              isAgentSpeaking={isAgentSpeaking}
              setAgentSpeaking={setAgentSpeaking}
              isRecording={isRecording}
              isMuted={isMuted}
              onToggleRecording={() => setIsRecording((r) => !r)}
              onToggleMute={() => setIsMuted((m) => !m)}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatWindow;
