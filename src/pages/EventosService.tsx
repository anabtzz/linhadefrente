import { Calendar } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const servicesData = [
  {
    slug: "campeonatos",
    name: "Organização de Campeonatos",
    description: "Planejamos e executamos campeonatos esportivos de todos os portes, do amador ao profissional.",
    features: [
      "Planejamento completo do evento",
      "Gestão de tabelas e chaveamentos",
      "Arbitragem e regulamento",
      "Logística e infraestrutura",
      "Premiações e troféus",
      "Cobertura de mídia",
    ],
    benefits: [
      "Eventos profissionais e organizados",
      "Experiência positiva para atletas",
      "Visibilidade para patrocinadores",
      "Engajamento do público",
    ],
  },
  {
    slug: "eventos-corporativos",
    name: "Eventos Corporativos Esportivos",
    description: "Criamos eventos esportivos para empresas que desejam engajar colaboradores e clientes.",
    features: [
      "Olimpíadas corporativas",
      "Torneios entre empresas",
      "Team buildings esportivos",
      "Confraternizações com esporte",
      "Corridas e caminhadas corporativas",
      "Atividades de bem-estar",
    ],
    benefits: [
      "Integração de equipes",
      "Promoção da saúde",
      "Fortalecimento da cultura",
      "Networking em ambiente descontraído",
    ],
  },
  {
    slug: "convencoes",
    name: "Convenções e Feiras do Setor",
    description: "Organizamos convenções e feiras para o mercado esportivo, conectando profissionais e empresas.",
    features: [
      "Organização de feiras esportivas",
      "Convenções de federações",
      "Congressos técnicos",
      "Exposições de equipamentos",
      "Networking events",
      "Palestras e workshops",
    ],
    benefits: [
      "Networking qualificado",
      "Atualização profissional",
      "Visibilidade no setor",
      "Geração de negócios",
    ],
  },
  {
    slug: "ativacoes",
    name: "Ativações de Patrocínio",
    description: "Criamos ativações criativas para patrocinadores em eventos esportivos.",
    features: [
      "Estandes interativos",
      "Experiências imersivas",
      "Distribuição de brindes",
      "Sampling de produtos",
      "Gamificação",
      "Captura de leads",
    ],
    benefits: [
      "Maior retorno do patrocínio",
      "Engajamento do público",
      "Geração de conteúdo",
      "Dados de consumidores",
    ],
  },
  {
    slug: "corridas",
    name: "Corridas e Maratonas",
    description: "Organizamos corridas de rua, maratonas e eventos de corrida para todos os públicos.",
    features: [
      "Planejamento de percurso",
      "Gestão de inscrições",
      "Kit do atleta",
      "Cronometragem oficial",
      "Hidratação e suporte",
      "Premiação e medalhas",
    ],
    benefits: [
      "Eventos seguros e bem organizados",
      "Experiência memorável",
      "Promoção de saúde",
      "Visibilidade para cidade/marca",
    ],
  },
  {
    slug: "premiacoes",
    name: "Premiações Esportivas",
    description: "Produzimos cerimônias de premiação elegantes e memoráveis para o mundo esportivo.",
    features: [
      "Conceituação e cenografia",
      "Produção de troféus",
      "Gestão de convidados",
      "Entretenimento",
      "Cobertura de mídia",
      "Transmissão ao vivo",
    ],
    benefits: [
      "Reconhecimento aos atletas",
      "Visibilidade institucional",
      "Networking de alto nível",
      "Conteúdo de qualidade",
    ],
  },
  {
    slug: "fan-fests",
    name: "Fan Fests e Watch Parties",
    description: "Criamos experiências coletivas para torcedores assistirem jogos e eventos juntos.",
    features: [
      "Telões e infraestrutura",
      "Animação e DJ",
      "Food trucks e bebidas",
      "Ativações de patrocinadores",
      "Sorteios e promoções",
      "Segurança e estrutura",
    ],
    benefits: [
      "Experiência compartilhada",
      "Engajamento de torcedores",
      "Oportunidades de patrocínio",
      "Conteúdo para redes sociais",
    ],
  },
  {
    slug: "logistica",
    name: "Gestão de Logística Esportiva",
    description: "Gerenciamos toda a logística de eventos e competições esportivas.",
    features: [
      "Transporte de atletas",
      "Hospedagem e alimentação",
      "Equipamentos e materiais",
      "Credenciamento",
      "Segurança patrimonial",
      "Gestão de voluntários",
    ],
    benefits: [
      "Operação fluida",
      "Redução de imprevistos",
      "Foco no evento principal",
      "Profissionalismo",
    ],
  },
];

const EventosService = () => {
  return (
    <ServicePage
      departmentTitle="Eventos"
      departmentSlug="eventos"
      departmentIcon={Calendar}
      accentColor="bg-accent"
      services={servicesData}
    />
  );
};

export default EventosService;
