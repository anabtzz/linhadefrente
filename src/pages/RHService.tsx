import { Users } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const servicesData = [
  {
    slug: "recrutamento",
    name: "Recrutamento de Executivos Esportivos",
    description: "Identificamos e recrutamos os melhores talentos executivos para organizações esportivas.",
    features: [
      "Hunting de executivos",
      "Avaliação de competências",
      "Entrevistas estruturadas",
      "Background check",
      "Negociação de propostas",
      "Onboarding assistido",
    ],
    benefits: [
      "Acesso a talentos qualificados",
      "Redução de tempo de contratação",
      "Match cultural garantido",
      "Confidencialidade no processo",
    ],
  },
  {
    slug: "gestao-carreira",
    name: "Gestão de Carreira de Atletas",
    description: "Acompanhamos atletas em toda sua jornada profissional, do início à aposentadoria.",
    features: [
      "Planejamento de carreira",
      "Negociação de contratos",
      "Gestão de imagem",
      "Orientação financeira",
      "Preparação para pós-carreira",
      "Suporte psicológico",
    ],
    benefits: [
      "Carreira bem planejada",
      "Melhores contratos",
      "Segurança financeira",
      "Transição suave pós-carreira",
    ],
  },
  {
    slug: "desenvolvimento",
    name: "Programas de Desenvolvimento",
    description: "Desenvolvemos programas de capacitação para profissionais do esporte.",
    features: [
      "Trilhas de desenvolvimento",
      "Treinamentos técnicos",
      "Soft skills para esporte",
      "Liderança esportiva",
      "Gestão de equipes",
      "Avaliação de desempenho",
    ],
    benefits: [
      "Profissionais mais qualificados",
      "Retenção de talentos",
      "Cultura de aprendizado",
      "Resultados superiores",
    ],
  },
  {
    slug: "cultura-organizacional",
    name: "Consultoria em Cultura Organizacional",
    description: "Ajudamos organizações esportivas a construir culturas de alta performance.",
    features: [
      "Diagnóstico cultural",
      "Definição de valores",
      "Programas de engajamento",
      "Comunicação interna",
      "Gestão de mudanças",
      "Pesquisas de clima",
    ],
    benefits: [
      "Ambiente de trabalho saudável",
      "Maior engajamento",
      "Redução de turnover",
      "Melhor performance",
    ],
  },
  {
    slug: "mentoria",
    name: "Mentoria para Ex-Atletas",
    description: "Apoiamos ex-atletas na transição para novas carreiras fora do esporte.",
    features: [
      "Orientação de carreira",
      "Capacitação profissional",
      "Networking",
      "Apoio emocional",
      "Recolocação no mercado",
      "Empreendedorismo",
    ],
    benefits: [
      "Transição suave",
      "Novas oportunidades",
      "Aproveitamento de habilidades",
      "Realização profissional",
    ],
  },
  {
    slug: "treinamentos",
    name: "Treinamentos Corporativos",
    description: "Oferecemos treinamentos inspirados no esporte para empresas.",
    features: [
      "Liderança e trabalho em equipe",
      "Resiliência e superação",
      "Alta performance",
      "Gestão de pressão",
      "Comunicação efetiva",
      "Mentalidade vencedora",
    ],
    benefits: [
      "Equipes mais coesas",
      "Líderes inspiradores",
      "Cultura de resultado",
      "Colaboradores motivados",
    ],
  },
  {
    slug: "assessment",
    name: "Assessment de Competências",
    description: "Avaliamos competências de profissionais do esporte para tomadas de decisão.",
    features: [
      "Testes psicométricos",
      "Avaliações comportamentais",
      "Assessment centers",
      "Feedback estruturado",
      "Planos de desenvolvimento",
      "Relatórios detalhados",
    ],
    benefits: [
      "Decisões baseadas em dados",
      "Identificação de potenciais",
      "Gaps de desenvolvimento claros",
      "Melhor alocação de talentos",
    ],
  },
  {
    slug: "planejamento-sucessao",
    name: "Planejamento de Sucessão",
    description: "Preparamos organizações esportivas para transições de liderança.",
    features: [
      "Mapeamento de talentos",
      "Identificação de sucessores",
      "Planos de desenvolvimento",
      "Gestão de transição",
      "Mentoria de líderes",
      "Acompanhamento pós-sucessão",
    ],
    benefits: [
      "Continuidade de gestão",
      "Redução de riscos",
      "Desenvolvimento interno",
      "Transições suaves",
    ],
  },
];

const RHService = () => {
  return (
    <ServicePage
      departmentTitle="Recursos Humanos"
      departmentSlug="rh"
      departmentIcon={Users}
      accentColor="bg-primary"
      services={servicesData}
    />
  );
};

export default RHService;
