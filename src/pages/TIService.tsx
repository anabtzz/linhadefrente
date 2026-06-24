import { Monitor } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const servicesData = [
  {
    slug: "apps-mobile",
    name: "Desenvolvimento de Apps Mobile",
    description: "Criamos aplicativos mobile nativos e híbridos para clubes, ligas e organizações esportivas que engajam torcedores.",
    features: [
      "Apps iOS e Android nativos",
      "Desenvolvimento híbrido (React Native)",
      "Integração com sistemas existentes",
      "Push notifications inteligentes",
      "Analytics e métricas de uso",
      "Atualizações e manutenção contínua",
    ],
    benefits: [
      "Engajamento direto com torcedores",
      "Canal próprio de comunicação",
      "Monetização através do app",
      "Dados valiosos sobre usuários",
    ],
  },
  {
    slug: "streaming",
    name: "Plataformas de Streaming Esportivo",
    description: "Desenvolvemos plataformas completas de streaming para transmissão de eventos esportivos ao vivo e on-demand.",
    features: [
      "Streaming ao vivo em alta qualidade",
      "Biblioteca de conteúdo on-demand",
      "Sistema de assinaturas e pagamentos",
      "Multi-câmera e replays",
      "Estatísticas em tempo real",
      "Chat e interação social",
    ],
    benefits: [
      "Nova fonte de receita",
      "Controle total sobre o conteúdo",
      "Alcance global",
      "Experiência premium para assinantes",
    ],
  },
  {
    slug: "gestao-clubes",
    name: "Sistemas de Gestão de Clubes",
    description: "Sistemas integrados para gestão completa de clubes esportivos, desde sócios até atletas.",
    features: [
      "Gestão de sócios e associados",
      "Controle financeiro",
      "Gestão de atletas e contratos",
      "Reserva de espaços e equipamentos",
      "Portal do sócio",
      "Integração com sistemas de pagamento",
    ],
    benefits: [
      "Operação mais eficiente",
      "Redução de custos operacionais",
      "Melhor experiência para sócios",
      "Decisões baseadas em dados",
    ],
  },
  {
    slug: "analytics",
    name: "Analytics e Business Intelligence",
    description: "Plataformas de análise de dados esportivos para tomada de decisões estratégicas.",
    features: [
      "Dashboards personalizados",
      "Análise de performance de atletas",
      "Métricas de engajamento",
      "Previsões e modelagem",
      "Integração de múltiplas fontes",
      "Relatórios automatizados",
    ],
    benefits: [
      "Decisões baseadas em dados",
      "Identificação de oportunidades",
      "Otimização de recursos",
      "Vantagem competitiva",
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce Esportivo",
    description: "Lojas virtuais completas para venda de produtos esportivos, uniformes e merchandise.",
    features: [
      "Loja virtual personalizada",
      "Integração com estoque",
      "Múltiplos meios de pagamento",
      "Gestão de pedidos e entregas",
      "Programa de fidelidade",
      "Personalização de produtos",
    ],
    benefits: [
      "Canal de vendas próprio",
      "Margens maiores",
      "Relacionamento direto com consumidor",
      "Dados de comportamento de compra",
    ],
  },
  {
    slug: "wearables",
    name: "Integração com Wearables",
    description: "Soluções para integração de dados de dispositivos vestíveis em plataformas esportivas.",
    features: [
      "Coleta de dados biométricos",
      "Integração com smartwatches",
      "Monitoramento de performance",
      "APIs para integração",
      "Dashboards de saúde",
      "Alertas e notificações",
    ],
    benefits: [
      "Monitoramento em tempo real",
      "Prevenção de lesões",
      "Otimização de treinos",
      "Engajamento gamificado",
    ],
  },
  {
    slug: "ticketing",
    name: "Soluções de Ticketing Digital",
    description: "Sistemas completos de venda e gestão de ingressos para eventos esportivos.",
    features: [
      "Venda online de ingressos",
      "Ingressos digitais e QR codes",
      "Controle de acesso",
      "Gestão de lugares",
      "Prevenção de fraudes",
      "Relatórios em tempo real",
    ],
    benefits: [
      "Vendas mais eficientes",
      "Redução de filas",
      "Combate ao cambismo",
      "Dados sobre público",
    ],
  },
  {
    slug: "cloud",
    name: "Infraestrutura Cloud",
    description: "Soluções de infraestrutura em nuvem escaláveis para organizações esportivas.",
    features: [
      "Arquitetura cloud native",
      "Alta disponibilidade",
      "Escalabilidade automática",
      "Segurança e compliance",
      "Backup e disaster recovery",
      "Monitoramento 24/7",
    ],
    benefits: [
      "Redução de custos de TI",
      "Escalabilidade sob demanda",
      "Maior segurança",
      "Foco no core business",
    ],
  },
];

const TIService = () => {
  return (
    <ServicePage
      departmentTitle="T.I"
      departmentSlug="ti"
      departmentIcon={Monitor}
      accentColor="bg-primary"
      services={servicesData}
    />
  );
};

export default TIService;
