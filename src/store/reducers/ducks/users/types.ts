
export enum LoadingState{
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',

}

export interface User {
    id:string,
    name:string
    userName:string
    avatarUrl:string
}

export interface UsersState {
    items:User[]
    loadingState:LoadingState

}