import React, { Component } from 'react';

export default class Product extends Component {
    constructor() {
        super();
        console.log('1.Constructor');
    }

    componentDidMount = () => {
        console.log('3.ComponentDidMount');
    };

    componentDidUpdate = () => {
        console.log('4.ComponentDidUpdate');
    };

    componentWillUnmount = () => {
        console.log('5.ComponentWillUnMount');
    };
    handleClick = () => {
        this.setState((prev) => ({
            count: prev.count + 1,
        }));
    };
    render() {
        console.log('2. render');
        return <div>Product</div>;
    }
}

/*
Vòng đời Component:
-> Được tạo ra -> Sử dụng -> Kết thúc

Giai đoạn khởi tạo:
1. Constructor
2. Render lần 1
3. Component DidMount
*/
