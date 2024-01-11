"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LogoIcon } from "../../public/logo";

export default function Home() {
  const NewsApiKey = "75e8a105404542e3b22d5ad043445276";
  const NewsApiUrl = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${NewsApiKey}&category=health`;
  const [news, setNews] = useState([]);
  const maxNews = 4;
  const limitedNews = news.slice(0, maxNews);

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
    <main className="ml-12 w-screen snap-y snap-mandatory !scroll-smooth bg-paleta-bege">
      {/* Homepage */}
      <section className="flex h-screen snap-start snap-always flex-row gap-8 bg-[url('/bg1.png')] bg-cover bg-center px-48 py-24 text-paleta-marrom">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <h1 className="font-alt text-8xl font-bold text-paleta-verde">
                EcoHub
              </h1>
              <LogoIcon altura={40} largura={40} />
            </div>

            <h2 className="font-regular font-alt text-5xl">
              Juntos por um{" "}
              <span className="font-bold text-paleta-verde">mundo</span>
              <br />
              mais{" "}
              <span className="font-bold text-paleta-verde">sustentável</span>
            </h2>
          </div>

          <div>
            <p className="w-[420px] text-pretty text-2xl font-medium">
              O <span className="font-bold text-paleta-verde">EcoHub</span> é
              uma plataforma dedicada a promover{" "}
              <span className="font-bold text-paleta-verde">
                práticas sustentáveis
              </span>{" "}
              e{" "}
              <span className="font-bold text-paleta-verde">
                conscientização ambiental.
              </span>
              <br /> Aqui você encontrar{" "}
              <span className="font-bold text-paleta-verde">
                informações, recursos e comunidades
              </span>
              para ajudá-lo a adotar um estilo de vida{" "}
              <span className="font-bold text-paleta-verde">
                mais ecológico.
              </span>
            </p>
          </div>

          <div>
            <button className="rounded-3xl bg-paleta-verde px-10 py-6 text-center text-3xl font-bold text-white">
              Descubra mais
            </button>
          </div>
        </div>
      </section>

      {/* Dicas sustentáveis */}
      <section className="h-screen snap-start snap-always px-14 py-12">
        <h1 className="font-alt text-3xl font-bold text-paleta-verde">
          Veja as notícias mais faladas!
        </h1>
        <div className="flex flex-row gap-8 p-8 pt-4">
          {/* Renderize as notícias aqui usando o estado 'news' */}
          {Array.isArray(limitedNews) &&
            limitedNews.map((article: any, index: any) => (
              <div
                key={index}
                className="flex w-[25%] flex-col rounded-xl bg-white px-4 py-4 shadow-lg"
              >
                {article.image && (
                  <Image src={article.image} alt={article.title} />
                )}
                <div className="">
                  <h2 className="text-lg font-bold text-paleta-marrom">
                    {article.title}
                  </h2>
                  <p className="font-medium text-black">{article.source}</p>
                  <p className="font-light text-paleta-cinza">
                    {article.publishedAt.slice(8, 10)}/
                    {article.publishedAt.slice(5, 7)}/
                    {article.publishedAt.slice(0, 4)}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="grid grid-cols-2">
          <div>
            <h1 className="font-alt text-3xl font-bold text-paleta-verde">
              Veja vídeos sobre ecologia e sustentabilidade!
            </h1>
            <div className="grid grid-cols-2 justify-between gap-3 p-8">
              <iframe
                className="h-fit w-[90%] shadow-xl"
                src="https://www.youtube.com/embed/EVb8xKCYgpo?si=60uGGVLiyKxTZ-Hw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <iframe
                className="h-fit w-[90%] shadow-xl"
                src="https://www.youtube.com/embed/A_5KZ87hHJI?si=mT_IMfXPl6YuRdEW"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <iframe
                className="h-fit w-[90%] shadow-xl"
                src="https://www.youtube.com/embed/4bTvKWk_McY?si=cwonNg7LZh_vD5EJ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <iframe
                className="h-fit w-[90%] shadow-xl"
                src="https://www.youtube.com/embed/EVb8xKCYgpo?si=60uGGVLiyKxTZ-Hw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div>
            <h1 className="font-alt text-3xl font-bold text-paleta-verde">
              Como posso descobrir e propagar mais sobre um mundo mais
              sustentável?
            </h1>
            <div className="flex flex-col gap-4 p-8">
              <div className="rounded-xl bg-white p-4 shadow-lg">
                <h2 className="text-lg font-bold text-paleta-marrom">
                  Participe de rodas de conversa sobre ecologia
                </h2>
                <p className="text-black">
                  No Brasil, frequentemente ocorrem reuniões significativas
                  abordando temas de sustentabilidade e iniciativas relevantes.
                </p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-lg">
                <h2 className="text-lg font-bold text-paleta-marrom">
                  Converse sobre com amigos
                </h2>
                <p className="text-black">
                  Conversar com entes queridos é uma forma envolvente de
                  aprender e ensinar, criando um ambiente acolhedor que promove
                  colaboração mútua.
                </p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-lg">
                <h2 className="text-lg font-bold text-paleta-marrom">
                  Seja mais ativo no que aprendeu
                </h2>
                <p className="text-black">
                  Contribuir efetivamente vai além de apenas ouvir e falar; é
                  necessário agir. Para uma contribuição significativa, é
                  crucial trabalhar com objetivos sustentáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* comumunity */}
      <section className="flex h-screen flex-row gap-8 bg-[url('/bg1.png')] bg-cover bg-center px-16 py-24 text-paleta-marrom">
        <div>
          <FontAwesomeIcon
            icon={faUsers}
            className="h-44 w-44"
            style={{ color: "#795548" }}
          ></FontAwesomeIcon>
        </div>
      </section>
    </main>
  );
}
