 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import { BadgeCheck } from "lucide-react";
 
 const certifications = [
   { name: "Python Developer", link: "/certifications/python-developer.pdf" },
   { name: "C++ OOP", link: "/certifications/cpp-oop.pdf" },
   { name: "Machine Learning & Deep Learning", link: "/certifications/ml-dl.pdf" },
   { name: "Ethical Hacking", link: "/certifications/ethical-hacking.pdf" },
   { name: "System Design", link: "/certifications/system-design.pdf" },
   { name: "Google IT Support", link: "/certifications/google-it.pdf" },
   { name: "PLC Developer", link: "/certifications/plc-developer.pdf" },
   { name: "Quantum Computing", link: "/certifications/quantum-computing.pdf" },
   { name: "Six Sigma", link: "/certifications/six-sigma.pdf" },
 ];
 
 const CertificationsSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="certifications" className="py-24 px-6 relative z-10">
       <div className="max-w-4xl mx-auto">
         <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
         >
           <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-12">
             <span className="text-primary">Certifications</span>
           </h2>
 
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
             {certifications.map((cert, index) => (
               <motion.a
                 key={cert.name}
                 href={cert.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
                 transition={{ duration: 0.4, delay: index * 0.05 }}
                 className="group flex items-center gap-3 p-4 bg-card/50 backdrop-blur rounded-lg glow-border hover:glow-sm transition-all duration-300 cursor-pointer"
               >
                 <BadgeCheck className="h-5 w-5 text-primary shrink-0" />
                 <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                   {cert.name}
                 </span>
               </motion.a>
             ))}
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default CertificationsSection;