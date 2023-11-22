import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src="\src\assets\img\img1.jpg" className="w-100" alt="" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="\src\assets\img\img2.jpg" className="w-100" alt="" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="\src\assets\img\img3.jpg" className="w-100" alt="" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
