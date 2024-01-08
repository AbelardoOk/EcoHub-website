import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <main className="w-screen">
      <section className="h-screen bg-[url('/bg1.png')] bg-cover bg-center px-16 py-24 text-paleta-marrom flex flex-row gap-8">
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
              O <span className="text-paleta-verde font-bold">EcoHub</span> é uma plataforma dedicada a promover <span className="text-paleta-verde font-bold">práticas
              sustentáveis</span> e <span className="text-paleta-verde font-bold">conscientização ambiental.</span>
              <br /> Aqui você encontrar <span className="text-paleta-verde font-bold">informações, recursos e comunidades</span>
              para ajudá-lo a adotar um estilo de vida <span className="text-paleta-verde font-bold">mais ecológico.</span>
            </p>
          </div>

          <div>
            <button className="px-10 py-6 bg-paleta-verde text-white rounded-3xl text-3xl text-center font-bold">
              Descubra mais
            </button>
          </div>
        </div>
      </section>
      {/* comumunity */}
      <section className="h-screen bg-[url('/bg1.png')] bg-cover bg-center px-16 py-24 text-paleta-marrom flex flex-row gap-8">
      <div>
      <FontAwesomeIcon
          icon={faUsers}
          className="w-44 h-44"
          style={{ color: "#795548" }}
        ></FontAwesomeIcon>
        </div>
      </section>

    </main>
  );
}
