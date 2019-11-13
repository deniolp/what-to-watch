import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import MainPage from '../main-page/main-page';
import FilmDetails from '../film-details/film-details';
import {ActionCreator} from '../../reducer';
import filmsMocks from '../../mocks/films';

const App = (props) => {
  const {films, genre, onGenreClick} = props;
  const genres = new Set().add(`All genres`);
  filmsMocks.forEach((film) => genres.add(film.genre));

  return <Switch>
    <Route path="/" exact render={() => {
      return <MainPage
        films={films}
        genre={genre}
        onGenreClick={onGenreClick}
        genres={genres}
      />;
    }}
    />
    <Route path="/film/:id" render={(routerProps) => {
      return <FilmDetails
        film={films[routerProps.match.params.id - 1]}
        {...routerProps}
      />;
    }}
    />
    <Redirect from='*' to='/' />
  </Switch>;
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })),
  })),
  genre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick: (selectedGenre) => {
    dispatch(ActionCreator.changeGenre(selectedGenre));
    dispatch(ActionCreator.getFilms(selectedGenre));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
