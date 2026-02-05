 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 import { Button } from "@/components/ui/button";
 import { ExternalLink } from "lucide-react";
 
 const projects = [
   {
     title: "Mini GPU",
     problem: "Build RTL GPU architecture for parallel processing",
     approach: "Multi-core dispatcher + ALUs + memory interfaces with pipelined execution",
     tools: ["SystemVerilog", "Verilog", "RTL Design"],
     outcome: "Functional RTL pipeline capable of basic graphics operations",
     pdfLink: "/projects/mini-gpu.pdf",
   },
   {
     title: "Autonomous Mobile Robot",
     problem: "Design autonomous navigation system for unknown environments",
     approach: "SLAM implementation with sensor fusion and path planning algorithms",
     tools: ["ROS", "Python", "C++", "LIDAR"],
     outcome: "Successfully navigated complex indoor environments with obstacle avoidance",
     pdfLink: "/projects/autonomous-robot.pdf",
   },
   {
     title: "Quanser Aero2 Helicopter Control",
     problem: "Stabilize 2-DOF helicopter system under disturbances",
     approach: "LQR controller design with state estimation using Kalman filtering",
     tools: ["MATLAB", "Simulink", "QUARC"],
     outcome: "Achieved stable hover with <5% overshoot and fast disturbance rejection",
     pdfLink: "/projects/quanser-aero.pdf",
   },
   {
     title: "Model Predictive Control (CSTR)",
     problem: "Optimize continuous stirred tank reactor control",
     approach: "MPC implementation with constraints handling and reference tracking",
     tools: ["MATLAB", "Optimization Toolbox"],
     outcome: "Improved process efficiency by 15% while maintaining safety constraints",
     pdfLink: "/projects/mpc-cstr.pdf",
   },
   {
     title: "System Identification",
     problem: "Identify dynamic model parameters from experimental data",
     approach: "ARX/OE model estimation with validation and uncertainty quantification",
     tools: ["MATLAB", "System Identification Toolbox"],
     outcome: "Accurate model prediction with >95% fit on validation data",
     pdfLink: "/projects/system-id.pdf",
   },
   {
     title: "Robotic Manipulator Control",
     problem: "Precise trajectory tracking for industrial manipulator",
     approach: "Computed torque control with friction compensation",
     tools: ["Python", "ROS", "Gazebo"],
     outcome: "Sub-millimeter positioning accuracy in pick-and-place operations",
     pdfLink: "/projects/manipulator.pdf",
   },
   {
     title: "Quantitative ML Framework",
     problem: "Develop predictive models for financial time series",
     approach: "Ensemble methods with feature engineering and risk-adjusted optimization",
     tools: ["Python", "scikit-learn", "Pandas", "NumPy"],
     outcome: "Backtested strategy with Sharpe ratio >1.5",
     pdfLink: "/projects/quant-ml.pdf",
   },
 ];
 
 const ProjectsSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="projects" className="py-24 px-6 relative z-10">
       <div className="max-w-6xl mx-auto">
         <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
         >
           <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-12">
             Featured <span className="text-primary">Projects</span>
           </h2>
 
           <div className="grid md:grid-cols-2 gap-6">
             {projects.map((project, index) => (
               <motion.div
                 key={project.title}
                 initial={{ opacity: 0, y: 20 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
               >
                 <Card className="h-full bg-card/50 backdrop-blur glow-border hover:glow-sm transition-all duration-300 group">
                   <CardHeader>
                     <CardTitle className="font-mono text-xl group-hover:text-primary transition-colors">
                       {project.title}
                     </CardTitle>
                   </CardHeader>
                   <CardContent className="space-y-4">
                     <div>
                       <p className="text-xs font-mono text-primary uppercase tracking-wider mb-1">
                         Problem
                       </p>
                       <p className="text-sm text-muted-foreground font-serif">
                         {project.problem}
                       </p>
                     </div>
 
                     <div>
                       <p className="text-xs font-mono text-primary uppercase tracking-wider mb-1">
                         Approach
                       </p>
                       <p className="text-sm text-muted-foreground font-serif">
                         {project.approach}
                       </p>
                     </div>
 
                     <div>
                       <p className="text-xs font-mono text-primary uppercase tracking-wider mb-1">
                         Tools
                       </p>
                       <div className="flex flex-wrap gap-2">
                         {project.tools.map((tool) => (
                           <span
                             key={tool}
                             className="px-2 py-0.5 text-xs font-mono bg-secondary rounded text-muted-foreground"
                           >
                             {tool}
                           </span>
                         ))}
                       </div>
                     </div>
 
                     <div>
                       <p className="text-xs font-mono text-primary uppercase tracking-wider mb-1">
                         Outcome
                       </p>
                       <p className="text-sm text-foreground font-serif">
                         {project.outcome}
                       </p>
                     </div>
 
                     <Button
                       variant="outline"
                       size="sm"
                       className="w-full mt-4 font-mono border-primary/30 hover:bg-primary/10"
                       asChild
                     >
                       <a href={project.pdfLink} target="_blank" rel="noopener noreferrer">
                         <ExternalLink className="mr-2 h-4 w-4" />
                         View Project
                       </a>
                     </Button>
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
 
 export default ProjectsSection;