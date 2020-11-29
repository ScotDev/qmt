import React, { useEffect, useState } from "react";

const Image = props => {
    // const [isLoaded, setIsLoaded] = useState(false);
    const [isUndersized, setIsUndersized] = useState("");

    useEffect(() => {
        if (props.imgWidth < 500) {
            console.log("Image undersized")
            setIsUndersized("undersized-image")
        } else {
            console.log("Image normal size")
        }

        return () => {
            // console.log("Cleanup ran")
        }
    }, [])


    return (
        <>
            {/* <img
                className={`${props.imgClass} thumb blur-up-image`}
                alt={props.imgAlt}
                src={props.thumb}
                style={{ display: "none", objectFit: "cover" }}
            /> */}
            <img
                // onLoad={() => {
                //     setIsLoaded(true);
                //     console.log("Image loaded")
                // }}
                className={`${props.imgClass} full blur-up-image ${isUndersized}`}
                // style={{ opacity: isLoaded ? 1 : 0, objectFit: "cover" }}
                alt={props.imgAlt}
                src={props.src}
            />
        </>
    );
};
export default Image;