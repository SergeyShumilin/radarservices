import React, {useEffect, useReducer} from 'react';
import Table from 'react-bootstrap/Table';
import {getRisks} from "../../api";
import {loadRisks} from "../../actions";
import {risksReducer, initialRisksState} from "../../reducers";
import {Risk} from '../../types';
import {Levels} from './Risks.constants';

export default function Risks() {
    const [state, dispatch] = useReducer(risksReducer, initialRisksState);

    useEffect(() => {
        const risksTimeout = setTimeout(() => {
            getRisks().then(res => dispatch(loadRisks(res)))
        }, 1000);

        return () => {
            clearTimeout(risksTimeout);
        }
    });

    const levels = [Levels.LOW, Levels.MEDIUM, Levels.HIGH];

    return (
        <div className='risks'>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Found On</th>
                    <th>Risk</th>
                    <th>Severity</th>
                </tr>
                </thead>
                <tbody>
                    {state.risks.map((risk: Risk, key: number) => (
                        <tr key={'risk-' + key}>
                            <td>{new Date(risk.foundOn).toLocaleString()}</td>
                            <td>{risk.description}</td>
                            <td>{levels[risk.level]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
