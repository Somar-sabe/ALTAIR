import React from 'react';

const Video = () => {
  return (
    <div>
      <section className="h-scroll__section dark video-section wf-section">
        <div className="video-section__wrap">
          <div id="reel" className="fs-video">
            <div className="fs-video__player w-embed w-iframe">
              <iframe
                loading=""
                src="https://player.vimeo.com/video/693900264?h=73b1df0592?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;loop=1&amp;autopause=0&amp;background=1&amp;muted=1"
                allow="autoplay"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <img
              src="https://assets.website-files.com/61fb92bac35517f753fbbdd7/622b4913d1430db5dbead264_hdweb_placeholder.png"
              loading="lazy"
              sizes="(max-width: 479px) 84vw, (max-width: 767px) 90vw, (max-width: 991px) 65vw, (max-width: 3147px) 61vw, 1920px"
              srcSet="
                https://assets.website-files.com/61fb92bac35517f753fbbdd7/622b4913d1430db5dbead264_hdweb_placeholder-p-500.png 500w,
                https://assets.website-files.com/61fb92bac35517f753fbbdd7/622b4913d1430db5dbead264_hdweb_placeholder-p-800.png 800w,
                https://assets.website-files.com/61fb92bac35517f753fbbdd7/622b4913d1430db5dbead264_hdweb_placeholder-p-1080.png 1080w,
                https://assets.website-files.com/61fb92bac35517f753fbbdd7/622b4913d1430db5dbead264_hdweb_placeholder-p-1600.png 1600w,
                https://assets.website-files.com/61fb92bac35517f753fbbdd7/622b4913d1430db5dbead264_hdweb_placeholder.png 1920w"
              alt="Placeholder image"
              className="vid-placeholder"
            />
          </div>
        </div>
        <div id="btnPlay" className="video-play-button">
          <div>
            <a href="#" className="reel__btn">
              Play reel
            </a>
          </div>
        </div>
        <div className="fs-video__overlay"></div>
      </section>
    </div>
  );
};

export default Video;
