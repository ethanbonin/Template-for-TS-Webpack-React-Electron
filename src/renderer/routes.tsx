import { Route, Switch } from 'react-router';
import * as React from 'react';
import { routes } from '@/renderer/constants/routes';

import FirstPage from '@/renderer/containers/first-page';
import SecondPage from '@/renderer/containers/second-page';

const generalRoutes = [
    <Route
        exact
        path={routes.index}
        key={routes.index}
        component={FirstPage}
    />,
    <Route
        exact
        path={routes.secondPage}
        key={routes.secondPage}
        component={SecondPage}
    />,
];

export default <Switch>{generalRoutes}</Switch>;
