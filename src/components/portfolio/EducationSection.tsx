 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 import { GraduationCap } from "lucide-react";
 
 const education = [
   {
     institution: "Anna University",
     degree: "Bachelor of Engineering",
     field: "Mechanical Engineering",
     period: "2017 - 2021",
     coursework: [
       "Thermodynamics",
       "Fluid Mechanics",
       "Manufacturing Processes",
       "Machine Design",
       "CAD/CAM",
     ],
     highlight: "Foundation in mechanical systems and engineering principles",
   },
   {
     institution: "University of Manchester",
     degree: "Master of Science",
     field: "Advanced Control & Systems Engineering",
     period: "2023 - 2024",
     coursework: [
       "Optimal Control",
       "Robust Control",
       "Nonlinear Systems",
       "System Identification",
       "Model Predictive Control",
     ],
     highlight: "Dissertation: Advanced Control Strategies for Multi-DOF Robotic Systems",
   },
   {
     institution: "WorldQuant University",
     degree: "Master of Science (Online)",
     field: "Financial Engineering",
     period: "2024 - Present",
     coursework: [
       "Stochastic Calculus",
       "Derivatives Pricing",
       "Risk Management",
       "Portfolio Theory",
       "Quantitative Methods",
     ],
     highlight: "Applying control theory principles to financial modeling",
   },
 ];
 
 const EducationSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="education" className="py-24 px-6 relative z-10">
       <div className="max-w-5xl mx-auto">
         <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
         >
           <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-12">
             <span className="text-primary">Education</span>
           </h2>
 
           <div className="grid md:grid-cols-3 gap-6">
             {education.map((edu, index) => (
               <motion.div
                 key={edu.institution}
                 initial={{ opacity: 0, y: 20 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.5, delay: index * 0.15 }}
               >
                 <Card className="h-full bg-card/50 backdrop-blur glow-border hover:glow-sm transition-all duration-300">
                   <CardHeader className="pb-3">
                     <div className="flex items-center gap-3 mb-2">
                       <div className="p-2 rounded-lg bg-primary/10">
                         <GraduationCap className="h-5 w-5 text-primary" />
                       </div>
                       <span className="text-sm font-mono text-primary">{edu.period}</span>
                     </div>
                     <CardTitle className="font-mono text-lg">{edu.institution}</CardTitle>
                     <div className="space-y-1">
                       <p className="text-sm font-mono text-foreground">{edu.degree}</p>
                       <p className="text-sm text-muted-foreground">{edu.field}</p>
                     </div>
                   </CardHeader>
                   <CardContent className="space-y-4">
                     <div>
                       <p className="text-xs font-mono text-primary uppercase tracking-wider mb-2">
                         Key Coursework
                       </p>
                       <div className="flex flex-wrap gap-1">
                         {edu.coursework.map((course) => (
                           <span
                             key={course}
                             className="px-2 py-0.5 text-xs font-mono bg-secondary rounded text-muted-foreground"
                           >
                             {course}
                           </span>
                         ))}
                       </div>
                     </div>
                     <p className="text-sm text-muted-foreground font-serif italic">
                       {edu.highlight}
                     </p>
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
 
 export default EducationSection;