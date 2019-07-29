const SERVER = 'localhost';
const PORT = 4000;
const PROTOCOL = 'http';

const getBaseUrl = () => PROTOCOL + '://' + SERVER + ':' + PORT;

export const getRisks = () => {
    return fetch(getBaseUrl() + '/risks').then(res => res.json());
};

export const clearRisks = () => fetch(getBaseUrl() + '/risks_clear');

export const getMachines = () => {
    return fetch(getBaseUrl() + '/machines').then(res => res.json());
};

export const getOverallRisk = () => {
    return fetch(getBaseUrl() + '/overallrisk').then(res => res.text());
};
