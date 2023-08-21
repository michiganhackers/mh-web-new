import React from "react";
import "utility/fonts.css";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import devices from "utility/MediaQueries.js";

const CarouselContainer = styled.div`
  width: 45%;
  height: auto;
  margin: auto;

  ${devices.giant`
      width: 60%;
    `}
  ${devices.tablet`
      width: 70%;
    `}
    ${devices.small`
      width: 90%;
    `}
`;

const Legend = styled.p`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  color: white;
  font-size: 48px;
`;

/**
 * Display the input array of images in an image carousel.
 * Expects the image location and a short description.
 *
 * @constructor
 * @param props A list of objects each containing the location and a short description
 */
const ImageCarousel = (props) => {
  const { images } = props;
  return (
    <CarouselContainer>
      <Carousel autoplay>
        {images.map((image) => (
          <div key={image.url}>
            {/*TODO: we should find a way to make this lazy
                                This may entail straight up creating a custom carousel
                            */}
            <img src={image.url} alt={image.description} loading={"lazy"} />
            <Legend className="legend">{image.description}</Legend>
          </div>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default ImageCarousel;
