import { motion } from "framer-motion";
import {
  ProgressSlider,
  SliderBtn,
  SliderBtnGroup,
  SliderContent,
  SliderWrapper,
} from "@/components/ui/progressive-carousel";
import {
  janeiroBrancoCover,
  carnavalCover,
  novembroNegroCover,
  esproQueEuVejoCover,
} from "@/assets/projetos";

const items = [
  {
    img: novembroNegroCover,
    title: "Novembro Negro",
    desc: "Cobertura visual e ação de conscientização sobre a importância do Novembro Negro, celebrando a diversidade dentro da Linha de Frente.",
    sliderName: "novembro-negro",
  },
  {
    img: janeiroBrancoCover,
    title: "Janeiro Branco",
    desc: "Gincana e cobertura completa do Janeiro Branco, valorizando a saúde mental com fotos, vídeos e publicações nas redes.",
    sliderName: "janeiro-branco",
  },
  {
    img: carnavalCover,
    title: "Carnaval",
    desc: "Confecção de máscaras, decoração temática e integração entre os colaboradores em um carnaval interno marcante.",
    sliderName: "carnaval",
  },
  {
    img: esproQueEuVejoCover,
    title: "Espro que Eu Vejo",
    desc: "Participação e cobertura do evento Espro que Eu Vejo, com apresentações artísticas e show de talentos.",
    sliderName: "espro",
  },
];

const DepartmentsCarousel = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-xs sm:text-sm font-medium mb-4">
            Em Ação
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="gradient-text glow-text">Projetos</span> em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Confira os principais momentos vividos pelos departamentos da Linha de Frente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ProgressSlider vertical={false} activeSlider={items[0].sliderName} duration={6000}>
            <SliderContent>
              {items.map((item) => (
                <SliderWrapper key={item.sliderName} value={item.sliderName}>
                  <div className="relative rounded-2xl overflow-hidden glass-card-strong">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="eager"
                      decoding="async"
                      // @ts-expect-error fetchpriority is a valid HTML attr not yet in React's types
                      fetchpriority="high"
                      className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-md">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold mb-2">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </SliderWrapper>
              ))}
            </SliderContent>

            <SliderBtnGroup className="mt-4 h-fit text-foreground glass-card-strong overflow-hidden grid grid-cols-2 md:grid-cols-4 rounded-2xl">
              {items.map((item) => (
                <SliderBtn
                  key={item.sliderName}
                  value={item.sliderName}
                  className="text-left cursor-pointer p-4 border-r border-border/40 last:border-r-0 hover:bg-muted/30 transition-colors"
                  progressBarClass="bg-primary/30 h-full"
                >
                  <h3 className="relative px-3 py-1 rounded-full w-fit bg-primary text-primary-foreground text-xs font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium line-clamp-2 text-muted-foreground">
                    {item.desc}
                  </p>
                </SliderBtn>
              ))}
            </SliderBtnGroup>
          </ProgressSlider>
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentsCarousel;
