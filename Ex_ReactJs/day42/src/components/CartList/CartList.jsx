import React, { useContext } from 'react';
import { CartContext } from '../../pages/Cart';
import Styles from './cartList.module.scss';
import clsx from 'clsx';

export default function CartList() {
    const context = useContext(CartContext);
    // console.log(context);

    return (
        <>
            <div className="col-md-4">
                <div
                    style={{
                        // borderRadius: '10px',
                        // backgroundColor: '#3498db',
                        margin: '10px auto',
                        width: '80%',
                        border: '1px solid black',
                        padding: '10px',
                    }}
                >
                    <div className="w-full overflow-hidden rounded-lg shadow-xs mt-4">
                        <div className="w-full overflow-x-auto relative">
                            <table className="w-full whitespace-no-wrap">
                                <thead>
                                    <tr className="text-xs font-semibold tracking-wide text-left text-black uppercase border-b bg-indigo-700">
                                        <th className="px-2 py-2">Tên sản phẩm</th>
                                        <th className="px-2 py-2">Số lượng</th>
                                        <th className="px-2 py-2">Còn lại</th>
                                        <th className="px-2 py-2">Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y">
                                    {context.cartState.cartList.map((cart) => {
                                        return (
                                            <tr className="text-gray-700" key={cart._id}>
                                                <td className="px-2 py-2">
                                                    <div className="flex items-center text-sm">
                                                        <p className="font-semibold">{cart.name}</p>
                                                    </div>
                                                </td>
                                                <td className="px-2 py-2 text-sm">{cart.amount ?? 1}</td>
                                                <td className="px-2 py-2 text-sm">{cart.quantity}</td>
                                                <td className="px-2 py-2 text-sm">{cart.price * (cart.amount ?? 1)}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <button
                                // style={{
                                //     background: 'green',
                                //     border: 'none',
                                //     transition: 'background-color 0.3s',
                                //     padding: '10px',
                                //     borderRadius: '5px',
                                // }}
                                className="btn btn-success"
                                onClick={context.handleClickCheckout}
                            >
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
