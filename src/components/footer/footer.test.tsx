import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import Footer from './footer';

describe(`Footer`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Footer/>
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
