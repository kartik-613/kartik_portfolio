import React from "react";

export function Iphone({ videoSrc, className }) {
    return (
        <div
            className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[3.5rem] h-full w-full min-h-[500px] shadow-2xl transition-all duration-500 ${className}`}
        >
            {/* Notch / Dynamic Island area */}
            <div className="w-[148px] h-[30px] bg-gray-800 top-2 rounded-[1.5rem] left-1/2 -translate-x-1/2 absolute z-20"></div>

            {/* Buttons */}
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

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
