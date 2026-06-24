import { motion } from "framer-motion";
import { useState, Suspense } from "react";
import { Instagram, Mail, MapPin, Send, Music, Youtube, MessageCircle } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float } from "@react-three/drei";
import * as THREE from "three";
import React from "react";
import { toast } from "sonner";
import SafeCanvas from "./SafeCanvas";

const FooterFlagModel = () => {
  const { scene } = useGLTF("/models/Bandeira_Correndo_3D.glb");
  const meshRef = React.useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
    }
  });

  return (
    <group ref={meshRef}>
      <primitive object={scene} scale={1.2} />
    </group>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato de ${formData.name}`);
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem:\n${formData.message}`);
    window.open(`mailto:linhadefrente.espro@gmail.com?subject=${subject}&body=${body}`, "_blank");
    toast.success("Mensagem preparada! Seu cliente de email será aberto para envio.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer className="relative z-10 mt-20 pb-8">
      <div className="section-divider mb-12" />
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Contact Form Section */}
        <div className="glass-card rounded-3xl p-5 sm:p-8 md:p-10 mb-8">
          <div className="max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h4 className="font-display font-semibold text-xl">Fale Conosco</h4>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl glass-card bg-background/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl glass-card bg-background/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Seu telefone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl glass-card bg-background/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              />
              <textarea
                name="message"
                placeholder="Sua mensagem"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl glass-card bg-background/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"
                required
              />
              <motion.button
                type="submit"
                className="w-full btn-gradient glow-button px-6 py-2.5 rounded-xl text-primary-foreground font-semibold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Enviar Mensagem</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex flex-col items-center gap-6">
            {/* 3D Flag Model */}
            <motion.div
              className="w-28 h-28 sm:w-36 sm:h-36"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <SafeCanvas>
                <Canvas
                  camera={{ position: [0, 0, 4], fov: 45 }}
                  gl={{ powerPreference: "low-power", failIfMajorPerformanceCaveat: false, antialias: false }}
                  dpr={[1, 1.5]}
                  onCreated={({ gl }) => {
                    gl.domElement.addEventListener("webglcontextlost", (e) => e.preventDefault());
                  }}
                >
                  <ambientLight intensity={0.8} />
                  <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
                  <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22c55e" />
                  <Suspense fallback={null}>
                    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
                      <FooterFlagModel />
                    </Float>
                  </Suspense>
                </Canvas>
              </SafeCanvas>
            </motion.div>

            {/* Social Links - Centered */}
            <div className="flex items-center justify-center gap-4">
              <motion.a
                href="https://instagram.com/linhadefrentemkt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors duration-300 glow-border"
                whileHover={{ scale: 1.1 }}
                title="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </motion.a>
              
              <motion.a
                href="https://open.spotify.com/show/52qk0CuMVrdoHfO6zSlcmS?si=688a72f5c30045ac"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors duration-300 glow-border"
                whileHover={{ scale: 1.1 }}
                title="Spotify"
              >
                <Music className="w-5 h-5 text-primary" />
              </motion.a>
              
              <motion.a
                 href="https://youtube.com/@podjogar-q1y?si=9kntrIfT7PSoFr5V"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors duration-300 glow-border"
                 whileHover={{ scale: 1.1 }}
                 title="YouTube"
               >
                 <Youtube className="w-5 h-5 text-primary" />
               </motion.a>
              
              <motion.a
                href="mailto:linhadefrente.espro@gmail.com"
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors duration-300 glow-border"
                whileHover={{ scale: 1.1 }}
                title="Email"
              >
                <Mail className="w-5 h-5 text-primary" />
              </motion.a>
            </div>

            {/* Address & Copyright */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-1">
                <MapPin className="w-3 h-3" />
                <span>Osasco - SP</span>
              </div>
              <p className="text-xs text-muted-foreground">
                © {currentYear} Linha de Frente. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
