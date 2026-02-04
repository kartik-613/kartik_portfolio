import React, { useEffect, useRef, useState } from "react";

export function Iphone({ videoSrc, className }) {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            if (isVisible) {
                videoRef.current.play().catch(() => { });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isVisible]);

    return (
        <div
            className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-full w-full min-h-[420px] shadow-2xl transition-all duration-500 ${className}`}
        >
            {/* Screen */}
            <div className="rounded-[2.8rem] overflow-hidden w-full h-full bg-white dark:bg-black">
                {videoSrc ? (
                    <video
                        ref={videoRef}
                        src={videoSrc}
                        loop
                        muted
                        playsInline
                        preload="none"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        No Video
                    </div>
                )}
            </div>
        </div>
    );
}
