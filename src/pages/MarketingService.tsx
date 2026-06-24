import { Megaphone } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const servicesData = [
  {
    slug: "gestao-redes-sociais",
    name: "Gestão de Redes Sociais Esportivas",
    description: "Gerenciamos as redes sociais de clubes, atletas e marcas esportivas com estratégias personalizadas que aumentam o engajamento e fortalecem a conexão com os fãs.",
    features: [
      "Criação de calendário editorial",
      "Produção de conteúdo visual e textual",
      "Gestão de comunidade e interação",
      "Análise de métricas e relatórios",
      "Campanhas de growth hacking",
      "Gestão de crises de imagem",
    ],
    benefits: [
      "Aumento significativo no engajamento orgânico",
      "Crescimento consistente da base de seguidores",
      "Fortalecimento da identidade da marca",
      "Conexão autêntica com a audiência",
    ],
  },
  {
    slug: "campanhas-patrocinio",
    name: "Campanhas de Patrocínio",
    description: "Desenvolvemos campanhas criativas que maximizam o retorno sobre investimento em patrocínios esportivos, conectando marcas a públicos apaixonados.",
    features: [
      "Planejamento estratégico de campanhas",
      "Ativação de patrocínio em eventos",
      "Produção de materiais promocionais",
      "Gestão de atletas patrocinados",
      "Relatórios de ROI e métricas",
      "Integração com ações digitais",
    ],
    benefits: [
      "Maximização do retorno sobre investimento",
      "Associação positiva com o esporte",
      "Alcance de públicos segmentados",
      "Métricas claras de performance",
    ],
  },
  {
    slug: "ativacao-marca",
    name: "Ativação de Marca em Eventos",
    description: "Criamos experiências memoráveis que conectam marcas a consumidores durante eventos esportivos, gerando engajamento e conversões.",
    features: [
      "Conceituação e design de estandes",
      "Ativações interativas e gamificadas",
      "Distribuição de brindes e materiais",
      "Captura de leads qualificados",
      "Cobertura em tempo real",
      "Integração digital e física",
    ],
    benefits: [
      "Experiências memoráveis para o público",
      "Geração de leads qualificados",
      "Amplificação nas redes sociais",
      "Associação positiva com momentos de alegria",
    ],
  },
  {
    slug: "marketing-influenciadores",
    name: "Marketing de Influenciadores Esportivos",
    description: "Conectamos marcas com atletas e influenciadores esportivos para campanhas autênticas que geram resultados reais.",
    features: [
      "Mapeamento de influenciadores",
      "Negociação e contratos",
      "Briefing e acompanhamento",
      "Gestão de entregas",
      "Análise de performance",
      "Relatórios de alcance e engajamento",
    ],
    benefits: [
      "Credibilidade através de vozes autênticas",
      "Alcance de nichos específicos",
      "Conteúdo orgânico e engajador",
      "ROI mensurável e transparente",
    ],
  },
  {
    slug: "producao-conteudo",
    name: "Produção de Conteúdo Audiovisual",
    description: "Produzimos vídeos, fotos e materiais audiovisuais de alta qualidade para campanhas esportivas.",
    features: [
      "Vídeos institucionais e comerciais",
      "Cobertura de eventos",
      "Ensaios fotográficos",
      "Edição e pós-produção",
      "Motion graphics e animações",
      "Conteúdo para redes sociais",
    ],
    benefits: [
      "Conteúdo profissional e impactante",
      "Versatilidade para múltiplas plataformas",
      "Narrativas envolventes",
      "Materiais de alta qualidade",
    ],
  },
  {
    slug: "fan-engagement",
    name: "Estratégias de Fan Engagement",
    description: "Desenvolvemos estratégias para aumentar o engajamento e a lealdade dos torcedores e fãs de marcas esportivas.",
    features: [
      "Programas de fidelidade",
      "Gamificação e desafios",
      "Experiências exclusivas",
      "Conteúdo interativo",
      "Comunidades digitais",
      "Eventos para fãs",
    ],
    benefits: [
      "Aumento da lealdade dos fãs",
      "Maior lifetime value",
      "Comunidade engajada",
      "Advocacy espontâneo",
    ],
  },
  {
    slug: "branding",
    name: "Branding Esportivo",
    description: "Criamos e revitalizamos identidades visuais para clubes, atletas e organizações esportivas.",
    features: [
      "Desenvolvimento de identidade visual",
      "Manual de marca",
      "Naming e posicionamento",
      "Design de uniformes e materiais",
      "Brand guidelines",
      "Rebranding estratégico",
    ],
    benefits: [
      "Identidade visual marcante",
      "Consistência em todos os touchpoints",
      "Diferenciação no mercado",
      "Conexão emocional com o público",
    ],
  },
  {
    slug: "assessoria-imprensa",
    name: "Assessoria de Imprensa Especializada",
    description: "Gerenciamos a comunicação com a imprensa esportiva, garantindo visibilidade positiva para nossos clientes.",
    features: [
      "Relacionamento com jornalistas",
      "Produção de releases",
      "Gestão de coletivas",
      "Media training",
      "Clipping e monitoramento",
      "Gestão de crises",
    ],
    benefits: [
      "Visibilidade na mídia especializada",
      "Reputação bem gerenciada",
      "Preparação para situações de crise",
      "Network com formadores de opinião",
    ],
  },
];

const MarketingService = () => {
  return (
    <ServicePage
      departmentTitle="Marketing"
      departmentSlug="marketing"
      departmentIcon={Megaphone}
      accentColor="bg-primary"
      services={servicesData}
    />
  );
};

export default MarketingService;
