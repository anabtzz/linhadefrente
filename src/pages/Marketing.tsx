import { Megaphone } from "lucide-react";
import DepartmentPageContent from "@/components/DepartmentPageContent";
import {
  janeiroBrancoCover, janeiroBrancoGallery,
  carnavalCover, carnavalGallery,
  novembroNegroCover, novembroNegroGallery,
  esproQueEuVejoCover, esproQueEuVejoGallery,
} from "@/assets/projetos";
import identidadeInstagramCover from "@/assets/projetos/marketing-identidade-instagram.jpg";

const services = [
  { name: "Gestão de Redes Sociais Esportivas", slug: "gestao-redes-sociais" },
  { name: "Campanhas de Patrocínio", slug: "campanhas-patrocinio" },
  { name: "Ativação de Marca em Eventos", slug: "ativacao-marca" },
  { name: "Marketing de Influenciadores Esportivos", slug: "marketing-influenciadores" },
  { name: "Produção de Conteúdo Audiovisual", slug: "producao-conteudo" },
  { name: "Estratégias de Fan Engagement", slug: "fan-engagement" },
  { name: "Branding Esportivo", slug: "branding" },
  { name: "Assessoria de Imprensa Especializada", slug: "assessoria-imprensa" },
];

const Marketing = () => {
  return (
    <DepartmentPageContent
      title="Marketing"
      subtitle="Estratégias que Movem Multidões"
      description="Criamos campanhas de marketing esportivo que conectam marcas a milhões de fãs apaixonados. Nossa abordagem combina criatividade, dados e profundo conhecimento do mercado esportivo brasileiro."
      icon={Megaphone}
      accentColor="bg-primary"
      departmentSlug="marketing"
      stats={[]}
      services={services}
      projects={[
        {
          title: "Cobertura Novembro Negro",
          description: "Cobertura visual do Novembro Negro, com cartazes e divulgação nas redes sociais celebrando a consciência negra.",
          category: "Conteúdo",
          cover: novembroNegroCover,
          gallery: novembroNegroGallery,
          stats: [
            { value: "11/2025", label: "Realização" },
            { value: `${novembroNegroGallery.length}`, label: "Fotos" },
          ],
        },
        {
          title: "Cobertura Janeiro Branco",
          description: "Cobertura completa da gincana do Janeiro Branco, com fotos, vídeos e publicações sobre saúde mental.",
          category: "Conteúdo",
          cover: janeiroBrancoCover,
          gallery: janeiroBrancoGallery,
          stats: [
            { value: "01/2026", label: "Realização" },
            { value: `${janeiroBrancoGallery.length}`, label: "Fotos" },
          ],
        },
        {
          title: "Cobertura Carnaval",
          description: "Confecção de máscaras e cobertura fotográfica do carnaval interno da Linha de Frente.",
          category: "Conteúdo",
          cover: carnavalCover,
          gallery: carnavalGallery,
          stats: [
            { value: "02/2026", label: "Realização" },
            { value: `${carnavalGallery.length}`, label: "Fotos" },
          ],
        },
        {
          title: "Identidade Visual e Instagram",
          description: "Reunião de criação da logo oficial e do Instagram da Linha de Frente, definindo a identidade visual da empresa.",
          category: "Branding",
          cover: identidadeInstagramCover,
          stats: [
            { value: "12/2025", label: "Lançamento" },
            { value: "100%", label: "Concluído" },
          ],
        },
        {
          title: "Espro que Eu Vejo",
          description: "Participação e cobertura do evento Espro que Eu Vejo, com apresentações e show de talentos.",
          category: "Evento",
          cover: esproQueEuVejoCover,
          gallery: esproQueEuVejoGallery,
          stats: [
            { value: "03/2026", label: "Realização" },
            { value: `${esproQueEuVejoGallery.length}`, label: "Fotos" },
          ],
        },
      ]}
      team={[
        { name: "Izabele", role: "Gestora", roleDescription: "Lidera a estratégia de marketing e alinha as campanhas com a identidade da Linha de Frente." },
        { name: "Isabella P", role: "Coordenadora", roleDescription: "Coordena a equipe criativa e organiza as entregas do departamento." },
        { name: "Anaju", role: "Audiovisual", roleDescription: "Produz e edita vídeos que dão vida às histórias do esporte." },
        { name: "Leandro", role: "Audiovisual", roleDescription: "Capta imagens e produz conteúdos audiovisuais para as redes." },
        { name: "Davi", role: "Design", roleDescription: "Cria peças gráficas e mantém a identidade visual em cada publicação." },
        { name: "Guilherme", role: "Design", roleDescription: "Desenvolve artes, layouts e materiais visuais das campanhas." },
        { name: "Júlia Ferreira", role: "Adm das Redes Sociais", roleDescription: "Gerencia as redes sociais, planeja postagens e interage com a comunidade." },
      ]}
      timeline={[
        {
          date: "Novembro 2025",
          title: "Criação do Departamento",
          description: "Início oficial do departamento de Marketing da Linha de Frente.",
        },
        {
          date: "Novembro 2025",
          title: "Apresentação Novembro Negro",
          description: "Apresentação realizada por outra turma explicando a importância do Novembro Negro.",
        },
        {
          date: "Dezembro 2025",
          title: "Reunião de Identidade Visual",
          description: "Reunião do marketing para criação do Instagram e da logo oficial da empresa.",
        },
        {
          date: "Janeiro 2026",
          title: "Fotos Individuais e Aniversariantes",
          description: "Sessão de fotos individuais dos jovens para divulgação e destaque dos aniversariantes do mês.",
        },
        {
          date: "Janeiro 2026",
          title: "Gincana do Janeiro Branco",
          description: "Cobertura e divulgação da gincana do Janeiro Branco organizada pelo departamento de eventos.",
        },
        {
          date: "Fevereiro 2026",
          title: "Carnaval e Café Coletivo",
          description: "Confecção de máscaras de carnaval e organização de um café coletivo entre os integrantes.",
        },
        {
          date: "Março 2026",
          title: "Dia das Mulheres",
          description: "Apresentação do Dia das Mulheres e criação de camisas personalizadas para a data.",
        },
        {
          date: "Março 2026",
          title: "Espro que Eu Vejo",
          description:
            "Participação no evento Espro que Eu Vejo, com apresentações, show de talentos e outras atividades.",
        },
      ]}
    />
  );
};

export default Marketing;
