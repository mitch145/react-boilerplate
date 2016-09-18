import HelloWorld from './hello-world';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <HelloWorld phrase="my new test page"/>,
    document.querySelector('.root')
);
