import React from 'react';
import ReactDOM from 'react-dom/client';
import BodyComponent from './src/components/BodyComponent';

const App = () => {
    return (
        <>
            <BodyComponent/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);