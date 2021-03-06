import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Avatar from '../avatar/avatar';

import {User} from "../../types";
import {getUser} from '../../reducer/selectors';

interface Props {
  user: User;
}

const Header = (props: Props): React.SFC => {
  const {user} = props;

  return <React.Fragment>
    <h1 className="visually-hidden">WTW</h1>
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link className="logo__link" to="/">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <Avatar user={user}/>
    </header>
  </React.Fragment>;
};

const mapStateToProps = (state, ownProps): object => Object.assign({}, ownProps, {
  user: getUser(state),
});

export {Header};
export default connect(mapStateToProps, null)(Header);
