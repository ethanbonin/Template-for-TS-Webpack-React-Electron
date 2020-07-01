import React from 'react';
import routes from '@/renderer/routes';

export interface AppProps {}

const App = (props: AppProps) => {
    return <>{routes}</>;
};

export default App;
