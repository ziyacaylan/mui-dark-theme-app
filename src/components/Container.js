import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const carouselItems = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Grey Cat",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/96428/pexels-photo-96428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Grey Cat",
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Dog",
  },
  {
    id: 4,
    imageUrl:
      "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Grey Dog",
  },
  {
    id: 5,
    imageUrl:
      "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Horse",
  },
  {
    id: 6,
    imageUrl:
      "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Horse",
  },
  {
    id: 7,
    imageUrl:
      "https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Horse",
  },
];

const Container = () => {
  return (
    <Carousel className="img-items">
      {carouselItems.map((item) => (
        <div key={item.id} width="250px">
          <img src={item.imageUrl} alt={item.title} width="250px" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
      ))}
    </Carousel>
  );
};

export default Container;
