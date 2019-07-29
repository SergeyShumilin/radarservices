import React, {useEffect, useReducer} from 'react';
import Table from 'react-bootstrap/Table';
import {getMachines} from "../../api";
import {loadMachines} from "../../actions";
import {machinesReducer, initialMachinesState} from "../../reducers";
import {Machine} from '../../types';

export default function Machines() {
    const [state, dispatch] = useReducer(machinesReducer, initialMachinesState);

    useEffect(() => {
        getMachines().then(res => dispatch(loadMachines(res)));
    }, []);

    return (
        <div className='machines'>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>IP</th>
                    <th>Name</th>
                    <th>OS</th>
                </tr>
                </thead>
                <tbody>
                {state.machines.map((machine: Machine, key: number) => (
                    <tr key={'machine-' + key}>
                        <td>{machine.ip}</td>
                        <td>{machine.name}</td>
                        <td>{machine.os}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}
