import { Search } from "lucide-react";
import DepartmentPageContent from "@/components/DepartmentPageContent";
import {
  ambienteEsportivoCover,
  janeiroBrancoPesquisaCover,
  semanaisCover,
} from "@/assets/projetos";

const services = [
  { name: "Pesquisa de Mercado Esportivo", slug: "pesquisa-mercado" },
  { name: "Estudos de Comportamento do Torcedor", slug: "comportamento-torcedor" },
  { name: "Análise de Retorno de Patrocínio", slug: "retorno-patrocinio" },
  { name: "Brand Tracking Esportivo", slug: "brand-tracking" },
  { name: "Pesquisas Ad Hoc", slug: "pesquisas-adhoc" },
  { name: "Painéis de Consumidores", slug: "paineis-consumidores" },
  { name: "Estudos de Viabilidade", slug: "viabilidade" },
  { name: "Benchmarking Internacional", slug: "benchmarking" },
];

const Pesquisa = () => {
  return (
    <DepartmentPageContent
      title="Pesquisa"
      subtitle="Dados que Direcionam Decisões"
      description="Realizamos estudos aprofundados sobre o mercado esportivo brasileiro. Nossas pesquisas fornecem insights valiosos que orientam estratégias de marcas, clubes e organizações esportivas."
      icon={Search}
      accentColor="bg-accent"
      departmentSlug="pesquisa"
      stats={[]}
      services={services}
      projects={[
        {
          title: "Reportagem sobre o ambiente esportivo",
          description: "Apresentação sobre o ambiente esportivos, tabelas,campeonatos,ligas e premiações.",
          category: "Projeto",
          cover: ambienteEsportivoCover,
          stats: [
            { value: "12/2025", label: "Temporada inicial" },
            { value: "2026", label: "Temporada a cobrir" },
          ],
        },
        {
          title: "Pesquisa Janeiro Branco",
          description: "Pesquisa desenvolvida para o evento do Janeiro Branco, com foco em saúde mental e a relação com o esporte.",
          category: "Pesquisa",
          cover: janeiroBrancoPesquisaCover,
          stats: [
            { value: "01/2026", label: "Realização" },
            { value: "Saúde", label: "Tema" },
          ],
        },
        {
          title: "Pesquisas Semanais",
          description: "Produção contínua de pesquisas semanais com atualizações e novidades sobre o cenário esportivo nacional e internacional.",
          category: "Conteúdo",
          cover: semanaisCover,
          stats: [
            { value: "01/2026", label: "Início" },
            { value: "Semanal", label: "Frequência" },
          ],
        },
      ]}
      team={[
        { name: "Isaac Claudino", role: "Gestor", roleDescription: "Lidera o departamento de pesquisa, definindo pautas e direcionamento editorial." },
        { name: "Klay", role: "Coordenadora", roleDescription: "Coordena a equipe de repórteres e organiza a produção de conteúdo." },
        { name: "João Vitor", role: "Repórter", roleDescription: "Apura informações e produz reportagens sobre o cenário esportivo." },
        { name: "Guttierez", role: "Notícias Basquete", roleDescription: "Acompanha o universo do basquete e traz as principais novidades da modalidade." },
        { name: "Giovana", role: "Notícias Vôlei", roleDescription: "Cobre o vôlei com matérias, resultados e bastidores do esporte." },
        { name: "Jully", role: "Notícias Vôlei", roleDescription: "Produz reportagens sobre o vôlei nacional e internacional." },
        { name: "Nicole", role: "Notícias Vôlei", roleDescription: "Acompanha campeonatos de vôlei e divulga histórias dos atletas." },
        { name: "Kauan Henrique", role: "Repórter", roleDescription: "Apura, escreve e contribui com matérias para o departamento de pesquisa." },
      ]}
      timeline={[
        {
          date: "Novembro 2025",
          title: "Criação do Departamento",
          description: "Início oficial do departamento de Pesquisa da Linha de Frente.",
        },
        {
          date: "Dezembro 2025",
          title: "Estruturação do Setor",
          description: "Criação oficial do setor de Pesquisa e definição das funções de cada integrante.",
        },
        {
          date: "Janeiro 2026",
          title: "Pesquisa Janeiro Branco",
          description: "Pesquisa para o evento sobre o Janeiro Branco, com foco em saúde mental e esporte.",
        },
        {
          date: "Janeiro 2026",
          title: "Pesquisas Semanais",
          description: "Início das pesquisas semanais com atualizações sobre os esportes.",
        },
        {
          date: "Fevereiro 2026",
          title: "Carnaval",
          description: "Participação no evento de Carnaval organizado pelo departamento de Eventos.",
        },
        {
          date: "Fevereiro 2026",
          title: "Despedida da Instrutora Debs",
          description: "Café da manhã de despedida da instrutora Débora (Debs).",
        },
        {
          date: "Fevereiro 2026",
          title: "Continuação das Pesquisas",
          description: "Continuidade das pesquisas semanais e produção de conteúdo esportivo.",
        },
        {
          date: "Março 2026",
          title: "Apresentação do Novo Instrutor",
          description: "Apresentação oficial do novo instrutor da empresa.",
        },
        {
          date: "Março 2026",
          title: "Dia das Mulheres",
          description: "Apresentação especial do Dia das Mulheres com destaque para Rebeca Andrade.",
        },
        {
          date: "Março 2026",
          title: "Espro que Eu Vejo",
          description: "Participação no evento Espro que Eu Vejo com apresentações da equipe.",
        },
        {
          date: "Abril 2026",
          title: "Pré-Apresentação de Resultados",
          description: "Pré-apresentação dos resultados consolidados da empresa e do setor de Pesquisa.",
        },
        {
          date: "Abril 2026",
          title: "Pesquisas Semanais",
          description: "Manutenção do ritmo de pesquisas semanais e atualizações esportivas.",
        },
      ]}
    />
  );
};

export default Pesquisa;
