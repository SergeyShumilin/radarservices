import {LOAD_RISKS, LOAD_MACHINES, LOAD_OVERALL_RISK} from "./actionTypes";
import {Risk, Machine} from './types';

export const loadRisks = (payload: Risk[]) => ({
    type: LOAD_RISKS,
    payload,
});

export const loadMachines = (payload: Machine[]) => ({
    type: LOAD_MACHINES,
    payload,
});

export const loadOverallRisk = (payload: number) => ({
    type: LOAD_OVERALL_RISK,
    payload,
});
