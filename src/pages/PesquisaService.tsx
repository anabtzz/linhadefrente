import { Search } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const servicesData = [
  {
    slug: "pesquisa-mercado",
    name: "Pesquisa de Mercado Esportivo",
    description: "Realizamos estudos completos sobre o mercado esportivo brasileiro e internacional.",
    features: [
      "Análise de tendências",
      "Mapeamento de concorrência",
      "Estudos setoriais",
      "Projeções de mercado",
      "Identificação de oportunidades",
      "Relatórios customizados",
    ],
    benefits: [
      "Decisões informadas",
      "Vantagem competitiva",
      "Identificação de gaps",
      "Planejamento estratégico",
    ],
  },
  {
    slug: "comportamento-torcedor",
    name: "Estudos de Comportamento do Torcedor",
    description: "Analisamos o comportamento, preferências e hábitos dos torcedores brasileiros.",
    features: [
      "Pesquisas quantitativas",
      "Grupos focais",
      "Etnografia digital",
      "Jornada do torcedor",
      "Segmentação de público",
      "Insights acionáveis",
    ],
    benefits: [
      "Conhecimento profundo do público",
      "Estratégias mais efetivas",
      "Produtos mais relevantes",
      "Experiências personalizadas",
    ],
  },
  {
    slug: "retorno-patrocinio",
    name: "Análise de Retorno de Patrocínio",
    description: "Medimos o retorno sobre investimento de patrocínios esportivos.",
    features: [
      "Métricas de exposição",
      "Valoração de mídia",
      "Impacto em marca",
      "ROI financeiro",
      "Benchmarking",
      "Recomendações estratégicas",
    ],
    benefits: [
      "Investimentos otimizados",
      "Justificativa para stakeholders",
      "Negociações embasadas",
      "Melhoria contínua",
    ],
  },
  {
    slug: "brand-tracking",
    name: "Brand Tracking Esportivo",
    description: "Monitoramos a saúde de marca de organizações e atletas ao longo do tempo.",
    features: [
      "Awareness e consideração",
      "Atributos de marca",
      "Net Promoter Score",
      "Share of voice",
      "Análise de sentimento",
      "Comparativo com concorrentes",
    ],
    benefits: [
      "Saúde de marca monitorada",
      "Tendências identificadas",
      "Ações corretivas rápidas",
      "Evolução documentada",
    ],
  },
  {
    slug: "pesquisas-adhoc",
    name: "Pesquisas Ad Hoc",
    description: "Desenvolvemos pesquisas customizadas para responder questões específicas.",
    features: [
      "Briefing personalizado",
      "Metodologia sob medida",
      "Coleta de campo",
      "Análise aprofundada",
      "Apresentação executiva",
      "Suporte pós-entrega",
    ],
    benefits: [
      "Respostas específicas",
      "Metodologia adequada",
      "Timing flexível",
      "Insights exclusivos",
    ],
  },
  {
    slug: "paineis-consumidores",
    name: "Painéis de Consumidores",
    description: "Mantemos painéis de consumidores esportivos para pesquisas contínuas.",
    features: [
      "Base de respondentes qualificada",
      "Acesso rápido a insights",
      "Pesquisas recorrentes",
      "Perfis atualizados",
      "Incentivos gerenciados",
      "Qualidade garantida",
    ],
    benefits: [
      "Rapidez na execução",
      "Custos reduzidos",
      "Consistência nos dados",
      "Acompanhamento longitudinal",
    ],
  },
  {
    slug: "viabilidade",
    name: "Estudos de Viabilidade",
    description: "Analisamos a viabilidade de projetos, eventos e negócios esportivos.",
    features: [
      "Análise de mercado",
      "Projeções financeiras",
      "Análise de riscos",
      "Benchmarking",
      "Cenários e simulações",
      "Recomendações executivas",
    ],
    benefits: [
      "Decisões de investimento seguras",
      "Riscos mapeados",
      "Potencial quantificado",
      "Plano de negócios sólido",
    ],
  },
  {
    slug: "benchmarking",
    name: "Benchmarking Internacional",
    description: "Comparamos práticas brasileiras com as melhores referências globais.",
    features: [
      "Análise de cases internacionais",
      "Visitas técnicas",
      "Entrevistas com experts",
      "Adaptação à realidade local",
      "Melhores práticas",
      "Roadmap de implementação",
    ],
    benefits: [
      "Aprendizado global",
      "Inovação acelerada",
      "Padrões internacionais",
      "Diferenciação competitiva",
    ],
  },
];

const PesquisaService = () => {
  return (
    <ServicePage
      departmentTitle="Pesquisa"
      departmentSlug="pesquisa"
      departmentIcon={Search}
      accentColor="bg-accent"
      services={servicesData}
    />
  );
};

export default PesquisaService;
