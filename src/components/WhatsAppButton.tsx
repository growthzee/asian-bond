"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "9650939667"; // Your number
  const message = "Hi! I'm interested in Asian Bond products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex items-center justify-end">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center bg-[#25D366] text-white p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)] overflow-hidden group"
      >
        {/* Animated Background Shine */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          animate={{ x: isHovered ? ["100%", "-100%"] : "-100%" }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />

        {/* Text Label - Slides out on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ width: 0, opacity: 0, marginRight: 0 }}
              animate={{ width: "auto", opacity: 1, marginRight: 12 }}
              exit={{ width: 0, opacity: 0, marginRight: 0 }}
              className="font-bold text-sm tracking-wide whitespace-nowrap overflow-hidden"
            >
              CHAT WITH US
            </motion.span>
          )}
        </AnimatePresence>

        {/* The Icon */}
        <motion.div
          animate={{ rotate: isHovered ? [0, -15, 15, 0] : 0 }}
          transition={{ duration: 0.4 }}
        >
          <FaWhatsapp className="text-3xl drop-shadow-md" />
        </motion.div>

        {/* Outer Pulsing Glow */}
        {!isHovered && (
          <span className="absolute inset-0 rounded-2xl ring-4 ring-[#25D366]/30 animate-pulse" />
        )}
      </motion.a>

      {/* Subtle Hint Dot */}
      <motion.div
        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      />
    </div>
  );
}
