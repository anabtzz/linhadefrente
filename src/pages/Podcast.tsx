import { Mic } from "lucide-react";
import DepartmentPageContent from "@/components/DepartmentPageContent";
import { PodcastPlayer } from "@/components/PodcastPlayer";

const services = [
  { name: "Produção de Podcast Próprio", slug: "podcast-proprio" },
  { name: "Podcasts Corporativos para Marcas", slug: "podcasts-corporativos" },
  { name: "Entrevistas Exclusivas", slug: "entrevistas" },
  { name: "Cobertura de Eventos ao Vivo", slug: "cobertura-eventos" },
  { name: "Documentários em Áudio", slug: "documentarios" },
  { name: "Distribuição Multiplataforma", slug: "distribuicao" },
  { name: "Monetização e Patrocínios", slug: "monetizacao" },
  { name: "Estratégia de Conteúdo", slug: "estrategia-conteudo" },
];

const Podcast = () => {
  return (
    <DepartmentPageContent
      title="Podcast"
      subtitle="As Vozes do Esporte Brasileiro"
      description="Produzimos conteúdo de áudio e fazemos gincanas sobre todos os tipos de esportes, falando sobre experiências profissionais e também sobre como o esporte influencia no mundo e nossas vidas."
      icon={Mic}
      accentColor="bg-accent"
      departmentSlug="podcast"
      stats={[]}
      services={services}
      projects={[
        {
          title: "PODJOGAR",
          description: "Ouça os episódios do nosso podcast oficial no Spotify e assista no YouTube.",
          category: "Player",
          customContent: <PodcastPlayer />,
          stats: [],
        },
      ]}
      team={[
        { name: "Mateus", role: "Gestor", roleDescription: "Lidera o departamento de podcast, definindo temas e estratégia de conteúdo." },
        { name: "Otávio", role: "Coordenador", roleDescription: "Coordena a equipe e organiza a produção dos episódios." },
        { name: "Bianca", role: "Postagens", roleDescription: "Cuida da divulgação dos episódios e do conteúdo nas redes sociais." },
        { name: "Bruna", role: "Postagens", roleDescription: "Produz e publica conteúdos para promover o podcast nas plataformas." },
        { name: "Leonardo", role: "Edição/Apresentação", roleDescription: "Edita os episódios e participa como apresentador, dando voz ao podcast." },
        { name: "Giulia", role: "Mídias", roleDescription: "Cuida das gravações e fotos para postarmos nas redes sociais e fica na edição e filtragem das fotos." },
        { name: "Gaby", role: "Roteirista", roleDescription: "Ajuda o Coordenador a criar os roteiros e fazer as dinâmicas do grupo, para que os vídeos fluam mais." },
      ]}
      timeline={[
        {
          date: "Novembro 2025",
          title: "Criação do Departamento",
          description: "Início oficial do departamento de Podcast da Linha de Frente.",
        },
        {
          date: "Janeiro 2026",
          title: "Criação do PODJOGAR",
          description: "Lançamento do podcast oficial PODJOGAR.",
        },
        {
          date: "Janeiro 2026",
          title: "Gravação do Primeiro Podcast",
          description: "Primeira gravação oficial do PODJOGAR.",
        },
        {
          date: "Fevereiro 2026",
          title: "Episódio Janeiro Branco no Spotify",
          description: "Episódio sobre saúde mental, discutindo como os esportes ajudam e afetam a saúde mental.",
        },
        {
          date: "Fevereiro 2026",
          title: "Episódio de Apresentação no YouTube",
          description:
            "Apresentação dos integrantes do departamento, conversando sobre os esportes que praticamos e gostaríamos de praticar.",
        },
      ]}
    />
  );
};

export default Podcast;
