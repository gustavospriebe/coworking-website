"use client";
import { partnersConfig } from "@/config/Partners";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

export function Player() {
    const items = partnersConfig.Videos;
    const [isLoaded, setIsLoaded] = useState(false);
    const [video, setVideo] = useState(0);

    function changeState() {
        setVideo((prevState) => (prevState + 1) % items.length);
    }

    useEffect(() => {
        setIsLoaded(true);
    }, [video]);

    return (
        <>
            {isLoaded ? (
                <ReactPlayer
                    onEnded={changeState}
                    playing
                    muted
                    width="272px"
                    height="572px"
                    controls
                    url={items[video]}
                />
            ) : null}
        </>
    );
}
