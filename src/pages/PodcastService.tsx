import { Mic } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const servicesData = [
  {
    slug: "podcast-proprio",
    name: "Produção de Podcast Próprio",
    description: "Produzimos nosso podcast sobre esporte com entrevistas exclusivas e análises aprofundadas.",
    features: [
      "Episódios semanais",
      "Entrevistas com atletas",
      "Análises de eventos",
      "Histórias inspiradoras",
      "Produção profissional",
      "Distribuição multiplataforma",
    ],
    benefits: [
      "Conteúdo original e exclusivo",
      "Conexão com a audiência",
      "Referência no setor",
      "Oportunidades de parceria",
    ],
  },
  {
    slug: "podcasts-corporativos",
    name: "Podcasts Corporativos para Marcas",
    description: "Criamos podcasts personalizados para marcas que querem se conectar com o público esportivo.",
    features: [
      "Conceituação editorial",
      "Produção completa",
      "Locução profissional",
      "Edição e mixagem",
      "Arte e branding",
      "Estratégia de divulgação",
    ],
    benefits: [
      "Voz própria para a marca",
      "Engajamento qualificado",
      "Conteúdo de longa duração",
      "Autoridade no setor",
    ],
  },
  {
    slug: "entrevistas",
    name: "Entrevistas Exclusivas",
    description: "Realizamos entrevistas exclusivas com personalidades do esporte.",
    features: [
      "Acesso a atletas e dirigentes",
      "Produção profissional",
      "Roteirização cuidadosa",
      "Ambiente controlado",
      "Edição premium",
      "Direitos de distribuição",
    ],
    benefits: [
      "Conteúdo único e valioso",
      "Bastidores do esporte",
      "Histórias nunca contadas",
      "Engajamento garantido",
    ],
  },
  {
    slug: "cobertura-eventos",
    name: "Cobertura de Eventos ao Vivo",
    description: "Cobrimos eventos esportivos ao vivo com transmissões em áudio.",
    features: [
      "Narração ao vivo",
      "Comentários especializados",
      "Entrevistas flash",
      "Boletins informativos",
      "Transmissão em tempo real",
      "Interação com audiência",
    ],
    benefits: [
      "Cobertura completa",
      "Experiência imersiva",
      "Alcance ampliado",
      "Conteúdo em tempo real",
    ],
  },
  {
    slug: "documentarios",
    name: "Documentários em Áudio",
    description: "Produzimos documentários em áudio que contam histórias marcantes do esporte.",
    features: [
      "Pesquisa aprofundada",
      "Roteirização cinematográfica",
      "Entrevistas com protagonistas",
      "Sound design premium",
      "Narração profissional",
      "Série de episódios",
    ],
    benefits: [
      "Histórias emocionantes",
      "Conteúdo atemporal",
      "Premiações e reconhecimento",
      "Impacto cultural",
    ],
  },
  {
    slug: "distribuicao",
    name: "Distribuição Multiplataforma",
    description: "Distribuímos conteúdo de áudio em todas as principais plataformas.",
    features: [
      "Spotify, Apple, Google",
      "Deezer, Amazon Music",
      "YouTube e redes sociais",
      "RSS feeds customizados",
      "Otimização para busca",
      "Analytics unificado",
    ],
    benefits: [
      "Máximo alcance",
      "Audiência diversificada",
      "Presença em todas plataformas",
      "Métricas consolidadas",
    ],
  },
  {
    slug: "monetizacao",
    name: "Monetização e Patrocínios",
    description: "Ajudamos a monetizar podcasts esportivos através de patrocínios e publicidade.",
    features: [
      "Prospecção de patrocinadores",
      "Negociação de contratos",
      "Inserções publicitárias",
      "Branded content",
      "Eventos exclusivos",
      "Merchandising",
    ],
    benefits: [
      "Receita recorrente",
      "Parcerias de longo prazo",
      "Independência editorial",
      "Crescimento sustentável",
    ],
  },
  {
    slug: "estrategia-conteudo",
    name: "Estratégia de Conteúdo",
    description: "Desenvolvemos estratégias de conteúdo em áudio para marcas e organizações.",
    features: [
      "Análise de audiência",
      "Planejamento editorial",
      "Calendário de conteúdo",
      "Formatos inovadores",
      "KPIs e métricas",
      "Otimização contínua",
    ],
    benefits: [
      "Conteúdo estratégico",
      "Consistência editorial",
      "Crescimento de audiência",
      "Resultados mensuráveis",
    ],
  },
];

const PodcastService = () => {
  return (
    <ServicePage
      departmentTitle="Podcast"
      departmentSlug="podcast"
      departmentIcon={Mic}
      accentColor="bg-accent"
      services={servicesData}
    />
  );
};

export default PodcastService;
