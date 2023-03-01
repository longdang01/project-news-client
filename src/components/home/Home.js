import { useEffect, useState } from "react";
import Slider from "./childs/Slider";
import SlideService from "../../services/slide.service";

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [searchData, setSearchData] = useState("");

  const getSlides = () => {
    SlideService.search({ searchData: searchData })
      .then((res) => {
        setSlides(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSlides();
  }, []);

  return (
    <>
      <Slider slides={slides} />
    </>
  );
};

export default Home;
