import ImageSlider from "../components/ImageSlider";
import Movies from "./Movies"; // Import the Movies component
import Animations from "./Animations";

const Main = () => {
  const slides = [
    { url: "./images/broken.jpg", title: "beach" },
    { url: "./images/jesus.jpg", title: "boat" },
    { url: "./images/star.jpg", title: "forest" },
    { url: "./images/god's not dead1.jpg", title: "city" },
    { url: "./images/god's not dead1.jpg.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "100&",
    height: "70vh",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <Movies />
      <Animations />
    </div>
  );
};

export default Main;
