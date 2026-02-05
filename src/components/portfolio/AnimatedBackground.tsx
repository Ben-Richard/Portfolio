 import { useEffect, useRef } from "react";
 
 const AnimatedBackground = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);
 
   useEffect(() => {
     const canvas = canvasRef.current;
     if (!canvas) return;
 
     const ctx = canvas.getContext("2d");
     if (!ctx) return;
 
     let animationId: number;
     let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
 
     const resize = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
     };
 
     const initParticles = () => {
       particles = [];
       const count = Math.floor((canvas.width * canvas.height) / 25000);
       for (let i = 0; i < count; i++) {
         particles.push({
           x: Math.random() * canvas.width,
           y: Math.random() * canvas.height,
           vx: (Math.random() - 0.5) * 0.3,
           vy: (Math.random() - 0.5) * 0.3,
           size: Math.random() * 2 + 0.5,
           opacity: Math.random() * 0.5 + 0.1,
         });
       }
     };
 
     const drawGrid = () => {
       const gridSize = 60;
       ctx.strokeStyle = "hsla(192, 91%, 50%, 0.03)";
       ctx.lineWidth = 1;
 
       for (let x = 0; x < canvas.width; x += gridSize) {
         ctx.beginPath();
         ctx.moveTo(x, 0);
         ctx.lineTo(x, canvas.height);
         ctx.stroke();
       }
 
       for (let y = 0; y < canvas.height; y += gridSize) {
         ctx.beginPath();
         ctx.moveTo(0, y);
         ctx.lineTo(canvas.width, y);
         ctx.stroke();
       }
     };
 
     const animate = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
 
       drawGrid();
 
       particles.forEach((p) => {
         p.x += p.vx;
         p.y += p.vy;
 
         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
 
         ctx.beginPath();
         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
         ctx.fillStyle = `hsla(192, 91%, 50%, ${p.opacity})`;
         ctx.fill();
       });
 
       animationId = requestAnimationFrame(animate);
     };
 
     resize();
     initParticles();
     animate();
 
     window.addEventListener("resize", () => {
       resize();
       initParticles();
     });
 
     return () => {
       cancelAnimationFrame(animationId);
       window.removeEventListener("resize", resize);
     };
   }, []);
 
   return (
     <canvas
       ref={canvasRef}
       className="fixed inset-0 pointer-events-none z-0"
       style={{ opacity: 0.6 }}
     />
   );
 };
 
 export default AnimatedBackground;