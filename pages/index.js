import Alinti from "./Alinti";
import Gordum from "./Gordum";
import KisiListesi from "./KisiListesi";
import OzluSoz from "./OzluSoz";
import Sayac from "./Sayac";

function Home() {
  let ad = "Dünya";
  let mevsimler = ["İlkbahar", "Yaz", "Sonbahar", "Kış"];

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Merhaba {ad}!
      </h1>
      <p>İlk Next.js sayfanız.</p>
      <OzluSoz />
      <Sayac />
      <Sayac deger={10} />
      <Sayac deger={100} />

      <KisiListesi />

      <Alinti />

      <h2 className="text-2xl font-bold mt-2">Mevsimler</h2>
      <ul className="list-disc ml-6">
        {mevsimler.map((x) => <li>{x}</li>)}
      </ul>

      <h2 className="text-2xl font-bold mt-2">Gördüğüm Şeyler</h2>
      <Gordum deger="Arnavutluk ülkesindeki İskodra şehrini" />
      <Gordum deger="nükleer reaktör" />
      <Gordum deger="kocaman bir örümcek" />
      <Gordum deger="sondaj makinesi" />
    </div>
  );
}

export default Home;