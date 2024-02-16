import Py from "../images/1BhhC1QQ8Sh6WWlZu_U57fxTfSOLvJj1h.png";
import Js from "../images/1Q3lWNkeccmTj_amTpFzhK1jictsq1rlt.jpeg";
import Tg from "../images/1hjAmio_uy0J5XR45iOjpKDE5Las1CjuE.png";

function Courses() {
  return (
    <div className="container mx-auto mt-[200px]">
      <h2 className="text-center text-4xl mb-20">Bizning kurslar</h2>

      <div className="box flex justify-between max-[800px]:flex-wrap gap-x-4 bg-bgNav py-10 px-10 rounded-xl shadow-2xl">
        <div className="childBox rounded-xl bg-white shadow-xl mx-auto my-10">
          <img className="w-[600px] rounded-t-xl mb-[35px]" src={Py} alt="" />
          <p className="pl-10 mb-6">
            Kurs: <span>C dasturlash tili</span>
          </p>
          <p className="pl-10 mb-6">
            Ustoz: <span>Islom Abdurahmonov</span>
          </p>
          <p className="pl-10 mb-4">
            Narxi: <span>Bepul</span>
          </p>
          <div className="btn w-full text-center my-14">
            <button className="text-center py-4 px-10 bg-bgBrown text-white rounded-xl">
              Ko'rish
            </button>
          </div>
        </div>
        <div className="childBox rounded-xl bg-white shadow-xl mx-auto my-10">
          <img className="w-[600px] rounded-t-xl mb-[35px]" src={Tg} alt="" />
          <p className="pl-10 mb-6">
            Kurs: <span>C dasturlash tili</span>
          </p>
          <p className="pl-10 mb-6">
            Ustoz: <span>Islom Abdurahmonov</span>
          </p>
          <p className="pl-10 mb-4">
            Narxi: <span>Bepul</span>
          </p>
          <div className="btn w-full text-center my-14">
            <button className="text-center py-4 px-10 bg-bgBrown text-white rounded-xl">
              Ko'rish
            </button>
          </div>
        </div>
        <div className="childBox bg-white rounded-xl shadow-xl mx-auto my-10">
          <img className="w-[600px] rounded-t-xl mb-[35px]" src={Js} alt="" />
          <p className="pl-10 mb-6">
            Kurs: <span>C dasturlash tili</span>
          </p>
          <p className="pl-10 mb-6">
            Ustoz: <span>Islom Abdurahmonov</span>
          </p>
          <p className="pl-10 mb-4">
            Narxi: <span>Bepul</span>
          </p>
          <div className="btn w-full text-center my-14">
            <button className="text-center py-4 px-10 bg-bgBrown text-white rounded-xl">
              Ko'rish
            </button>
          </div>
        </div>
      </div>

      <div className="btnGroup text-center mt-[100px]">
        <button className="bg-bgBrown text-white py-4 px-10 rounded-xl shadow-xl">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Courses;
