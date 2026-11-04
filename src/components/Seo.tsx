import { Helmet } from "react-helmet-async";
import { SITE } from "@/data/perfil";

export default function Seo({ title, description, path }: { title: string; description: string; path: string }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE}${path}`} />
    </Helmet>
  );
}
