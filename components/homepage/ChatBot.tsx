import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import chatData from '../../lib/chatData';

const ChatBot = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const botResponse = chatData[input.trim().toLowerCase()] || "I'm not sure how to respond to that.";
    const botMessage = { sender: 'bot', text: botResponse };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <motion.div 
      className="w-80 h-96 bg-gray-900 text-gray-100 shadow-lg rounded-lg flex flex-col"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-t-lg">
        <h2 className="text-lg font-semibold">ChatBot</h2>
        <button onClick={onClose} className="text-white hover:text-gray-400">&times;</button>
      </div>
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
            initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-gray-700' : 'bg-gray-600'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {msg.text}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-700">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="w-full p-2 border rounded bg-gray-800 text-gray-100 focus:outline-none focus:ring"
        />
        <button
          onClick={handleSend}
          className="mt-2 w-full bg-gray-700 text-gray-100 p-2 rounded hover:bg-gray-600"
        >
          Send
        </button>
      </div>
    </motion.div>
  );
};

export default ChatBot;
