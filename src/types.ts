export interface Risk {
    description: string
    foundOn: number
    level: number
}

export interface Machine {
    ip: string
    name: string
    os: string
}

export interface Action {
    type: string,
    payload: any
}
