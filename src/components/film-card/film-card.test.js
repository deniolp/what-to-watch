import React from 'react';
import renderer from 'react-test-renderer';

import FilmCard from './film-card';

describe(`FilmCard`, () => {
  const FilmCardMock = {
    id: 1,
    name: `Aviator`,
    src: `img/aviator.jpg`,
  };

  it(`renders correctly`, () => {
    const tree = renderer.create(
        <FilmCard
          film={FilmCardMock}
          onCardMouseEnter={jest.fn()}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
