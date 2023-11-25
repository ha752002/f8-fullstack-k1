import { memo } from 'react';

const Content = () => {
    console.log('render');
    return (
        <div>
            <h2>hehehe</h2>
        </div>
    );
};
export default memo(Content);
// higher order component(HOC)
// memo chỉ render khi props thay đổi
