import { motion } from "framer-motion";
import { ArrowLeft, LucideIcon } from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface ServicePageProps {
  departmentTitle: string;
  departmentSlug: string;
  departmentIcon: LucideIcon;
  accentColor: string;
  services: {
    slug: string;
    name: string;
    description: string;
    features: string[];
    benefits: string[];
  }[];
}

const ServicePage = ({
  departmentTitle,
  departmentSlug,
  departmentIcon: Icon,
  accentColor,
  services,
}: ServicePageProps) => {
  const { serviceSlug } = useParams();
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Serviço não encontrado</h1>
          <Link to={`/${departmentSlug}`} className="text-primary hover:underline">
            Voltar para {departmentTitle}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to={`/${departmentSlug}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para {departmentTitle}</span>
          </Link>
        </motion.div>

        {/* Service Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.div
            className={`w-16 h-16 rounded-2xl ${accentColor} flex items-center justify-center mb-6 shadow-xl glow-icon`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          <span className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium mb-4">
            {departmentTitle}
          </span>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-[1.05]">
            <span className="gradient-text">{service.name}</span>
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card-strong rounded-3xl p-6 sm:p-8 mb-8"
        >
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-6">O que oferecemos</h2>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-xl glass-card"
              >
                <div className={`w-2 h-2 rounded-full ${accentColor} mt-2 flex-shrink-0`} />
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card-strong rounded-3xl p-6 sm:p-8"
        >
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-6">Benefícios</h2>
          <div className="space-y-4">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors"
              >
                <div className={`w-10 h-10 rounded-full ${accentColor} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Interessado neste serviço? Entre em contato conosco!
          </p>
          <Link to="/#contato">
            <motion.button
              className="btn-gradient glow-button px-8 py-4 rounded-2xl text-primary-foreground font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale Conosco
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;
