import { Link } from "react-router-dom";

function InfoPage() {
  return (
    <div className="container mx-auto mt-[200px] text-center">
      <h1 className="text-2xl font-bold">Loyiha haqida</h1>

      <p className="mt-[100px] mb-[100px] text-lg">
        Assalomu alaykum hurmatli foydalanuvchi. <Link className="text-blue-600">easylearn.uz</Link> loyihasi dasturlashga
        endigina kirib kelgan dasturchilar uchun dasturlashni 0 dan o'rgatish va
        dasturlashning "og'riqli" mavzularini yoritish uchun yaratilgan
        veb-saytdir.
      </p>

      <p className="text-lg">
        Agar sizda qandaydur muammo bo'lsa telegram orqali ushbu
        <Link className="text-blue-600">@onlineplatformrobot</Link> manzilga yozib qoldiring barcha so'rovlar 24 soat
        ichida ko'rib chiqiladi.
      </p>
    </div>
  );
}

export default InfoPage;
