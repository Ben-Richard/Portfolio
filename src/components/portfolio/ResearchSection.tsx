 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 import { FileText, Award } from "lucide-react";
 
 const publications = [
   {
     type: "Patent",
     icon: Award,
     title: "Electric Power Generation from IC Engine Waste Heat",
     year: "2023",
     description:
       "Novel thermoelectric generation system utilizing waste heat from internal combustion engines to produce supplementary electric power.",
     pdfLink: "/research/patent-waste-heat.pdf",
   },
   {
     type: "IEEE Paper",
     icon: FileText,
     title: "Army Surveillance Robot with Landmine Detection",
     year: "2022",
     description:
       "Design and implementation of an autonomous surveillance robot equipped with metal detection capabilities for landmine identification in hazardous terrain.",
     pdfLink: "/research/ieee-surveillance-robot.pdf",
   },
 ];
 
 const ResearchSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="research" className="py-24 px-6 relative z-10">
       <div className="max-w-4xl mx-auto">
         <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
         >
           <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-12">
             Research & <span className="text-primary">Publications</span>
           </h2>
 
           <div className="grid md:grid-cols-2 gap-6">
             {publications.map((pub, index) => (
               <motion.a
                 key={pub.title}
                 href={pub.pdfLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 initial={{ opacity: 0, y: 20 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.5, delay: index * 0.15 }}
                 className="block group"
               >
                 <Card className="h-full bg-card/50 backdrop-blur glow-border hover:glow-sm transition-all duration-300 cursor-pointer">
                   <CardHeader>
                     <div className="flex items-center gap-3">
                       <div className="p-2 rounded-lg bg-primary/10">
                         <pub.icon className="h-5 w-5 text-primary" />
                       </div>
                       <div>
                         <span className="text-xs font-mono text-primary uppercase tracking-wider">
                           {pub.type}
                         </span>
                         <p className="text-sm text-muted-foreground font-mono">{pub.year}</p>
                       </div>
                     </div>
                     <CardTitle className="font-mono text-lg mt-3 group-hover:text-primary transition-colors">
                       {pub.title}
                     </CardTitle>
                   </CardHeader>
                   <CardContent>
                     <p className="text-sm text-muted-foreground font-serif leading-relaxed">
                       {pub.description}
                     </p>
                     <p className="text-sm font-mono text-primary mt-4 group-hover:underline">
                       View Publication →
                     </p>
                   </CardContent>
                 </Card>
               </motion.a>
             ))}
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default ResearchSection;