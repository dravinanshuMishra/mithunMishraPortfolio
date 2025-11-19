import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";
import { BASE_URL } from "../../../config/url";
import { Toaster, toast } from "react-hot-toast";
import { BiLoaderAlt } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  // 📨 Send visit notification when page loads
  useEffect(() => {
    axios
      .post(`${BASE_URL}/api/mail/visit`)
      .then(() => console.log("✅"))
      .catch((err) => console.error("❌ Visit log failed:", err));
  }, []);

  // 🎨 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const avatarVariants = {
    hidden: { scale: 0, rotate: -10 },
    visible: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 } },
    hover: { scale: 1.05, rotate: 5, transition: { type: "spring", stiffness: 300 } },
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      toast.error("⚠️ All fields are required.");
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    const loadingToast = toast.loading("Sending your message... 📤");

    try {
      await axios.post(`${BASE_URL}/api/mail/contact`, {
        name,
        email,
        message,
      });

      toast.dismiss(loadingToast);
      toast.success(
        "💫 Thanks for your message! I really appreciate you taking the time to connect 💖",
        {
          duration: 5000, // 🕐 duration in milliseconds (5 seconds)
        }
      );
      form.reset();

      // Close modal after a short delay
      setTimeout(() => setIsModalOpen(false), 1500);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("❌ Failed to send message. Try again later.");
      console.error("❌ Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section
      id="home"
      className="min-h-screen text-white flex flex-col md:flex-row w-full justify-between items-center p-6 md:p-20 md:pt-14 pt-24 lg:pt-28 lg:p-36 bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#2c3e50] relative overflow-hidden"
    >
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1e293b",
            color: "#fff",
            border: "1px solid #465697",
            borderRadius: "10px",
            padding: "12px 16px",
          },
          success: {
            iconTheme: { primary: "#ffb347", secondary: "#1e293b" },
          },
        }}
      />
      {/* Background Blobs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/10 rounded-full blur-lg" />

      <motion.div
        className="flex flex-col md:flex-row w-full max-w-7xl justify-between items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT TEXT SECTION */}
        <motion.div className="md:w-1/2 lg:w-2/5 md:pr-10 space-y-6 z-10" variants={containerVariants}>
          <motion.h3 className="text-lg font-light text-gray-300" variants={itemVariants}>
            Hello, I'm
          </motion.h3>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white pb-2 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Biplab
            <span className="bg-gradient-to-r ml-3 from-[#465697] to-[#5a67b1] bg-clip-text text-transparent">
              Biswas
            </span>
          </motion.h1>

          <motion.div className="text-xl md:text-2xl font-semibold flex flex-wrap items-center" variants={itemVariants}>
            <span className="mr-2 text-gray-200">I'm a</span>
            <TextChange />
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-gray-300 tracking-normal max-w-lg mt-4 leading-relaxed"
            variants={itemVariants}
          >
            Passionate Full Stack Developer specializing in building scalable, responsive, and
            user-friendly web applications using{" "}
            <span className="font-semibold text-white">React.js</span>,{" "}
            <span className="font-semibold text-white">Node.js</span>, and{" "}
            <span className="font-semibold text-white">MongoDB/PostgreSQL</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex w-full flex-wrap gap-4 mt-8" variants={itemVariants}>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 text-white bg-gradient-to-r from-[#465697] to-[#5a67b1] text-md font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 border border-blue-500/30"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59,130,246,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>

            <motion.button
              onClick={() => {
                toast.success("📄 Resume is being downloading!");
                // trigger file download
                setTimeout(() => {
                  const link = document.createElement("a");
                  link.href = `${import.meta.env.BASE_URL}BIPLAB_Resume.pdf`; // resume stored in public folder
                  link.download = "Biplab_Biswas_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }, 10);
              }}
              className="px-8 py-3 flex items-center gap-2 text-white border border-white/30 text-md font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="text-xl" />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="mt-12 md:mt-0 md:w-1/2 lg:w-2/5 flex justify-center items-center relative"
          variants={avatarVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.img
            className="w-72 md:w-80 lg:w-96 drop-shadow-2xl z-10 relative"
            src={avatarImg}
            alt="Biplab Biswas Avatar"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl scale-110 z-0" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Outer glow */}
            <motion.div
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="w-[400px] h-[400px] bg-gradient-to-r from-[#465697] to-[#ffb347] rounded-full blur-[120px]" />
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-gradient-to-br from-[#0f172a]/90 to-[#1e293b]/90 border border-[#465697]/50 backdrop-blur-xl p-8 rounded-2xl shadow-[0_0_30px_rgba(70,86,151,0.3)] max-w-md w-[90%] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#465697] via-[#ffb347] to-[#465697] animate-pulse" />

              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg transition-transform duration-200 hover:scale-110"
              >
                ✕
              </button>

              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-[#ffb347] mb-2">Let’s Connect ✨</h2>
                <p className="text-gray-300 text-sm">
                  Have a question or opportunity? Drop me a quick message!
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
                <motion.div className="flex flex-col space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 rounded-lg bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#ffb347] focus:bg-white/15 transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div className="flex flex-col space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Your Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full p-3 rounded-lg bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#ffb347] focus:bg-white/15 transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div className="flex flex-col space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Type your message here..."
                    className="w-full p-3 rounded-lg bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#ffb347] focus:bg-white/15 transition-all resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>

                {formStatus && (
                  <div
                    role="status"
                    className={`px-3 py-2 rounded-md text-sm ${formStatus.type === "success"
                      ? "bg-green-800 text-green-200"
                      : "bg-rose-900 text-rose-200"
                      }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <motion.button
                  type="submit"
                  whileHover={!isSubmitting ? { scale: 1.03 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  disabled={isSubmitting}
                  className={`relative w-full py-3 rounded-full font-semibold text-white overflow-hidden transition-all duration-300
    ${isSubmitting
                      ? "bg-gradient-to-r from-[#465697] to-[#5a67b1] opacity-70 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#465697] to-[#5a67b1] hover:from-[#5a67b1] hover:to-[#465697] shadow-lg hover:shadow-[#465697]/40"
                    }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <BiLoaderAlt className="animate-spin text-xl" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </span>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#ffb347]/20 to-[#465697]/30 blur-md"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Home;
