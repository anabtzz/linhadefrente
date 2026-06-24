import { Monitor } from "lucide-react";
import DepartmentPageContent from "@/components/DepartmentPageContent";
import ambienteArmazenamentoCover from "@/assets/projetos/ti-ambiente-armazenamento.png";
import criacaoSiteCover from "@/assets/projetos/ti-criacao-site.png";
import aprimoramentoSiteCover from "@/assets/projetos/ti-aprimoramento-site.jpg";

const services = [
  { name: "Plataformas de Streaming Esportivo", slug: "streaming" },
  { name: "Sistemas de Gestão de Clubes", slug: "gestao-clubes" },
  { name: "Analytics e Business Intelligence", slug: "analytics" },
  { name: "E-commerce Esportivo", slug: "ecommerce" },
  { name: "Integração com Wearables", slug: "wearables" },
  { name: "Soluções de Ticketing Digital", slug: "ticketing" },
  { name: "Infraestrutura Cloud", slug: "cloud" },
];

const TI = () => {
  return (
    <DepartmentPageContent
      title="T.I"
      subtitle="Tecnologia que Transforma o Esporte"
      description="Desenvolvemos soluções tecnológicas inovadoras que revolucionam a experiência esportiva. De apps a plataformas de análise de dados, criamos o futuro do esporte digital."
      icon={Monitor}
      accentColor="bg-primary"
      departmentSlug="ti"
      stats={[]}
      services={services}
      projects={[
        {
          title: "Ambiente de armazenamento",
          description: "Criação das pastas drives e contas administrativos",
          category: "Projeto",
          cover: ambienteArmazenamentoCover,
          stats: [],
        },
        {
          title: "Criação do Site ",
          description: "Criação do site linha de frente. Utilizando Javascript,Htmil e Css",
          category: "Projeto",
          cover: criacaoSiteCover,
          stats: [],
        },
        {
          title: "Aprimoramento e Adaptação do Site",
          description: "Melhorias visuais e funcionais no site institucional, com adaptações para a apresentação de resultados da empresa.",
          category: "Projeto",
          cover: aprimoramentoSiteCover,
          stats: [
            { value: "02/2026", label: "Aprimoramento" },
            { value: "04/2026", label: "Adaptação" },
          ],
        },
      ]}
      team={[
        { name: "Erick", role: "Gestor", roleDescription: "Lidera o departamento de TI, definindo prioridades técnicas e direção dos projetos." },
        { name: "Guilherme", role: "Coordenador", roleDescription: "Coordena a equipe de tecnologia e organiza as entregas do time." },
        { name: "Felipe", role: "FrontEnd", roleDescription: "Desenvolve as interfaces do site, focando em experiência e usabilidade." },
        { name: "Kaio", role: "Testes", roleDescription: "Garante a qualidade do produto através de testes e validações." },
        { name: "Ana Beatriz", role: "Design", roleDescription: "Cria layouts e protótipos visuais das telas e funcionalidades do site." },
        { name: "Maycon", role: "Redator", roleDescription: "Produz textos e conteúdos para o site e materiais do departamento." },
        { name: "Laryssa Duarte", role: "Suporte", roleDescription: "Apoia o time em demandas variadas, contribuindo com a operação da TI." },
      ]}
      timeline={[
        {
          date: "Novembro 2025",
          title: "Criação do Departamento",
          description: "Início oficial do departamento de T.I da Linha de Frente.",
        },
        {
          date: "Janeiro 2026",
          title: "Criação do Site",
          description: "Desenvolvimento e lançamento do site institucional.",
        },
        {
          date: "Fevereiro 2026",
          title: "Aprimoramento do Site",
          description: "Melhorias visuais e funcionais no site.",
        },
        {
          date: "Abril 2026",
          title: "Adaptação do Site",
          description: "Mudanças e preparação do site para a apresentação de resultados.",
        },
      ]}
    />
  );
};

export default TI;
