import React from 'react';
import { useSelect } from '../core/useSelector';

export default function Message() {
    const { state } = useSelect();

    return <div>{state.count >= 10 ? <h3>kết quả tốt</h3> : <h3>kết quả không tốt</h3>}</div>;
}
