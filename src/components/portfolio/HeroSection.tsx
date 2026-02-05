 import { useEffect, useRef, useState } from "react";
 import { motion, useScroll, useTransform } from "framer-motion";
 import { Mail, Linkedin, Github, Download, FolderOpen, MessageSquare } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const HeroSection = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const videoRef = useRef<HTMLVideoElement>(null);
   const [isVideoReady, setIsVideoReady] = useState(false);
 
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start start", "end start"],
   });
 
   const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
   const opacity2 = useTransform(scrollYProgress, [0.1, 0.25, 0.35], [0, 1, 0]);
   const opacity3 = useTransform(scrollYProgress, [0.3, 0.45, 0.55], [0, 1, 0]);
   const opacity4 = useTransform(scrollYProgress, [0.5, 0.65, 0.8], [0, 1, 0]);
 
   useEffect(() => {
     const video = videoRef.current;
     if (!video) return;
 
     let lastScrollY = window.scrollY;
     let isScrolling = false;
     let scrollTimeout: NodeJS.Timeout;
 
     const handleScroll = () => {
       if (!isVideoReady) return;
       
       const currentScrollY = window.scrollY;
       const heroHeight = containerRef.current?.offsetHeight || window.innerHeight;
       
       if (currentScrollY <= heroHeight) {
         if (currentScrollY > lastScrollY) {
           if (video.paused) video.play();
         }
         
         clearTimeout(scrollTimeout);
         scrollTimeout = setTimeout(() => {
           video.pause();
         }, 150);
       } else {
         video.pause();
       }
       
       lastScrollY = currentScrollY;
     };
 
     window.addEventListener("scroll", handleScroll, { passive: true });
     return () => {
       window.removeEventListener("scroll", handleScroll);
       clearTimeout(scrollTimeout);
     };
   }, [isVideoReady]);
 
   const scrollToSection = (id: string) => {
     const element = document.getElementById(id);
     element?.scrollIntoView({ behavior: "smooth" });
   };
 
   return (
     <div ref={containerRef} className="relative h-[400vh]">
       {/* Sticky video container */}
       <div className="sticky top-0 h-screen w-full overflow-hidden">
         {/* Video Background */}
         <video
           ref={videoRef}
           className="absolute inset-0 h-full w-full object-cover"
           muted
           playsInline
           preload="auto"
           onLoadedData={() => setIsVideoReady(true)}
         >
           <source src="/hero-video.mp4" type="video/mp4" />
         </video>
 
         {/* Dark overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
 
         {/* Content Container - Bottom Center */}
         <div className="absolute inset-0 flex items-end justify-center pb-24 px-6">
           <div className="text-center max-w-4xl">
             {/* Phase 1: Name + Title */}
             <motion.div style={{ opacity: opacity1 }} className="space-y-4">
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight text-foreground">
                 Ben Paul Richard
               </h1>
               <p className="text-xl md:text-2xl font-mono text-primary">
                 Control & Quantitative Systems Engineer
               </p>
             </motion.div>
 
             {/* Phase 2: Credentials */}
             <motion.div style={{ opacity: opacity2 }} className="absolute inset-x-0 bottom-24 px-6">
               <div className="max-w-4xl mx-auto text-center space-y-3">
                 <p className="text-lg md:text-xl font-mono text-foreground">
                   MSc Advanced Control Systems & Financial Engineering
                 </p>
                 <p className="text-base md:text-lg text-muted-foreground">
                   BEng Mechanical Engineering
                 </p>
                 <p className="text-sm md:text-base font-mono text-primary/80">
                   Robotics • Control • Quantitative Modeling • AI & Machine Learning
                 </p>
               </div>
             </motion.div>
 
             {/* Phase 3: Secondary line */}
             <motion.div style={{ opacity: opacity3 }} className="absolute inset-x-0 bottom-24 px-6">
               <div className="max-w-3xl mx-auto text-center">
                 <p className="text-lg md:text-xl text-foreground font-serif leading-relaxed">
                   Multidisciplinary Engineer with expertise in Mechanical Systems and Design, 
                   Control Engineering, Robotics, and Quantum Computing.
                 </p>
               </div>
             </motion.div>
 
             {/* Phase 4: Short intro */}
             <motion.div style={{ opacity: opacity4 }} className="absolute inset-x-0 bottom-24 px-6">
               <div className="max-w-3xl mx-auto text-center">
                 <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                   Innovative control systems engineer with hands-on experience in mechanical design, 
                   control systems, embedded firmware, robotics, and hardware-in-the-loop validation. 
                   Passionate about low-level systems, optimization, and intelligent automation.
                 </p>
               </div>
             </motion.div>
           </div>
         </div>
 
         {/* Scroll indicator */}
         <motion.div 
           className="absolute bottom-8 left-1/2 -translate-x-1/2"
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
         >
           <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
             <motion.div 
               className="w-1.5 h-3 bg-primary rounded-full"
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
             />
           </div>
         </motion.div>
       </div>
 
       {/* CTAs after hero - positioned at the end of scroll */}
       <div className="absolute bottom-0 left-0 right-0 bg-background py-16 px-6">
         <div className="max-w-4xl mx-auto text-center space-y-8">
           {/* CTA Buttons */}
           <div className="flex flex-wrap justify-center gap-4">
             <Button
               size="lg"
               onClick={() => scrollToSection("projects")}
               className="font-mono glow-sm hover:glow-md transition-all"
             >
               <FolderOpen className="mr-2 h-4 w-4" />
               View Projects
             </Button>
             <Button
               size="lg"
               variant="outline"
               asChild
               className="font-mono border-primary/50 hover:bg-primary/10"
             >
               <a href="/resume.pdf" download>
                 <Download className="mr-2 h-4 w-4" />
                 Download Resume
               </a>
             </Button>
             <Button
               size="lg"
               variant="outline"
               onClick={() => scrollToSection("contact")}
               className="font-mono border-primary/50 hover:bg-primary/10"
             >
               <MessageSquare className="mr-2 h-4 w-4" />
               Contact Me
             </Button>
           </div>
 
           {/* Social Icons */}
           <div className="flex justify-center gap-6">
             <a
               href="mailto:benpaulrichard.work@gmail.com"
               className="text-muted-foreground hover:text-primary transition-colors"
               aria-label="Email"
             >
               <Mail className="h-6 w-6" />
             </a>
             <a
               href="https://linkedin.com/in/benpaulrichard"
               target="_blank"
               rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors"
               aria-label="LinkedIn"
             >
               <Linkedin className="h-6 w-6" />
             </a>
             <a
               href="https://github.com/benpaulrichard"
               target="_blank"
               rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors"
               aria-label="GitHub"
             >
               <Github className="h-6 w-6" />
             </a>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default HeroSection;