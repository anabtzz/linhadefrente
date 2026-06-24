import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, LucideIcon, ChevronRight, X, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Timeline from "./Timeline";
import { MorphingCardStack } from "./ui/morphing-card-stack";
import AnimatedStat from "./AnimatedStat";
import { useTransition } from "@/context/TransitionContext";
import { departments } from "@/data/departmentData";

interface Project {
  title: string;
  description: string;
  category: string;
  image?: string;
  cover?: string;
  gallery?: string[];
  stats?: { label: string; value: string }[];
  customContent?: React.ReactNode;
}

interface TeamMember {
  name: string;
  role?: string;
  roleDescription?: string;
  image?: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface Service {
  name: string;
  slug: string;
}

interface DepartmentPageContentProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  services: Service[];
  projects: Project[];
  team?: TeamMember[];
  stats: { value: string; label: string }[];
  timeline?: TimelineEvent[];
  departmentSlug: string;
}

const DepartmentPageContent = ({
  title,
  subtitle,
  description,
  icon: Icon,
  accentColor,
  services,
  projects,
  team,
  stats,
  timeline = [],
  departmentSlug,
}: DepartmentPageContentProps) => {
  const { triggerTransition } = useTransition();
  const dept = departments[departmentSlug];
  const nextPath = dept?.nextDepartment || "/#sobre-nos";
  const isLast = !dept?.nextDepartment;

  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null);

  const closeLightbox = () => setLightbox(null);
  const nextImg = () =>
    setLightbox((lb) => (lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : lb));
  const prevImg = () =>
    setLightbox((lb) => (lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : lb));

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerTransition("/");
  };


  const handleServiceClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    triggerTransition(`/${departmentSlug}/servicos/${slug}`);
  };

  const handleContinue = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerTransition(nextPath);
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="/"
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao início</span>
          </a>
        </motion.div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${accentColor} flex items-center justify-center mb-6 shadow-xl glow-icon`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-[1.05]">
              <span className="gradient-text">{title}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-2">{subtitle}</p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
              {description}
            </p>

            {/* Stats with counting animation */}
            <div className="flex flex-wrap gap-6 sm:gap-8 justify-start">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <AnimatedStat value={stat.value} label={stat.label} className="text-center" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services - Now Clickable */}
          <motion.div
            className="glass-card-strong rounded-3xl p-6 sm:p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-6">Nossos Serviços</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={`/${departmentSlug}/servicos/${service.slug}`}
                    onClick={(e) => handleServiceClick(e, service.slug)}
                    className="flex items-center justify-between gap-3 p-4 rounded-xl glass-card hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${accentColor}`} />
                      <span className="group-hover:text-primary transition-colors">{service.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium mb-4">
              Portfólio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Projetos <span className="gradient-text">Realizados</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((project, index) =>
              project.customContent ? (
                <motion.div
                  key={index}
                  className="col-span-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mb-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold mt-3 mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  {project.customContent}
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  className={`glass-card rounded-2xl overflow-hidden hover-lift group ${
                    project.gallery && project.gallery.length > 0 ? "cursor-pointer" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    if (project.gallery && project.gallery.length > 0) {
                      setLightbox({
                        images: project.gallery,
                        index: 0,
                        title: project.title,
                      });
                    }
                  }}
                >
                  <div className={`h-48 ${accentColor} relative overflow-hidden`}>
                    {project.cover ? (
                      <>
                        <img
                          src={project.cover}
                          alt={project.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                        {project.gallery && project.gallery.length > 0 && (
                          <span className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white font-medium">
                            {project.gallery.length} fotos
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="w-16 h-16 text-white/50" />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-6">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold mt-3 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>

                    {project.stats && project.stats.length > 0 && (
                      <div className="flex gap-4 mt-4 pt-4 border-t border-border/50">
                        {project.stats.map((stat, i) => (
                          <div key={i}>
                            <div className="font-bold gradient-text">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              onClick={closeLightbox}
            >
              <button
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>

              {lightbox.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImg(); }}
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImg(); }}
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                    aria-label="Próxima"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <motion.div
                key={lightbox.index}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightbox.images[lightbox.index]}
                  alt={`${lightbox.title} ${lightbox.index + 1}`}
                  className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                />
                <div className="mt-4 text-center text-white">
                  <p className="font-display text-lg font-semibold">{lightbox.title}</p>
                  <p className="text-sm text-white/60">
                    {lightbox.index + 1} / {lightbox.images.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Team Section */}
        {team && team.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium mb-4">
                Nossa Equipe
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">
                 <span className="gradient-text">Nosso</span> Time
               </h2>
            </div>

            <MorphingCardStack
              defaultLayout="stack"
              showLayoutToggle={false}
              cards={team.map((member, index) => ({
                id: `team-${index}`,
                title: member.name,
                description: [member.role, member.roleDescription]
                  .filter(Boolean)
                  .join(" — ") || "Membro do time",
                icon: (
                  <span className="font-bold text-lg">{member.name.charAt(0)}</span>
                ),
              }))}
            />
          </motion.section>
        )}

        {/* Timeline Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium mb-4">
              Nossa História
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Linha do <span className="gradient-text">Tempo</span>
            </h2>
          </div>

          <Timeline events={timeline} accentColor={accentColor} />
        </motion.section>

        {/* Continue Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href={nextPath}
            onClick={handleContinue}
            className="btn-gradient glow-button h-12 sm:h-14 px-6 sm:px-10 rounded-2xl text-primary-foreground font-semibold flex items-center justify-center gap-3 cursor-pointer text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>{isLast ? "Sobre Nós" : "Continuar"}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default DepartmentPageContent;
