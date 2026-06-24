import { Calendar } from "lucide-react";
import DepartmentPageContent from "@/components/DepartmentPageContent";
import {
  janeiroBrancoCover, janeiroBrancoGallery,
  carnavalCover, carnavalGallery,
} from "@/assets/projetos";
import criacaoDepartamentoCover from "@/assets/projetos/criacao-departamento.jpg";

const services = [
  { name: "Organização de Campeonatos", slug: "campeonatos" },
  { name: "Eventos Corporativos Esportivos", slug: "eventos-corporativos" },
  { name: "Convenções e Feiras do Setor", slug: "convencoes" },
  { name: "Ativações de Patrocínio", slug: "ativacoes" },
  { name: "Corridas e Maratonas", slug: "corridas" },
  { name: "Premiações Esportivas", slug: "premiacoes" },
  { name: "Fan Fests e Watch Parties", slug: "fan-fests" },
  { name: "Gestão de Logística Esportiva", slug: "logistica" },
];

const Eventos = () => {
  return (
    <DepartmentPageContent
      title="Eventos"
      subtitle="Experiências que Marcam História"
      description="Do planejamento à execução impecável, criamos eventos esportivos memoráveis. Cada detalhe é pensado para proporcionar experiências extraordinárias para atletas, patrocinadores e público."
      icon={Calendar}
      accentColor="bg-accent"
      departmentSlug="eventos"
      stats={[]}
      services={services}
      projects={[
        {
          title: "Criação do Departamento",
          description: "Início oficial do departamento de Eventos da Linha de Frente, marco da estruturação da equipe.",
          category: "Marco",
          cover: criacaoDepartamentoCover,
          stats: [
            { value: "11/2025", label: "Fundação" },
            { value: "6", label: "Integrantes" },
          ],
        },
        {
          title: "Evento Janeiro Branco",
          description: "Gincana e atividades temáticas do Janeiro Branco, voltadas à valorização da saúde mental.",
          category: "Evento",
          cover: janeiroBrancoCover,
          gallery: janeiroBrancoGallery,
          stats: [
            { value: "50+", label: "Participantes" },
            { value: `${janeiroBrancoGallery.length}`, label: "Fotos" },
          ],
        },
        {
          title: "Carnaval Linha de Frente",
          description: "Confraternização de carnaval com máscaras, decoração e integração entre os colaboradores.",
          category: "Evento Interno",
          cover: carnavalCover,
          gallery: carnavalGallery,
          stats: [
            { value: "02/2026", label: "Realização" },
            { value: `${carnavalGallery.length}`, label: "Fotos" },
          ],
        },
      ]}
      team={[
        { name: "Marina Amorim", role: "Gestora", roleDescription: "Lidera o departamento, define metas e garante a execução estratégica dos eventos." },
        { name: "Julia Nogueira", role: "Coordenadora", roleDescription: "Coordena equipes e fluxos operacionais para que cada evento aconteça conforme o planejado." },
        { name: "Rayane Duarte", role: "Financeiro", roleDescription: "Cuida do orçamento, controle de gastos e prestação de contas dos eventos." },
        { name: "Mayara Gonçalves", role: "Recepcionista", roleDescription: "Recebe convidados e participantes, garantindo uma experiência acolhedora desde a chegada." },
        { name: "Isabelly", role: "Analista de eventos", roleDescription: "Analisa demandas, propõe melhorias e acompanha indicadores dos eventos realizados." },
        { name: "Lorena Martins", role: "Assistente", roleDescription: "Apoia a equipe em diversas frentes, dando suporte operacional antes, durante e após os eventos." },
      ]}
      timeline={[
        {
          date: "Novembro 2025",
          title: "Criação do Departamento",
          description: "Início oficial do departamento de Eventos da Linha de Frente.",
        },
        {
          date: "Janeiro 2026",
          title: "Evento do Janeiro Branco",
          description: "Realização do evento temático do Janeiro Branco.",
        },
        {
          date: "Fevereiro 2026",
          title: "Evento Interno",
          description: "Organização de evento interno para a equipe.",
        },
      ]}
    />
  );
};

export default Eventos;
