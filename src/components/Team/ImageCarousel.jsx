import React from 'react';
import "../../utility/fonts.css";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselContainer = styled.div`
  width: 45%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  @media all and (min-width: 214px) and (max-width: 600px) {
    width: 90%;
  }
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
 * @param {{url: string, description: string}[]} props.images
 * @returns {JSX.Element}
 */
const ImageCarousel = (props) => {
    const { images } = props;
    return (
        <CarouselContainer>
            <Carousel autoplay>
                {
                    images.map((image) => (
                        <div key={image.url}>
                            {/*TODO: we should find a way to make this lazy
                                This may entail straight up creating a custom carousel
                            */}
                            <img src={image.url} alt={image.description} loading={"lazy"}/>
                            <Legend className="legend">{image.description}</Legend>
                        </div>
                    ))
                }
            </Carousel>
        </CarouselContainer>
    );
};

export default ImageCarousel;
