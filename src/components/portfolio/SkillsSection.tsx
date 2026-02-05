 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 import { Cpu, Bot, TrendingUp, Microchip, Wrench } from "lucide-react";
 
 const skillCategories = [
   {
     title: "Embedded & Low-Level",
     icon: Cpu,
     skills: [
       "C/C++",
       "Embedded C",
       "ARM Cortex-M",
       "Linux kernel basics",
       "Device drivers",
       "Bootloaders",
       "HIL testing",
       "UART / SPI / I2C",
       "TCP/IP",
     ],
   },
   {
     title: "Control & Robotics",
     icon: Bot,
     skills: [
       "PID / MPC / LQR / LQG",
       "State-space modeling",
       "Kalman & Particle Filters",
       "SLAM",
       "System Identification (ARX/OE)",
       "Robotic manipulators",
       "Autonomous navigation",
     ],
   },
   {
     title: "Quant & ML",
     icon: TrendingUp,
     skills: [
       "Python (NumPy, Pandas, scikit-learn)",
       "Monte Carlo simulation",
       "Portfolio optimization",
       "Time-series forecasting",
       "Derivatives pricing",
       "Risk modeling (VaR / CVaR)",
     ],
   },
   {
     title: "Hardware & Architecture",
     icon: Microchip,
     skills: [
       "SystemVerilog / Verilog",
       "Digital logic",
       "RTL comprehension",
       "CPU microarchitecture fundamentals",
       "GPU concepts",
     ],
   },
   {
     title: "Tools",
     icon: Wrench,
     skills: [
       "MATLAB/Simulink",
       "QUARC",
       "SolidWorks",
       "AutoCAD",
       "Ansys",
       "Docker",
       "Git",
       "Linux",
     ],
   },
 ];
 
 const SkillsSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="skills" className="py-24 px-6 relative z-10">
       <div className="max-w-6xl mx-auto">
         <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
         >
           <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-12">
             Technical <span className="text-primary">Skills</span>
           </h2>
 
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {skillCategories.map((category, index) => (
               <motion.div
                 key={category.title}
                 initial={{ opacity: 0, y: 20 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
               >
                 <Card className="h-full bg-card/50 backdrop-blur glow-border hover:glow-sm transition-all duration-300">
                   <CardHeader className="pb-3">
                     <CardTitle className="flex items-center gap-3 font-mono text-lg">
                       <category.icon className="h-5 w-5 text-primary" />
                       {category.title}
                     </CardTitle>
                   </CardHeader>
                   <CardContent>
                     <div className="flex flex-wrap gap-2">
                       {category.skills.map((skill) => (
                         <span
                           key={skill}
                           className="px-3 py-1 text-sm font-mono bg-secondary rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                         >
                           {skill}
                         </span>
                       ))}
                     </div>
                   </CardContent>
                 </Card>
               </motion.div>
             ))}
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default SkillsSection;