import Centre from "../components/Centre";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Search from "../components/Search";

function HomePage() {
  return (
    <div>
      <Search />
      <Courses />
      <Centre />
      <Footer />
    </div>
  );
}

export default HomePage;
