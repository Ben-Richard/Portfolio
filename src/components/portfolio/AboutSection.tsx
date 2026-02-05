 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 
 const AboutSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="about" className="py-24 px-6 relative z-10">
       <div className="max-w-6xl mx-auto">
         <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="grid md:grid-cols-2 gap-12 items-center"
         >
           {/* Image */}
           <div className="relative">
             <div className="aspect-[3/4] bg-secondary rounded-lg overflow-hidden glow-border">
               <div className="w-full h-full flex items-center justify-center text-muted-foreground font-mono text-sm">
                 <div className="text-center space-y-2">
                   <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
                     <span className="text-3xl">👨‍💻</span>
                   </div>
                   <p>Portrait placeholder</p>
                   <p className="text-xs opacity-60">Upload about.jpg to /public</p>
                 </div>
               </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-lg -z-10" />
           </div>
 
           {/* Text Content */}
           <div className="space-y-6">
             <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
               About <span className="text-primary">Me</span>
             </h2>
             
             <div className="space-y-4 text-muted-foreground font-serif text-lg leading-relaxed">
               <p>
                 I am an MSc Advanced Control & Systems Engineering graduate from the 
                 University of Manchester, a B.E. Mechanical Engineering graduate from 
                 Anna University, and currently pursuing an MSc in Financial Engineering 
                 (online) at WorldQuant University.
               </p>
               <p>
                 My expertise spans mechanical design and simulation, embedded systems, 
                 control algorithms, artificial intelligence, robotics, quantitative modeling, 
                 and low-level software optimization, with a strong focus on building intelligent, 
                 high-performance engineering systems.
               </p>
             </div>
 
             {/* Tagline */}
             <blockquote className="border-l-4 border-primary pl-6 py-2">
               <p className="text-xl font-mono text-foreground italic">
                 "I enjoy solving complex system problems at the intersection of software, 
                 hardware, and mathematics."
               </p>
             </blockquote>
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default AboutSection;