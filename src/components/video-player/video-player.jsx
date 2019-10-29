import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {preview, poster, isPreviewPlaying} = props;
  const format = preview.match(/\w+$/);
  const videoRef = React.createRef();

  useEffect(() => {
    if (isPreviewPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.load();
    }
  }, [isPreviewPlaying]);

  return <video
    muted
    poster={poster}
    width="100%"
    height="100%"
    ref={videoRef}
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

export default VideoPlayer;
