import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container mx-auto flex mt-[250px] items-center justify-between border-t-[1px] border-bgBrown py-10 max-[700px]:flex-col  ">
      <div className="left w-[40%] max-[700px]:w-full ">
        <Link className="text-bgBrown text-4xl">Easy Learn</Link>
        <p className="my-4">
          Call center: <span>+998991234567</span>
        </p>
        <p>c 2023. Barcha huquqlar himoyalangan.</p>
      </div>

      <div className="middle w-[30%] max-[700px]:w-full max-[700px]:mt-[50px]">
        <ul className="max-[700px]:flex-col max-[700px]:items-start w-full flex items-center justify-between max-[700px]:gap-y-5 ">
          <li>
            <Link>Kirish</Link>
          </li>
          <li>
            <Link>Loyiha haqida</Link>
          </li>
          <li>
            <Link>FAQ</Link>
          </li>
        </ul>
      </div>

      <div className="right w-[10%] max-[700px]:w-full max-[700px]:mt-10 ">
        <ul className="w-full flex items-center justify-around ">
          <li>
            <Link>
              <i class="fa-brands fa-facebook text-2xl text-blue-500"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i class="fa-brands fa-telegram text-2xl text-blue-700"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i class="fa-brands fa-instagram text-2xl text-pink-600"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
