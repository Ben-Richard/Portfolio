 import { Mail, Linkedin, Github } from "lucide-react";
 
 const Footer = () => {
   return (
     <footer className="py-12 px-6 border-t border-border relative z-10">
       <div className="max-w-6xl mx-auto">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
           {/* Copyright */}
           <div className="text-center md:text-left">
             <p className="font-mono text-sm text-muted-foreground">
               © {new Date().getFullYear()} Ben Paul Richard. All rights reserved.
             </p>
             <p className="font-mono text-xs text-muted-foreground/60 mt-1">
               Control & Quantitative Systems Engineer
             </p>
           </div>
 
           {/* Social Links */}
           <div className="flex items-center gap-6">
             <a
               href="mailto:benpaulrichard.work@gmail.com"
               className="text-muted-foreground hover:text-primary transition-colors"
               aria-label="Email"
             >
               <Mail className="h-5 w-5" />
             </a>
             <a
               href="https://linkedin.com/in/benpaulrichard"
               target="_blank"
               rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors"
               aria-label="LinkedIn"
             >
               <Linkedin className="h-5 w-5" />
             </a>
             <a
               href="https://github.com/benpaulrichard"
               target="_blank"
               rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors"
               aria-label="GitHub"
             >
               <Github className="h-5 w-5" />
             </a>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;