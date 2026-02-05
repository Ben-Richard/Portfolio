 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import { Briefcase } from "lucide-react";
 
 const experiences = [
   {
     title: "Graduate Trainee Engineer",
     company: "Zebronics India",
     period: "2022 - 2023",
     description:
       "Embedded C/C++ firmware for industrial automation. Improved system stability by 20% and reduced commissioning time by 25%. Implemented motor control loops, debugged firmware using oscilloscopes/logic analyzers, and performed board-level diagnostics.",
     metrics: [
       { label: "Stability Improvement", value: "20%" },
       { label: "Commissioning Time Reduction", value: "25%" },
     ],
   },
   {
     title: "Engineering Intern",
     company: "Guru Services (Voltas SSP)",
     period: "2021 - 2022",
     description:
       "Commissioned HVAC systems, tuned PID loops, implemented cascade control, resolved electrical/control faults, calibrated sensors, and optimized system reliability.",
     metrics: [],
   },
   {
     title: "Junior Engineer Intern",
     company: "SKI Precision Products",
     period: "2020 - 2021",
     description:
       "CNC programming, CAD design, FEA validation, and dimensional quality checks for precision manufacturing.",
     metrics: [],
   },
   {
     title: "Engineering Intern",
     company: "Integral Coach Factory (Indian Railways)",
     period: "2019",
     description:
       "Validated welding parameters and updated WPS documentation to improve manufacturing productivity.",
     metrics: [],
   },
 ];
 
 const ExperienceSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="experience" className="py-24 px-6 relative z-10">
       <div className="max-w-4xl mx-auto">
         <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
         >
           <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-12">
             Professional <span className="text-primary">Experience</span>
           </h2>
 
           <div className="relative">
             {/* Timeline line */}
             <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
 
             {experiences.map((exp, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                 animate={isInView ? { opacity: 1, x: 0 } : {}}
                 transition={{ duration: 0.5, delay: index * 0.15 }}
                 className={`relative pl-20 pb-12 md:pl-0 md:w-1/2 ${
                   index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                 }`}
               >
                 {/* Timeline dot */}
                 <div
                   className={`absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background md:left-auto ${
                     index % 2 === 0 ? "md:right-[-8px]" : "md:left-[-8px]"
                   }`}
                 />
 
                 {/* Content card */}
                 <div className="bg-card/50 backdrop-blur p-6 rounded-lg glow-border hover:glow-sm transition-all duration-300">
                   <div className="flex items-center gap-2 mb-2">
                     <Briefcase className="h-4 w-4 text-primary md:hidden" />
                     <span className="text-sm font-mono text-primary">{exp.period}</span>
                   </div>
                   <h3 className="text-xl font-mono font-semibold text-foreground mb-1">
                     {exp.title}
                   </h3>
                   <p className="text-muted-foreground font-mono text-sm mb-3">{exp.company}</p>
                   <p className="text-muted-foreground font-serif text-sm leading-relaxed">
                     {exp.description}
                   </p>
 
                   {exp.metrics.length > 0 && (
                     <div className="flex flex-wrap gap-4 mt-4">
                       {exp.metrics.map((metric, i) => (
                         <div
                           key={i}
                           className="bg-secondary/50 px-3 py-2 rounded-md text-center"
                         >
                           <p className="text-2xl font-mono font-bold text-primary">
                             {metric.value}
                           </p>
                           <p className="text-xs font-mono text-muted-foreground">
                             {metric.label}
                           </p>
                         </div>
                       ))}
                     </div>
                   )}
                 </div>
               </motion.div>
             ))}
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default ExperienceSection;