 import { useState, useRef } from "react";
 import { motion, useInView } from "framer-motion";
 import { Card, CardContent } from "@/components/ui/card";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Label } from "@/components/ui/label";
 import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
 
 const contactDetails = [
   {
     icon: Mail,
     label: "Email",
     value: "benpaulrichard.work@gmail.com",
     href: "mailto:benpaulrichard.work@gmail.com",
   },
   {
     icon: Phone,
     label: "Phone",
     value: "+44 7XXX XXXXXX",
     href: "tel:+447000000000",
   },
   {
     icon: Linkedin,
     label: "LinkedIn",
     value: "linkedin.com/in/benpaulrichard",
     href: "https://linkedin.com/in/benpaulrichard",
   },
   {
     icon: Github,
     label: "GitHub",
     value: "github.com/benpaulrichard",
     href: "https://github.com/benpaulrichard",
   },
 ];
 
 const ContactSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     message: "",
   });
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     
     const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
     const body = encodeURIComponent(
       `Name: ${formData.name}\n` +
       `Email: ${formData.email}\n\n` +
       `Message:\n${formData.message}`
     );
     
     window.location.href = `mailto:benpaulrichard.work@gmail.com?subject=${subject}&body=${body}`;
   };
 
   return (
     <section id="contact" className="py-24 px-6 relative z-10">
       <div className="max-w-5xl mx-auto">
         <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
         >
           <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-4">
             Let's Work <span className="text-primary">Together</span>
           </h2>
           <p className="text-center text-muted-foreground font-serif max-w-2xl mx-auto mb-12">
             I'm currently available for freelance projects and open to full-time opportunities. 
             If you have a project that needs engineering depth or creative problem-solving, 
             I'd love to hear from you.
           </p>
 
           <div className="grid md:grid-cols-2 gap-12">
             {/* Contact Details */}
             <div className="space-y-6">
               <h3 className="font-mono text-xl font-semibold text-foreground mb-6">
                 Contact Details
               </h3>
               <div className="space-y-4">
                 {contactDetails.map((detail) => (
                   <motion.a
                     key={detail.label}
                     href={detail.href}
                     target={detail.href.startsWith("http") ? "_blank" : undefined}
                     rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                     initial={{ opacity: 0, x: -20 }}
                     animate={isInView ? { opacity: 1, x: 0 } : {}}
                     transition={{ duration: 0.4 }}
                     className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur rounded-lg glow-border hover:glow-sm transition-all duration-300 group"
                   >
                     <div className="p-2 rounded-lg bg-primary/10">
                       <detail.icon className="h-5 w-5 text-primary" />
                     </div>
                     <div>
                       <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                         {detail.label}
                       </p>
                       <p className="font-mono text-foreground group-hover:text-primary transition-colors">
                         {detail.value}
                       </p>
                     </div>
                   </motion.a>
                 ))}
               </div>
             </div>
 
             {/* Contact Form */}
             <Card className="bg-card/50 backdrop-blur glow-border">
               <CardContent className="pt-6">
                 <h3 className="font-mono text-xl font-semibold text-foreground mb-6">
                   Send a Message
                 </h3>
                 <form onSubmit={handleSubmit} className="space-y-4">
                   <div className="space-y-2">
                     <Label htmlFor="contact-name" className="font-mono text-sm">
                       Name
                     </Label>
                     <Input
                       id="contact-name"
                       required
                       value={formData.name}
                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                       className="font-serif"
                       placeholder="Your name"
                     />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="contact-email" className="font-mono text-sm">
                       Email
                     </Label>
                     <Input
                       id="contact-email"
                       type="email"
                       required
                       value={formData.email}
                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                       className="font-serif"
                       placeholder="your.email@example.com"
                     />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="contact-message" className="font-mono text-sm">
                       Message
                     </Label>
                     <Textarea
                       id="contact-message"
                       required
                       rows={5}
                       value={formData.message}
                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                       className="font-serif"
                       placeholder="Tell me about your project..."
                     />
                   </div>
                   <Button type="submit" className="w-full font-mono glow-sm hover:glow-md">
                     <Send className="mr-2 h-4 w-4" />
                     Send Message
                   </Button>
                 </form>
               </CardContent>
             </Card>
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default ContactSection;