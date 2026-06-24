import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play, Flag, Eye, Heart } from "lucide-react";
import { Megaphone, Monitor, Calendar, Users, Mic, Search, Award, TrendingUp, Globe, Zap } from "lucide-react";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float } from "@react-three/drei";
import * as THREE from "three";
import React from "react";
import DepartmentCard from "@/components/DepartmentCard";
import DepartmentsCarousel from "@/components/DepartmentsCarousel";
import AnimatedStat from "@/components/AnimatedStat";
import Timeline from "@/components/Timeline";
import { useTransition } from "@/context/TransitionContext";
import SafeCanvas from "@/components/SafeCanvas";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLowPerformanceMode } from "@/hooks/useLowPerformanceMode";

const HeroStarModel = () => {
  const { scene } = useGLTF("/models/Estrela_LDF_3D.glb");
  const meshRef = React.useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      <primitive object={scene} scale={3.5} />
    </group>
  );
};

const departments = [
  {
    title: "Marketing",
    description:
      "Estratégias criativas que elevam marcas esportivas ao topo. Campanhas que conectam, engajam e convertem.",
    icon: Megaphone,
    path: "/marketing",
    gradient: "bg-primary",
  },
  {
    title: "T.I",
    description:
      "Soluções tecnológicas de ponta. Plataformas, apps e sistemas que revolucionam a experiência esportiva.",
    icon: Monitor,
    path: "/ti",
    gradient: "bg-accent",
  },
  {
    title: "Eventos",
    description: "Experiências inesquecíveis. Do planejamento à execução, criamos eventos que marcam história.",
    icon: Calendar,
    path: "/eventos",
    gradient: "bg-primary",
  },
  {
    title: "Recursos Humanos",
    description: "Gestão de talentos esportivos. Recrutamos, desenvolvemos e potencializamos carreiras vencedoras.",
    icon: Users,
    path: "/rh",
    gradient: "bg-accent",
  },
  {
    title: "Podcast",
    description:
      "Produzimos conteúdo de áudio e fazemos gincanas sobre todos os tipos de esportes, falando sobre experiências profissionais e também sobre como o esporte influencia no mundo e nossas vidas.",
    icon: Mic,
    path: "/podcast",
    gradient: "bg-primary",
  },
  {
    title: "Pesquisa",
    description:
      "Dados que direcionam decisões. Análises profundas do mercado esportivo e comportamento do consumidor.",
    icon: Search,
    path: "/pesquisa",
    gradient: "bg-accent",
  },
];

const features = [
  {
    icon: Award,
    title: "Empresa totalmente Brasileira",
    description: "Nascemos e crescemos no Brasil, com paixão pelo esporte nacional e compromisso com a excelência.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Exponencial",
    description: "Estratégias baseadas em dados que multiplicam o engajamento e o retorno sobre investimento.",
  },
  {
    icon: Globe,
    title: "Projetos independentes",
    description: "Autonomia criativa e flexibilidade para entregar soluções personalizadas para cada cliente.",
  },
  {
    icon: Zap,
    title: "Inovação Constante",
    description: "Sempre à frente das tendências, utilizando as mais recentes tecnologias e metodologias.",
  },
];

// Parallax card component for MVV
const ParallaxMVVCard = ({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const iconX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  const iconY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass-card-strong rounded-3xl p-8 text-center h-full"
      >
        <motion.div
          className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-6 flex items-center justify-center glow-icon"
          style={{ x: iconX, y: iconY }}
        >
          <Icon className="w-8 h-8 text-primary-foreground" />
        </motion.div>
        <h3 className="font-display text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const Index = () => {
  const { triggerTransition } = useTransition();
  const isMobile = useIsMobile();
  const lowPerf = useLowPerformanceMode();
  const show3D = !isMobile && !lowPerf;

  const handleStartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerTransition("/marketing");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-24 pb-12 sm:pb-16 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs sm:text-sm font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Marketing Esportivo de Alta Performance</span>
              </motion.div>

              <motion.h1
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Estamos na <span className="gradient-text glow-text">Linha de Frente</span> do Esporte
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Somos uma empresa de marketing esportivo comprometida em levar atletas, marcas e eventos ao pódio. Com
                paixão pelo esporte e expertise em comunicação, transformamos sonhos em conquistas.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a href="/marketing" onClick={handleStartClick} className="w-full sm:w-auto">
                  <button className="w-full btn-gradient glow-button h-12 sm:h-14 px-6 sm:px-8 rounded-2xl text-primary-foreground font-semibold flex items-center justify-center gap-3">
                    <span>Começar Agora</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </a>

                <button className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-2xl glass-card font-semibold flex items-center justify-center gap-3 hover:bg-muted/50 transition-colors duration-300">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Play className="w-4 h-4 text-primary fill-primary" />
                  </div>
                  <span>Ver Showreel</span>
                </button>
              </motion.div>
            </div>

            {/* Right content - 3D Star Model */}
            {show3D && (
              <motion.div
                className="relative hidden lg:flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <div className="relative z-10 w-72 h-72 lg:w-96 lg:h-96">
                    <SafeCanvas>
                      <Canvas
                        camera={{ position: [0, 0, 5], fov: 45 }}
                        gl={{ powerPreference: "low-power", failIfMajorPerformanceCaveat: false, antialias: false }}
                        dpr={[1, 1.5]}
                        onCreated={({ gl }) => {
                          gl.domElement.addEventListener("webglcontextlost", (e) => e.preventDefault());
                        }}
                      >
                        <ambientLight intensity={0.6} />
                        <pointLight position={[10, 10, 10]} intensity={1.2} color="#a855f7" />
                        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#22c55e" />
                        <pointLight position={[0, -10, 0]} intensity={0.4} color="#a855f7" />
                        <Suspense fallback={null}>
                          <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
                            <HeroStarModel />
                          </Float>
                        </Suspense>
                      </Canvas>
                    </SafeCanvas>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Departments Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass-card text-xs sm:text-sm font-medium mb-4">
              Nossos Departamentos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Uma Equipe, <span className="gradient-text glow-text">Múltiplas Especialidades</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Cada departamento opera com excelência individual, mas juntos formamos uma força imbatível no marketing
              esportivo.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
            {departments.map((dept, index) => (
              <DepartmentCard key={dept.title} {...dept} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <DepartmentsCarousel />

      {/* About Section */}
      <section id="sobre-nos" className="py-16 sm:py-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium mb-4">Sobre Nós</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Por que escolher a <span className="gradient-text glow-text">Linha de Frente</span>?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Somos mais do que uma agência de marketing esportivo. Somos parceiros estratégicos que entendem a paixão
                do esporte e a transformam em resultados tangíveis. Nossa abordagem integrada combina criatividade,
                tecnologia e expertise de mercado.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="glass-card rounded-2xl p-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <feature.icon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-display font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card-strong rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <motion.div
                      className="inline-block w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-accent mb-4"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-primary-foreground font-display font-black text-3xl">LF</span>
                      </div>
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold mb-2">Nossa Missão</h3>
                    <p className="text-muted-foreground">
                      Elevar o patamar do marketing esportivo brasileiro ao nível internacional.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "100%", label: "Satisfação" },
                      { value: "Menos de um ano de empresa", label: "" },
                      { value: "+1000", label: "Alcance (Contas)" },
                      { value: "Comprometimento Total", label: "" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="glass-card rounded-xl p-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {stat.label ? (
                          <AnimatedStat value={stat.value} label={stat.label} className="" />
                        ) : (
                          <div className="text-center">
                            <div className="font-display text-sm font-bold gradient-text">{stat.value}</div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium mb-4">
              Nossa Essência
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              O Que Nos <span className="gradient-text glow-text">Move</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Três pilares fundamentais que guiam cada decisão, cada projeto e cada conquista da nossa equipe.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <ParallaxMVVCard
              icon={Flag}
              title="Missão"
              description="Conectar pessoas através da emoção do esporte, entregando inovação e experiências inesquecíveis."
              delay={0.1}
            />
            <ParallaxMVVCard
              icon={Eye}
              title="Visão"
              description="Ser a principal vitrine de inspiração esportiva, transformando a forma como o público vive e consome o esporte."
              delay={0.2}
            />
            <ParallaxMVVCard
              icon={Heart}
              title="Valores"
              description="Paixão pelo jogo, inovação constante, excelência na execução e espírito de equipe."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium mb-4">
              Nossa Jornada
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Linha do <span className="gradient-text glow-text">Tempo</span>
            </h2>
          </motion.div>

          <Timeline
            events={[
              {
                date: "Outubro 2025",
                title: "Criação da Empresa",
                description: "Fundação oficial da Linha de Frente Esportiva.",
              },
              {
                date: "Novembro 2025",
                title: "Criação dos Departamentos",
                description: "Estruturação dos departamentos de Marketing, T.I, Eventos, Podcast, Pesquisa e RH.",
              },
              {
                date: "Janeiro 2026",
                title: "Criação do Site e Primeiro Evento",
                description: "Lançamento do site institucional e realização do primeiro evento oficial.",
              },
              {
                date: "Abril 2026",
                title: "Atualmente",
                description: "Crescendo e consolidando nossa presença no mercado esportivo.",
              },
              {
                date: "Futuro",
                title: "Futuramente",
                description:
                  "Expandir nossa atuação, firmar parcerias estratégicas e se tornar referência nacional no esporte.",
              },
            ]}
            accentColor="bg-primary"
          />
        </div>
      </section>
    </>
  );
};

export default Index;
