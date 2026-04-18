import { motion } from "framer-motion";
import reactIcon from "../assets/react.svg";
import nodeIcon from "../assets/nodeJs.png";
import mongoIcon from "../assets/mongo.png";
import renderIcon from "../assets/renderIcon.png";
import bervoIcon from "../assets/bervoIcon.png";
import cloudinaryIcon from "../assets/cloudinaryIcon.png";
import vercel from "../assets/vercelIcon.webp";
import githubIcon from "../assets/gitIcon.png";

const techIcons = {
    "React.js": reactIcon,
    "Node.js": nodeIcon,
    "MongoDB": mongoIcon,
    "Render": renderIcon,
    "Brevo": bervoIcon,
    "Cloudinary": cloudinaryIcon,
    "Vercel": vercel,
    "Github": githubIcon
};

const TechStackSection = ({ tech }) => {
    const categories = [
        { key: "development", title: "Development" },
        { key: "database", title: "Database" },
        { key: "services", title: "Services" },
        { key: "deployment", title: "Deployment" },
    ];

    // Framer Motion variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="mt-10 relative w-full">
            {/* Optional: Subtle ambient background glow to add depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-3/4 bg-blue-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 gap-6 relative z-10"
            >
                {categories.map(({ key, title }) => (
                    <motion.div
                        variants={itemVariants}
                        key={key}
                        className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)] hover:border-white/20 transition-all duration-500 overflow-hidden"
                    >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 relative z-10">
                            {title}
                        </h3>

                        <div className="flex flex-wrap gap-3 relative z-10">
                            {tech[key]?.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 px-4 py-2.5 bg-white/5 hover:bg-white/15 rounded-xl border border-white/5 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm"
                                >
                                    <div className="p-1 bg-white/5 rounded-md shadow-inner">
                                        <img
                                            src={techIcons[item]}
                                            alt={item}
                                            className="w-5 h-5 object-contain drop-shadow-md"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-gray-200 tracking-wide">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default TechStackSection;