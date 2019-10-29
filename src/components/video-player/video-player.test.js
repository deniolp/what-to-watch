import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player';
import filmsListMock from '../../mocks/films';

describe(`VideoPlayer`, () => {
  const preview = filmsListMock[0].preview;
  const poster = filmsListMock[0].src;

  it(`renders correctly`, () => {
    const tree = renderer.create(
        <VideoPlayer
          preview={preview}
          poster={poster}
          isPreviewPlaying={false}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
