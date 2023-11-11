import React, { useEffect, useLayoutEffect, useReducer, useRef, useCallback } from 'react';
import Form from '../../components/Input/Input';
import { ruleConfig } from '../../config/ruleConfig';
import { handleCheck } from '../../helpers/checkHelper';
import { reduce } from './reducer';
import { formValidate } from '../../validation/formValidation';
import { create } from '../../utils/randomNumber';
import TableResult from '../../components/Table/Table';
import { setItem, getItem, removeItem } from '../../utils/localStorageUtil';
import { customToast } from '../../utils/toastUtils';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import _debounce from 'lodash/debounce';
import { Button, ButtonGroup, useColorMode } from '@chakra-ui/react';

export default function HomePage() {
    const { colorMode, toggleColorMode } = useColorMode();
    const playRef = useRef({
        correctResult: create(),
        maxTurn: ruleConfig.MAX_TURN,
        roundHistory: [],
    });
    console.log(playRef.current.correctResult);

    useLayoutEffect(() => {
        let dataGetItemHistory = [];
        try {
            const item = getItem('history');
            if (Array.isArray(item)) {
                dataGetItemHistory = getItem('history');
            }
            const initialState = { ...playRef.current.initialState };
            initialState.history = dataGetItemHistory;

            dispatch({
                type: 'historyData/set',
                payload: dataGetItemHistory,
            });
        } catch (error) {
            return { ...playRef.current.initialState };
        }
    }, []);

    const [state, dispatch] = useReducer(reduce, {
        input: '',
        table: '',
        remainTurn: ruleConfig.MAX_TURN,
        history: [],
    });
    // console.log(state);

    const handleOnchange = (value) => {
        const check = formValidate(value);
        if (check) {
            dispatch({
                type: 'numberInput/change',
                payload: value,
            });
        }
    };

    const newRound = () => {
        playRef.current.correctResult = create();
        dispatch({
            type: 'round/set',
            payload: {
                remainTurn: playRef.current.maxTurn,
                input: '',
            },
        });
    };

    const handleOnkeyDownInput = (key) => {
        if (key == 'ArrowDown') {
            handleOnchange(+state.input - 1);
        } else if (key == 'ArrowUp') {
            handleOnchange(+state.input + 1);
        }
    };

    const handleOnSubmit = useCallback(
        _debounce(() => {
            const check = formValidate(state.input);
            // console.log(state.input);
            if (check && state.remainTurn > 0 && state.input) {
                const result = handleCheck(playRef.current.correctResult, +state.input);
                const answer = {
                    number: state.input,
                };
                if (result === true) {
                    customToast(' 🙂 Bạn đoán đúng ! Chúc mừng');
                    answer.isCorrect = true;
                    dispatch({
                        type: 'round/set',
                        payload: {
                            remainTurn: 0,
                        },
                    });
                } else {
                    customToast(result);
                    dispatch({
                        type: 'remainTurn/decrement',
                    });
                }

                playRef.current.roundHistory.push(answer);
            } else if (state.remainTurn <= 0) {
                newRound();
            } else {
                customToast(' 👊 Vui lòng nhập đúng số');
            }
        }, 200),
        [state.remainTurn, state.input],
    );

    useEffect(() => {
        customToast(' 🤪 Chào mừng bạn đã đến với trò chơi!');
    }, []);

    useEffect(() => {
        if (state.remainTurn <= 0) {
            const historyUpdate = [playRef.current.roundHistory, ...state.history];
            setItem('history', historyUpdate);
            dispatch({
                type: 'historyData/set',
                payload: historyUpdate,
            });
            playRef.current.roundHistory = [];
        }
    }, [state.remainTurn]);

    const handleResetTable = () => {
        console.log(state.history);
        dispatch({
            type: 'historyData/set',
            payload: playRef.current.initialState.history,
        });
        removeItem('history');
    };

    return (
        <>
            <div>
                <Button onClick={toggleColorMode} colorScheme="teal" size="sm">
                    {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
                </Button>
                <div style={{ fontSize: '2rem', margin: '10px 0px' }}>
                    Bạn cần tìm kiếm số từ 1 -&gt; {ruleConfig.MAX_NUMBER}
                </div>
                <div style={{ fontSize: '1.5rem', margin: '10px 0px' }}>
                    Số lượt còn lai {state.remainTurn}/{playRef.current.maxTurn}
                </div>

                {state.history.length > 0 ? (
                    <TableResult value={state.history} handleResetTable={handleResetTable} />
                ) : (
                    <></>
                )}
                <Form
                    value={state.input}
                    onChange={handleOnchange}
                    onSubmit={handleOnSubmit}
                    isOutOfTurn={state.remainTurn <= 0}
                    onkeyDownInput={handleOnkeyDownInput}
                />
            </div>
        </>
    );
}
