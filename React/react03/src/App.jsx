import React from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

export const AppContext = React.createContext();
console.log(AppContext);
const App = () => {
    const data = {
        name: 'Ha',
        email: 'ha@example.com',
    };
    return (
        <AppContext.Provider value={data}>
            <ComponentA />
            <ComponentB />
        </AppContext.Provider>
    );
};

export default App;
