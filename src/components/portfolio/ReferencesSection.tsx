 import { useState, useRef } from "react";
 import { motion, useInView } from "framer-motion";
 import { Card, CardContent } from "@/components/ui/card";
 import { Button } from "@/components/ui/button";
 import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
 } from "@/components/ui/dialog";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Label } from "@/components/ui/label";
 import { MessageSquarePlus, Quote } from "lucide-react";
 
 const initialTestimonials = [
   {
     name: "Alen Donald",
     designation: "HVDC Commissioning Engineer",
     company: "Siemens",
     testimonial:
       "Ben demonstrated exceptional problem-solving skills during our collaboration. His understanding of control systems is remarkable.",
   },
   {
     name: "Dhinakar Selwyn",
     designation: "Vice President & Global Head FS Core Technologies",
     company: "Capgemini",
     testimonial:
       "A brilliant engineer with a unique ability to bridge mechanical systems and software. Highly recommended for complex projects.",
   },
   {
     name: "Gnanaiah Chandrasekaran",
     designation: "Design Manager",
     company: "China Railway First Group",
     testimonial:
       "Ben's attention to detail and systematic approach to engineering problems sets him apart. A true professional.",
   },
   {
     name: "Cliff Evans",
     designation: "EVP & Head Technology Practice",
     company: "Capgemini",
     testimonial:
       "Innovative thinker with strong technical fundamentals. Ben consistently delivers high-quality work.",
   },
 ];
 
 const ReferencesSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [formData, setFormData] = useState({
     email: "",
     name: "",
     designation: "",
     company: "",
     comment: "",
   });
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     
     const subject = encodeURIComponent("New Portfolio Review Submission");
     const body = encodeURIComponent(
       `New review submission from portfolio:\n\n` +
       `Name: ${formData.name}\n` +
       `Email: ${formData.email}\n` +
       `Designation: ${formData.designation}\n` +
       `Company: ${formData.company || "N/A"}\n\n` +
       `Review:\n${formData.comment}`
     );
     
     window.location.href = `mailto:benpaulrichard.work@gmail.com?subject=${subject}&body=${body}`;
     
     setIsDialogOpen(false);
     setFormData({ email: "", name: "", designation: "", company: "", comment: "" });
   };
 
   return (
     <section id="references" className="py-24 px-6 relative z-10 overflow-hidden">
       <div className="max-w-6xl mx-auto">
         <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
         >
           <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-4">
             Kind <span className="text-primary">Words</span>
           </h2>
           <p className="text-center text-muted-foreground font-serif mb-12">
             What colleagues and collaborators say
           </p>
 
           {/* Scrolling carousel */}
           <div className="relative">
             <div className="flex gap-6 animate-scroll-carousel hover:pause">
               {[...initialTestimonials, ...initialTestimonials].map((testimonial, index) => (
                 <Card
                   key={index}
                   className="min-w-[350px] bg-card/50 backdrop-blur glow-border flex-shrink-0"
                 >
                   <CardContent className="pt-6">
                     <Quote className="h-8 w-8 text-primary/30 mb-4" />
                     <p className="text-muted-foreground font-serif italic mb-6 leading-relaxed">
                       "{testimonial.testimonial}"
                     </p>
                     <div className="border-t border-border pt-4">
                       <p className="font-mono font-semibold text-foreground">
                         {testimonial.name}
                       </p>
                       <p className="text-sm text-muted-foreground font-mono">
                         {testimonial.designation}
                       </p>
                       <p className="text-sm text-primary font-mono">{testimonial.company}</p>
                     </div>
                   </CardContent>
                 </Card>
               ))}
             </div>
           </div>
 
           {/* Write a review button */}
           <div className="text-center mt-12 space-y-4">
             <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
               <DialogTrigger asChild>
                 <Button className="font-mono glow-sm hover:glow-md">
                   <MessageSquarePlus className="mr-2 h-4 w-4" />
                   Write a Review
                 </Button>
               </DialogTrigger>
               <DialogContent className="sm:max-w-[425px] bg-card">
                 <DialogHeader>
                   <DialogTitle className="font-mono">Write a Review</DialogTitle>
                   <DialogDescription className="font-serif">
                     Share your experience working with me.
                   </DialogDescription>
                 </DialogHeader>
                 <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                   <div className="space-y-2">
                     <Label htmlFor="name" className="font-mono text-sm">
                       Name *
                     </Label>
                     <Input
                       id="name"
                       required
                       value={formData.name}
                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                       className="font-serif"
                     />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="email" className="font-mono text-sm">
                       Email *
                     </Label>
                     <Input
                       id="email"
                       type="email"
                       required
                       value={formData.email}
                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                       className="font-serif"
                     />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="designation" className="font-mono text-sm">
                       Designation *
                     </Label>
                     <Input
                       id="designation"
                       required
                       value={formData.designation}
                       onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                       className="font-serif"
                     />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="company" className="font-mono text-sm">
                       Company (Optional)
                     </Label>
                     <Input
                       id="company"
                       value={formData.company}
                       onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                       className="font-serif"
                     />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="comment" className="font-mono text-sm">
                       Your Review *
                     </Label>
                     <Textarea
                       id="comment"
                       required
                       rows={4}
                       value={formData.comment}
                       onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                       className="font-serif"
                     />
                   </div>
                   <Button type="submit" className="w-full font-mono">
                     Submit Review
                   </Button>
                 </form>
               </DialogContent>
             </Dialog>
             <p className="text-sm text-muted-foreground font-mono">
               More references available on request
             </p>
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default ReferencesSection;