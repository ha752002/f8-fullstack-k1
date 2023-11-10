import React from 'react';
import clsx from 'clsx';
import Styles from './InputLayout.module.scss';

export default function Form(props) {
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    props.onSubmit();
                }}
            >
                <div className={clsx(Styles.form_group)} style={{ margin: '10px 0px' }}>
                    <div role="group" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label htmlFor="number">Hãy thử nhập một số</label>
                        <input
                            onChange={(e) => {
                                props.onChange(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                props.onkeyDownInput(e.key);
                            }}
                            className={clsx(Styles.custom_input)}
                            value={props.value}
                            type="text"
                            autoComplete="off"
                            name="number"
                            placeholder="Thử một số"
                            id="number"
                        />
                    </div>
                    <button className={clsx(Styles.btn)} type="submit">
                        {props.isOutOfTurn ? 'Chơi lại' : 'Kiểm tra'}
                    </button>
                </div>
            </form>
        </>
    );
}
