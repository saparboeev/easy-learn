import { useTypewriter } from "react-simple-typewriter";
import { TypeAnimation } from "react-type-animation";

function Search() {
  const [typeEffect] = useTypewriter({
    words: ["oson", "qulay", "hamyonbop"],
    loop: {},
    typeSpeed: 40,
    deleteSpeed: 40,
  });
  return (
    <div className="bg-bgNav md:w-[70%] mx-auto text-center flex flex-col items-center mt-[250px] py-[100px] rounded-[25px] max-[500px]:mx-4 shadow-2xl">
      <h2 className="text-6xl">
        Sifatli o'quv kurslarni topish yanada <span className="text-blue-700">{typeEffect}</span>!
      </h2>

      {/* <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Sifatli o'quv kurslarni topish yanada oson!",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Sifatli o'quv kurslarni topish yanada qulay!",
          1000,
          "Sifatli o'quv kurslarni topish yanada hamyonbop!",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em",  color: 'green'}}
        repeat={Infinity}
      /> */}

      <input
        className="md:w-[50%] max-[500px]:w-[80%] py-4 px-3 rounded-lg mt-[150px]"
        type="text"
        name=""
        id=""
        placeholder="Kurs izlash"
      />
    </div>
  );
}

export default Search;
