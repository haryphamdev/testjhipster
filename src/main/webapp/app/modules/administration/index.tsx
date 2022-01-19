import React from 'react';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import Docs from './docs/docs';

const Routes = ({ match }) => (
  <div>
    <ErrorBoundaryRoute exact path={`${match.url}/docs`} component={Docs} />
  </div>
);

export default Routes;
