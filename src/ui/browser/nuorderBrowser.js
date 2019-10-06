import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';
import reactHydrator from 'lambchop/universal-rendering/reactHydrator';
import App from '../app';

const cookiesInstance = new Cookies();

reactHydrator(
  () => {
    return (
      <BrowserRouter>
        <Route path="/*">
          {({ location, history }) => (
            <App
              pageData={window.SSR_BRIDGE_DATA}
              location={location}
              history={history}
              cookies={cookiesInstance.getAll()}
            />
          )}
        </Route>
      </BrowserRouter>
    );
  }, { includeTrackingPixel: false }
);
