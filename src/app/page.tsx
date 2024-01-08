"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const NewsApiKey = "75e8a105404542e3b22d5ad043445276";
  const NewsApiUrl = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${NewsApiKey}&category=health`;
  const [news, setNews] = useState("");

  useEffect(() => {
    async function obterNoticias() {
      try {
        const response = await axios.get(NewsApiUrl);
        console.log(response);
        if (response.data && response.data.articles) {
          // Extraia os dados relevantes da resposta
          const articles = response.data.articles.map((article: any) => ({
            title: article.title,
            source: article.source.name,
            image: article.urlToImage,
            publishedAt: article.publishedAt,
          }));
          // Atualize o estado com os dados extraídos
          setNews(articles);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }

    obterNoticias();
  }, []);

  return (
    <main className="w-screen ml-16 bg-paleta-bege">
      {/* Homepage */}
      <section className="h-screen bg-[url('/bg1.png')] bg-cover px-16 bg-center py-24 text-paleta-marrom flex flex-row gap-8">
        <div>
          <FontAwesomeIcon
            icon={faSeedling}
            className="w-44 h-44"
            style={{ color: "#795548" }}
          ></FontAwesomeIcon>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <h1 className="font-alt font-bold text-paleta-verde text-8xl">
              EcoHub
            </h1>
            <h2 className="font-alt text-5xl font-regular">
              Juntos por um{" "}
              <span className="text-paleta-verde font-bold">mundo</span>
              <br />
              mais{" "}
              <span className="text-paleta-verde font-bold">sustentável</span>
            </h2>
          </div>

          <div>
            <p className="font-medium text-2xl text-pretty w-[420px]">
              O EcoHub é uma plataforma dedicada a promover práticas
              sustentáveis e conscientização ambiental.
              <br /> Aqui você encontrar informações, recursos e comunidades
              para ajudá-lo a adotar um estilo de vida mais ecológico.
            </p>
          </div>

          <div>
            <button className="px-10 py-6 bg-paleta-verde text-white rounded-3xl text-3xl text-center font-bold">
              Descubra mais
            </button>
          </div>
        </div>
      </section>

      {/* Dicas sustentáveis */}
      <section className="px-16 h-screen">
        <div>
          {/* Renderize as notícias aqui usando o estado 'news' */}
          {news.map((article: any, index: any) => (
            <div key={index}>
              <h2>{article.title}</h2>
              <p>Fonte: {article.source}</p>
              {article.image && <img src={article.image} alt={article.title} />}
              <p>Data de Publicação: {article.publishedAt}</p>
              <hr />
            </div>
          ))}
        </div>
      </section>

      {/* Comunidades locais */}
      <section className="h-screen"></section>
    </main>
  );
}
