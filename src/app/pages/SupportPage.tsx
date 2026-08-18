import { useState } from "react";
import { toast } from "sonner";
import { motion } from "motion/react";

const STARS = Array.from({ length: 46 }, (_, i) => ({
  left: `${((i * 73 + 13) % 1000) / 10}%`,
  top: `${((i * 117 + 5) % 600) / 10}%`,
  size: (i % 3) + 1,
  opacity: 0.3 + (i % 7) / 10,
}));

export default function SupportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !useCase) {
      toast.error("Please fill in all fields.");
      return;
    }
    // Simulate submission
    toast.success("Feedback submitted! We'll get back to you soon.");
    setName("");
    setEmail("");
    setUseCase("");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[800px] pt-48 pb-24 px-11 w-full flex-1">
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 z-0">
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ width: s.size, height: s.size, left: s.left, top: s.top, opacity: s.opacity }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[800px] mx-auto">
        {/* Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-4 py-1.5 rounded-full mb-6"
        style={{ background: "#292929" }}
      >
        <span className="text-white/80 text-[13px] font-medium tracking-wide">Get help</span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="text-white text-center font-medium mb-12"
        style={{ fontSize: "40px", letterSpacing: "-1.2px", lineHeight: "1.1" }}
      >
        Get support<br />or Share Your Feedback
      </motion.h1>

      {/* Form */}
      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-[500px] rounded-[24px] p-8 flex flex-col gap-5"
        style={{ background: "#151515", border: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-white/60 text-[13px] font-medium ml-1">Name</label>
            <input 
              type="text" 
              placeholder="Akim" 
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-[#202020] text-white px-4 py-3.5 rounded-[12px] outline-none border border-transparent focus:border-[#404040] transition-colors placeholder:text-white/30"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-white/60 text-[13px] font-medium ml-1">Email</label>
            <input 
              type="email" 
              placeholder="Perminov" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-[#202020] text-white px-4 py-3.5 rounded-[12px] outline-none border border-transparent focus:border-[#404040] transition-colors placeholder:text-white/30"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-white/60 text-[13px] font-medium ml-1">Describe your use case</label>
          <textarea 
            placeholder="Use case" 
            value={useCase}
            onChange={e => setUseCase(e.target.value)}
            className="w-full bg-[#202020] text-white px-4 py-4 rounded-[12px] outline-none border border-transparent focus:border-[#404040] transition-colors resize-none placeholder:text-white/30 min-h-[120px]"
          />
        </div>

          <button 
            type="submit"
            className="w-full bg-white text-black font-medium py-3.5 rounded-[12px] mt-2 hover:bg-gray-100 transition-colors active:scale-[0.98]"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
}
