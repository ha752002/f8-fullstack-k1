//Class Component
import React, { Component } from 'react';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            todo: [],
        };
    }

    handleIncrement = () => {
        //Cập nhật lại state => dùng phương thức setState có sẵn trong class Component
        this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    getTodo = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const todo = await res.json();
        this.setState({
            todo,
        });
    };

    componentDidMount() {
        //Chỉ 1 lần khi component được nạp vào DOM
        this.getTodo();
    }

    render() {
        console.log('re-render');
        const { count, todo } = this.state;
        return (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleIncrement}>+</button>
                <hr />
                {todo.map(({ id, title }) => (
                    <h3 key={id}>{title}</h3>
                ))}
            </div>
        );
    }
}

/*
State = Trạng thái
- Hoạt động trong nội bộ component
- Khi state thay đổi => component sẽ tự động re-render
- Không thay đổi trực tiếp state mà cần phải thông qua hàm có sẵn của React
*/
