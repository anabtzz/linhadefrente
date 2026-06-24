import { Users } from "lucide-react";
import DepartmentPageContent from "@/components/DepartmentPageContent";
import uniformesPlanilhasCover from "@/assets/projetos/rh-uniformes-planilhas.jpg";
import diarioBordoCover from "@/assets/projetos/rh-diario-bordo.jpg";
import planoCarreiraCover from "@/assets/projetos/rh-plano-carreira.jpg";

const services = [
  { name: "Recrutamento de Executivos Esportivos", slug: "recrutamento" },
  { name: "Gestão de Carreira de Atletas", slug: "gestao-carreira" },
  { name: "Programas de Desenvolvimento", slug: "desenvolvimento" },
  { name: "Consultoria em Cultura Organizacional", slug: "cultura-organizacional" },
  { name: "Mentoria para Ex-Atletas", slug: "mentoria" },
  { name: "Treinamentos Corporativos", slug: "treinamentos" },
  { name: "Assessment de Competências", slug: "assessment" },
  { name: "Planejamento de Sucessão", slug: "planejamento-sucessao" },
];

const RH = () => {
  return (
    <DepartmentPageContent
      title="Recursos Humanos"
      subtitle="Desenvolvendo Campeões Dentro e Fora de Campo"
      description="Especialistas em gestão de talentos esportivos. Recrutamos, desenvolvemos e potencializamos carreiras, tanto de atletas quanto de profissionais do esporte."
      icon={Users}
      accentColor="bg-primary"
      departmentSlug="rh"
      stats={[]}
      services={services}
      projects={[
        {
          title: "Sistema de Uniformes e Planilhas",
          description: "Implementação do sistema de controle e distribuição de uniformes, junto com a estruturação das planilhas de gestão e organização interna do departamento.",
          category: "Gestão",
          cover: uniformesPlanilhasCover,
          stats: [
            { value: "01/2026", label: "Implementação" },
            { value: "100%", label: "Estruturado" },
          ],
        },
        {
          title: "Controle do Diário de Bordo",
          description: "Acompanhamento e organização dos registros realizados pelos jovens durante os dias de curso.",
          category: "Processo",
          cover: diarioBordoCover,
          stats: [
            { value: "01/2026", label: "Realização" },
          ],
        },
        {
          title: "Plano de Carreira Interno",
          description: "Auxílio no direcionamento dos aprendizes para diferentes áreas da empresa, contribuindo para o desenvolvimento profissional e descoberta de novas oportunidades.",
          category: "Desenvolvimento",
          cover: planoCarreiraCover,
          stats: [
            { value: "04/2026", label: "Realização" },
          ],
        },
      ]}
      team={[
        { name: "Pietra", role: "Gestora", roleDescription: "Lidera o RH, cuidando das pessoas e do clima organizacional da empresa." },
        { name: "Geovana Lima", role: "Coordenadora", roleDescription: "Coordena rotinas do RH e apoia o desenvolvimento dos integrantes." },
        { name: "Thaís", role: "Cronograma Diário", roleDescription: "Organiza e acompanha o cronograma diário das atividades da equipe." },
        { name: "Giovanna G.", role: "Controle de Uniforme", roleDescription: "Gerencia a entrega, conservação e controle dos uniformes do time." },
        { name: "Isaac", role: "Ajudante", roleDescription: "Auxilia o RH em tarefas operacionais e no suporte aos colaboradores." },
        { name: "Paulo", role: "Ajudante", roleDescription: "Apoia o departamento em demandas do dia a dia e ações internas." },
      ]}
      timeline={[
        {
          date: "Novembro 2025",
          title: "Criação do Departamento",
          description: "Início oficial do departamento de Recursos Humanos da Linha de Frente.",
        },
        {
          date: "Janeiro 2026",
          title: "Criação do Sistema de Uniformes",
          description: "Implementação do sistema de controle e distribuição de uniformes.",
        },
        {
          date: "Janeiro 2026",
          title: "Criação e Organização das Planilhas",
          description: "Estruturação das planilhas de gestão e organização interna do departamento.",
        },
        {
          date: "Março 2026",
          title: "Espro que Eu Vejo",
          description:
            "Participação no evento Espro que Eu Vejo, encontro externo com toda a Espro, com apresentações de todas as salas.",
        },
      ]}
    />
  );
};

export default RH;
