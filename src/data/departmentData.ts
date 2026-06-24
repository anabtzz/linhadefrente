import { Megaphone, Monitor, Calendar, Users, Mic, Search, LucideIcon } from "lucide-react";

export interface DepartmentInfo {
  title: string;
  path: string;
  slug: string;
  icon: LucideIcon;
  services: { name: string; slug: string }[];
  projects: { title: string }[];
  nextDepartment: string | null; // path to next department, null for last
}

export const departmentOrder = [
  "/marketing",
  "/ti",
  "/eventos",
  "/rh",
  "/podcast",
  "/pesquisa",
];

export const departments: Record<string, DepartmentInfo> = {
  marketing: {
    title: "Marketing",
    path: "/marketing",
    slug: "marketing",
    icon: Megaphone,
    services: [
      { name: "Gestão de Redes Sociais Esportivas", slug: "gestao-redes-sociais" },
      { name: "Campanhas de Patrocínio", slug: "campanhas-patrocinio" },
      { name: "Ativação de Marca em Eventos", slug: "ativacao-marca" },
      { name: "Marketing de Influenciadores Esportivos", slug: "marketing-influenciadores" },
      { name: "Produção de Conteúdo Audiovisual", slug: "producao-conteudo" },
      { name: "Estratégias de Fan Engagement", slug: "fan-engagement" },
      { name: "Branding Esportivo", slug: "branding" },
      { name: "Assessoria de Imprensa Especializada", slug: "assessoria-imprensa" },
    ],
    projects: [
      { title: "Sem Título" },
      { title: "Sem Título" },
      { title: "Sem Título" },
    ],
    nextDepartment: "/ti",
  },
  ti: {
    title: "T.I",
    path: "/ti",
    slug: "ti",
    icon: Monitor,
    services: [
      { name: "Plataformas de Streaming Esportivo", slug: "streaming" },
      { name: "Sistemas de Gestão de Clubes", slug: "gestao-clubes" },
      { name: "Analytics e Business Intelligence", slug: "analytics" },
      { name: "E-commerce Esportivo", slug: "ecommerce" },
      { name: "Integração com Wearables", slug: "wearables" },
      { name: "Soluções de Ticketing Digital", slug: "ticketing" },
      { name: "Infraestrutura Cloud", slug: "cloud" },
    ],
    projects: [
      { title: "Ambiente de armazenamento" },
      { title: "Criação do Site" },
      { title: "Sem Título" },
    ],
    nextDepartment: "/eventos",
  },
  eventos: {
    title: "Eventos",
    path: "/eventos",
    slug: "eventos",
    icon: Calendar,
    services: [
      { name: "Organização de Campeonatos", slug: "campeonatos" },
      { name: "Eventos Corporativos Esportivos", slug: "eventos-corporativos" },
      { name: "Convenções e Feiras do Setor", slug: "convencoes" },
      { name: "Ativações de Patrocínio", slug: "ativacoes" },
      { name: "Corridas e Maratonas", slug: "corridas" },
      { name: "Premiações Esportivas", slug: "premiacoes" },
      { name: "Fan Fests e Watch Parties", slug: "fan-fests" },
      { name: "Gestão de Logística Esportiva", slug: "logistica" },
    ],
    projects: [
      { title: "Evento Janeiro Branco" },
      { title: "Sem Título" },
      { title: "Sem Título" },
    ],
    nextDepartment: "/rh",
  },
  rh: {
    title: "Recursos Humanos",
    path: "/rh",
    slug: "rh",
    icon: Users,
    services: [
      { name: "Recrutamento de Executivos Esportivos", slug: "recrutamento" },
      { name: "Gestão de Carreira de Atletas", slug: "gestao-carreira" },
      { name: "Programas de Desenvolvimento", slug: "desenvolvimento" },
      { name: "Consultoria em Cultura Organizacional", slug: "cultura-organizacional" },
      { name: "Mentoria para Ex-Atletas", slug: "mentoria" },
      { name: "Treinamentos Corporativos", slug: "treinamentos" },
      { name: "Assessment de Competências", slug: "assessment" },
      { name: "Planejamento de Sucessão", slug: "planejamento-sucessao" },
    ],
    projects: [
      { title: "Sem Título" },
      { title: "Sem Título" },
      { title: "Sem Título" },
    ],
    nextDepartment: "/podcast",
  },
  podcast: {
    title: "Podcast",
    path: "/podcast",
    slug: "podcast",
    icon: Mic,
    services: [
      { name: "Produção de Podcast Próprio", slug: "podcast-proprio" },
      { name: "Podcasts Corporativos para Marcas", slug: "podcasts-corporativos" },
      { name: "Entrevistas Exclusivas", slug: "entrevistas" },
      { name: "Cobertura de Eventos ao Vivo", slug: "cobertura-eventos" },
      { name: "Documentários em Áudio", slug: "documentarios" },
      { name: "Distribuição Multiplataforma", slug: "distribuicao" },
      { name: "Monetização e Patrocínios", slug: "monetizacao" },
      { name: "Estratégia de Conteúdo", slug: "estrategia-conteudo" },
    ],
    projects: [
      { title: "PODJOGAR" },
      { title: "Sem Título" },
      { title: "Sem Título" },
    ],
    nextDepartment: "/pesquisa",
  },
  pesquisa: {
    title: "Pesquisa",
    path: "/pesquisa",
    slug: "pesquisa",
    icon: Search,
    services: [
      { name: "Pesquisa de Mercado Esportivo", slug: "pesquisa-mercado" },
      { name: "Estudos de Comportamento do Torcedor", slug: "comportamento-torcedor" },
      { name: "Análise de Retorno de Patrocínio", slug: "retorno-patrocinio" },
      { name: "Brand Tracking Esportivo", slug: "brand-tracking" },
      { name: "Pesquisas Ad Hoc", slug: "pesquisas-adhoc" },
      { name: "Painéis de Consumidores", slug: "paineis-consumidores" },
      { name: "Estudos de Viabilidade", slug: "viabilidade" },
      { name: "Benchmarking Internacional", slug: "benchmarking" },
    ],
    projects: [
      { title: "Reportagem sobre o ambiente esportivo" },
      { title: "Sem Título" },
      { title: "Sem Título" },
    ],
    nextDepartment: null, // last one, goes to /#sobre-nos
  },
};

export const getDepartmentBySlug = (slug: string): DepartmentInfo | undefined => {
  return departments[slug];
};
