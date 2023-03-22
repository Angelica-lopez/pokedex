import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="bg-[#0DC4BC]">
      <Head>
        <link rel="icon" href="/pokeball.png" />
        <title>Pokedex</title>
      </Head>

      <div className="py-3 max-w-screen-xl m-auto">
        <div>
          <Header />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mt-6 gap-3">
            <Card urlImage="/static/images/pok.png" pokename="Squirtle" />
            <Card urlImage="/static/images/pok.png" pokename="Squirtle" />
            <Card urlImage="/static/images/pok.png" pokename="Squirtle" />
            <Card urlImage="/static/images/pok.png" pokename="Squirtle" />
            <Card urlImage="/static/images/pok.png" pokename="Squirtle" />
            <Card urlImage="/static/images/pok.png" pokename="Squirtle" />
            <Card urlImage="/static/images/pok.png" pokename="Squirtle" />
            <Card urlImage="/static/images/pok.png" pokename="Squirtle" />
            <Card urlImage="/static/images/pok.png" pokename="Squirtle" />
            <Card urlImage="/static/images/pok.png" pokename="Squirtle" />
            <Card urlImage="/static/images/pok.png" pokename="Squirtle" />
            <Card urlImage="/static/images/pok.png" pokename="Squirtle" />
          </div>
        </div>
      </div>
    </div>
  );
}
