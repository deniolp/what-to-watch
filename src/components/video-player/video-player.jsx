import React, {useEffect, memo} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {preview, poster, isPreviewPlaying} = props;
  const format = preview.match(/\w+$/);
  const videoRef = React.createRef();

  useEffect(() => {
    if (isPreviewPlaying) {
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise.catch((_error) => {
        }).then(() => {
        });
      }
    } else {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [isPreviewPlaying]);

  return <video
    ref={videoRef}
    preload = "auto"
    muted
    poster={poster}
    width="100%"
    height="100%"
  >
    <source
      src={preview}
      type={`video/${format}`}
    ></source>
  </video>;
};

VideoPlayer.propTypes = {
  preview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPreviewPlaying: PropTypes.bool.isRequired,
};

export default memo(VideoPlayer);
