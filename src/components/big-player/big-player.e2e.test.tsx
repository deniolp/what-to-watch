import * as React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BigPlayer from './big-player';
import filmsListMock from '../../mocks/films';

Enzyme.configure({adapter: new Adapter()});

describe(`In BigPlayer`, () => {
  const filmMock = filmsListMock[0];
  const pauseStub = jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(jest.fn());
  const playStub = jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(jest.fn());

  const BigPlayerWrapper = mount(<BigPlayer
    playingFilm={filmMock}
    onOpenCloseVideoButtonClick={jest.fn()}
    isPlaying={false}
    setIsPlaying={jest.fn()}
    progress={0}
    setProgress={jest.fn()}
    isLoading={true}
    setIsLoading={jest.fn()}
  />);
  const buttonElement = BigPlayerWrapper.find(`.player__play`);

  it(`has to be button element`, () => {
    expect(BigPlayerWrapper.props().isPlaying).toEqual(false);
    expect(buttonElement).toHaveLength(1);
  });

  it(`pause has to be called`, () => {
    expect(pauseStub).toHaveBeenCalled();
  });

  it(`has to have proper behavior if isPlaying prop is true`, () => {
    BigPlayerWrapper.setProps({isPlaying: true});
    expect(BigPlayerWrapper.props().isPlaying).toEqual(true);
    expect(buttonElement).toHaveLength(1);
    expect(playStub).toHaveBeenCalled();
  });
});
