import React from 'react';
import Header from './Components/Header';

const App = () => {
    const user = {
        name: ' Hoang An',
        email: 'han@gmail.com',
        age: 31,
    };
    return (
        <div>
            <h1>hihi</h1>
            <Header title="Học Lt F8" {...user} />
        </div>
    );
};

export default App;
