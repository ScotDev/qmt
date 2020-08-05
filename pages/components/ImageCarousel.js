import { CarouselProvider, Image, Slide, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";
import React from "react";


// import CustomDotGroup from "../components/CustomDotGroup";

const ImageCarousel = () => (
    <div className="carousel-section">
        <CarouselProvider
            naturalSlideWidth={2}
            naturalSlideHeight={1}
            hasMasterSpinner
            infinite
            totalSlides={3}
        >
            <Slider>
                <a href="https://www.google.com/">
                    <Slide tag="a" index={0}>
                        <Image src="https://source.unsplash.com/random/1920x1080" />
                    </Slide>
                </a>
                <Slide tag="a" index={1}>
                    <Image src="https://source.unsplash.com/random/" />
                </Slide>
                <Slide tag="a" index={2}>
                    <Image src="https://source.unsplash.com/random/" />
                </Slide>
            </Slider>
            {/* <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext> */}

            {/* <CustomDotGroup slides={3} /> */}
        </CarouselProvider>
    </div>
);

export default ImageCarousel;
