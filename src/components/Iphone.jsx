import React from "react";

export function Iphone({ videoSrc, className }) {
    return (
        <div
            className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-full w-full min-h-[420px] shadow-2xl transition-all duration-500 ${className}`}
        >
            {/* Screen */}
            <div className="rounded-[2.8rem] overflow-hidden w-full h-full bg-white dark:bg-black">
                {videoSrc ? (
                    <video
                        src={videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
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
