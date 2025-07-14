"use client";

import { useEffect, useRef, useState } from "react";
import { IoMicOutline, IoCloseOutline, IoMicOffOutline } from "react-icons/io5";

export function Conversation({
  isAgentSpeaking,
  setAgentSpeaking,
  isRecording,
  isMuted,
  onToggleRecording,
}: {
  isAgentSpeaking: boolean;
  setAgentSpeaking: (val: boolean) => void;
  isRecording: boolean;
  isMuted: boolean;
  onToggleRecording: () => void;
  onToggleMute: () => void;
}) {
  // Typing animation state
  const [typedText, setTypedText] = useState("");
  const fullText =
    "Hi There, now that you’re here... I’m excited to meet you! I’m";
  const typingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAgentSpeaking) {
      setTypedText("");
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(() => {
          const next = fullText.slice(0, i + 1);
          i++;
          return next;
        });
        if (i >= fullText.length) {
          clearInterval(interval);
          setTimeout(() => setAgentSpeaking(false), 500);
        }
      }, 80);
      return () => clearInterval(interval);
    }
  }, [isAgentSpeaking, setAgentSpeaking]);

  // Auto-scroll as text types (not really needed, but kept for safety)
  useEffect(() => {
    if (typingRef.current) {
      typingRef.current.scrollTop = typingRef.current.scrollHeight;
    }
  }, [typedText]);

  // Microphone permission handler
  const handleRecordClick = () => {
    onToggleRecording();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        ref={typingRef}
        className="flex items-center justify-center w-full min-h-[48px] max-w-xl mx-auto mt-2 mb-2 px-4 text-white text-lg font-medium text-center bg-transparent"
        style={{ minHeight: 48, maxHeight: 96 }}
      >
        {/* Typing animation text */}
        {isAgentSpeaking ? (
          <span>
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        ) : (
          <span>{fullText}</span>
        )}
      </div>
      {/* Record Toggle Button */}
      <div className="flex justify-center items-center cursor-pointer mt-8">
        <button
          onClick={handleRecordClick}
          className={`bg-[#202024] flex items-center justify-center shadow-lg transition-colors focus:outline-none border-2 border-white/20 w-16 h-16 ${
            isRecording ? "ring-4 ring-pink-400" : ""
          }`}
          aria-label={
            isRecording
              ? "Stop recording"
              : isMuted
              ? "Muted"
              : "Start recording"
          }
          style={{ borderRadius: "50px", cursor: "pointer" }}
        >
          {isMuted ? (
            <IoMicOffOutline className="text-white text-3xl cursor-pointer" />
          ) : isRecording ? (
            <IoCloseOutline className="text-white text-3xl cursor-pointer" />
          ) : (
            <IoMicOutline className="text-white text-3xl cursor-pointer" />
          )}
        </button>
      </div>
    </div>
  );
}
