import React from 'react';
import { AppContext } from '../App';

export default function ComponentA() {
    return (
        <AppContext.Consumer>
            {(context) => {
                console.log(context);
                return <div>ComponentA</div>;
            }}
        </AppContext.Consumer>
    );
}
