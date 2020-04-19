import React from 'react';
import ReactDOM from 'react-dom';

import List from './containers/List';

import 'bootswatch/dist/flatly/bootstrap.min.css';

const App = () => (
    <>
        <nav className="navbar navbar-dark bg-dark border-bottom border-white">
            <a className="navbar-brand" href="/">
                MovieApp
            </a>
        </nav>
        <main className="bg-dark">
            <div className="container">
                <List />
            </div>
        </main>
    </>
);

ReactDOM.render(<App />, document.getElementById('root'));
