import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function ComponentB() {
    const context = useContext(AppContext);
    return <div>ComponentB</div>;
}
