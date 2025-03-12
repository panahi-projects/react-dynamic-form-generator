"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

type SidebarMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg p-5 z-50"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300"
              onClick={onClose}
            >
              <X size={28} />
            </button>

            {/* Navigation Items */}
            <nav className="mt-10 space-y-4">
              <Link
                href="/"
                className="block text-lg text-gray-900 dark:text-white"
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                href="/submissions"
                className="block text-lg text-gray-900 dark:text-white"
                onClick={onClose}
              >
                Submissions List
              </Link>
              <Link
                href="/submit-application"
                className="block text-lg text-gray-900 dark:text-white"
                onClick={onClose}
              >
                New Application
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SidebarMenu;
