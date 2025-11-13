import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbMessageChatbot } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

export default function ChatBot() {
  const [isBarExpanded, setBarExpanded] = useState(false);
  const [isChatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Sorry, something went wrong." },
      ]);
    }
  };

  const toggleChat = () => {
    if (!isBarExpanded) {
      setBarExpanded(true);
      setTimeout(() => setChatOpen(true), 300);
    } else {
      setChatOpen(false);
      setTimeout(() => setBarExpanded(false), 300);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-end">
      <AnimatePresence>
        {isBarExpanded && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isChatOpen ? 320 : 60 }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isChatOpen ? 450 : 0 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, delay: isChatOpen ? 0.3 : 0 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-emerald-700 bg-white"
            >
              <div className="flex items-center justify-between bg-gradient-to-r from-emerald-900 to-emerald-700 px-3 py-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <TbMessageChatbot className="size-8" />
                  <p>Chat with us</p>
                </div>
                <button
                  onClick={toggleChat}
                  className="text-sm text-gray-500 hover:text-red-500"
                >
                  <MdClose className="size-5 text-white duration-300 hover:rotate-180" />
                </button>
              </div>

              <div className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[75%] rounded-lg px-3 py-2 text-sm shadow-md ${
                        msg.from === "bot"
                          ? "bg-gray-200 text-gray-800"
                          : "bg-emerald-600 text-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t px-2 py-2 dark:border-gray-700">
                <div className="flex items-center gap-2 pr-2">
                  <textarea
                    className="h-auto flex-1 resize-none px-2 py-1 text-sm focus:outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type your message here ..."
                  />
                  <button
                    onClick={sendMessage}
                    className="group text-emerald-700"
                  >
                    <RiSendPlaneFill className="size-7 duration-300 group-hover:size-8" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isBarExpanded && (
        <button
          onClick={toggleChat}
          className="flex items-center justify-center gap-1 rounded-full bg-emerald-600 px-3 py-2 text-white shadow-lg duration-300 hover:bg-emerald-700 sm:py-3 lg:p-3"
          title="Chat with us"
        >
          <TbMessageChatbot className="size-5" />
          <p className="text-sm">Chat with us</p>
        </button>
      )}
    </div>
  );
}
