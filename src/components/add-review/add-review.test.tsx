import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import {AddReview} from './add-review';
import filmsListMock from '../../mocks/films';

describe(`AddReview`, () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  const initialState = {
    genre: `All genres`,
    films: [],
    promo: {},
    comments: [],
    filmsCounter: 8,
    playingFilm: false,
    isAuthorizationRequired: false,
    user: {},
    favorites: [],
    isReviewSending: false,
    didReviewSend: false,
  };
  const store = mockStore(initialState);

  it(`renders correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter><Provider store={store}><AddReview
          match={{
            params: {
              id: 1,
            },
          }}
          films={filmsListMock}
          user={{
            id: 1,
            name: `Olga`,
            email: `r@ya.ru`,
            avatarUrl: `/img/photo.jpg`,
          }}
          isValidated={true}
          onRadioClick={jest.fn()}
          onTextareaChange={jest.fn()}
          onSubmitForm={jest.fn()}
          onLoadFilms={jest.fn()}
          onUpdateForm={jest.fn()}
          isReviewSending={false}
          didReviewSend={false}
          history={{
            push: jest.fn(),
          }}
        /></Provider></BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
