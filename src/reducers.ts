import {LOAD_RISKS, LOAD_MACHINES, LOAD_OVERALL_RISK} from "./actionTypes";
import {Risk, Machine, Action} from './types';

interface RisksState {
    risks: Risk[]
    overallRisk: number
}

interface MachinesState {
    machines: Machine[]
}

export const initialRisksState = {risks: [], overallRisk: 0};

export const initialMachinesState = {machines: []};

export function risksReducer(state: RisksState, action: Action) {
    switch (action.type) {
        case LOAD_RISKS:
            return {...state, risks: action.payload};
        case LOAD_OVERALL_RISK:
            return {...state, overallRisk: action.payload};
        default:
            return state
    }
}

export function machinesReducer(state: MachinesState, action: Action) {
    switch (action.type) {
        case LOAD_MACHINES:
            return {...state, machines: action.payload};
        default:
            return state
    }
}
