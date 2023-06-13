"use client";
import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";

export function Player() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <>
            {isLoaded ? (
                <ReactPlayer
                    playing
                    width="272px"
                    height="572px"
                    controls
                    url="https://almazco.com.br/wp-content/uploads/2022/06/Almaz-Mari_1.mp4"
                />
            ) : null}
        </>
    );
}

// "https://almazco.com.br/wp-content/uploads/2022/06/Almaz-Atila_1.mp4"