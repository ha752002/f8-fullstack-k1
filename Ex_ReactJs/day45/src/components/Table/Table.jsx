import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import clsx from 'clsx';
import Styles from './TableLayout.module.scss';
import { ruleConfig } from '../../config/ruleConfig';
const TableResult = (props) => {
    console.log(props.value);
    const correctAnswerNumber = props.value.filter((item) => {
        return item.some((childItem) => {
            return childItem.isCorrect === true;
        });
    }).length;
    const correctPercent = ((correctAnswerNumber * 100) / props.value.length).toFixed(2);
    const calPercent = (item) => {
        const correctIndex = item.findIndex((val) => {
            return val.isCorrect === true;
        });
        if (correctIndex == -1) {
            return 0;
        }
        const percent = (((ruleConfig.MAX_TURN - correctIndex) * 100) / ruleConfig.MAX_TURN).toFixed(2);
        return percent;
    };
    return (
        <>
            <Button onClick={props.handleResetTable} colorScheme="teal" size="sm">
                <DeleteIcon />
            </Button>
            <div
                style={{
                    // display: 'none',
                    padding: '10px 10px',
                    border: '1px solid black',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        padding: '10px 10px',
                        border: '1px solid black',
                    }}
                >
                    {props.value.map((item, index) => (
                        <div
                            key={index}
                            className="chakra-table__container "
                            style={{ flex: '0 0 100%', width: '100%', padding: '16px 19px', border: '1px solid' }}
                        >
                            <Table variant="simple" className="chakra-table">
                                <Thead>
                                    <Tr className={clsx(Styles.tr_Thead)}>
                                        <Th style={{ textAlign: 'center' }}>Số lần nhập</Th>
                                        <Th style={{ textAlign: 'center' }}>Số nhập vào</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {item.map((childItem, childIndex) => (
                                        <Tr key={childIndex}>
                                            <Td
                                                className={clsx(Styles.td_left)}
                                                style={{ width: '30%', textAlign: 'center', padding: '7px' }}
                                            >
                                                <p className="chakra-text css-1f1x3b8">{childIndex + 1}</p>
                                                <hr
                                                    aria-orientation="horizontal"
                                                    className="chakra-divider"
                                                    style={{ borderTop: ' 2px solid #55ac5778' }}
                                                />
                                            </Td>
                                            <Td
                                                className={clsx(Styles.td_right)}
                                                style={{ width: '70%', textAlign: 'center', padding: '7px' }}
                                            >
                                                <p
                                                    className="chakra-text css-1f1x3b8"
                                                    style={
                                                        childItem.isCorrect === true
                                                            ? { color: 'green' }
                                                            : { color: 'red' }
                                                    }
                                                >
                                                    {childItem.number}
                                                </p>
                                                <hr
                                                    aria-orientation="horizontal"
                                                    style={{ borderTop: ' 2px solid #55ac5778' }}
                                                    className="chakra-divider"
                                                />
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                            <div className="table-captions" style={{ transform: 'translateX(30%)' }}>
                                <p className="css-9o0p9n">
                                    Lần chơi thứ: {props.value.length - index} / {props.value.length}
                                </p>
                                <p className="css-9o0p9n">Tỉ lệ:{calPercent(item)}%</p>
                                <p className="css-9o0p9n">
                                    Số lần nhập: <span className="chakra-text css-abyqem">{item.length}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="css-1yh1pn8">Tỷ lệ đúng: {correctPercent}%</p>
            </div>
        </>
    );
};

export default TableResult;
