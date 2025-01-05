"use client";
import Header from "../app/component/Header";
import Filter from "../app/component/Filter";
import CardList from "../app/component/CardList";
import Menu from "../app/component/Menu";
import Fondo from "../public/fondo.png";
export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <br />
      <br />
      <br />
      <div className="py-4" style={{ backgroundImage: `url(${Fondo.src})` }}>
        <Filter />
        <Menu />
      </div>
      <CardList />
    </main>
  );
}
