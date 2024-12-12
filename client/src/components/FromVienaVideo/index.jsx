import React from "react";

const FromVienaVideo = () => {
  return (
    <div className="py-14">
      <div className="py-20  bg-[#728e41] rounded-[30px] flex items-center justify-center flex-col">
        <h1 className="text-white text-responsive-lg pb-16 font-festivo">
          FROM VIENA WITH LOVE{" "}
        </h1>
        <div>
          <video width="1100" height='600' controls>
            <source
              src="../../client/src/assets/viennaVideo/video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default FromVienaVideo;
