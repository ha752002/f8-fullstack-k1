import React, { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';
import Form from '../../components/Input/Input';
import { ruleConfig } from '../../config/ruleConfig';
import { handleCheck } from '../../helpers/checkHelper';
import { reduce } from './reducer';
import { formValidate } from '../../validation/formValidation';
import { toast } from 'react-toastify';
import { create } from '../../utils/randomNumber';
import TableResult from '../../components/Table/Table';
import { setItem, getItem } from '../../utils/localStorageUtil';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, useColorMode } from '@chakra-ui/react';
export default function HomePage() {
    const { colorMode, toggleColorMode } = useColorMode();
    const playRef = useRef({
        correctResult: create(),
        maxTurn: ruleConfig.MAX_TURN,
        roundHistory: [],
        initialState: { input: '', table: '', remainTurn: ruleConfig.MAX_TURN, history: [] },
    });
    console.log(playRef.current.correctResult);
    // remainTurn : so luot con lai
    const initState = () => {
        let dataGetItemHistory = [];
        try {
            const item = getItem('history');
            if (Array.isArray(item)) {
                dataGetItemHistory = getItem('history');
            }
            const initialState = { ...playRef.current.initialState };
            initialState.history = dataGetItemHistory;
            return initialState;
        } catch (error) {
            return { ...playRef.current.initialState };
        }
    };

    const [state, dispatch] = useReducer(reduce, initState());
    // console.log(state);
    const handleOnchange = (value) => {
        const check = formValidate(value);
        if (check) {
            dispatch({
                type: 'numberInput/change',
                payload: value,
            });
        } else {
            toast.info('Bạn phải nhập số từ 1 -> 99');
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
    const handleOnSubmit = () => {
        const check = formValidate(state.input);
        // console.log(state.input);
        if (check && state.remainTurn > 0 && state.input) {
            const result = handleCheck(playRef.current.correctResult, +state.input);
            const answer = {
                number: state.input,
            };
            if (result === true) {
                toast.success('Bạn đoán đúng ! Bạn là nhất:)))');
                answer.isCorrect = true;
                dispatch({
                    type: 'round/set',
                    payload: {
                        remainTurn: 0,
                    },
                });
            } else {
                toast.warning(result);
                dispatch({
                    type: 'remainTurn/decrement',
                });
            }

            playRef.current.roundHistory.push(answer);
        } else if (state.remainTurn <= 0) {
            newRound();
        } else {
            toast.warning('Vui lòng nhập đúng số');
        }
    };

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

    return (
        <>
            <div>
                <Button onClick={toggleColorMode} colorScheme="teal" size="sm">
                    {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
                </Button>
                <div style={{ fontSize: '1.5rem', margin: '10px 0px' }}>
                    số lượt còn lai {state.remainTurn}/{playRef.current.maxTurn}
                </div>

                {state.history.length > 0 ? <TableResult value={state.history} /> : <></>}
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
