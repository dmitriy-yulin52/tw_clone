
export enum LoadingState{
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',

}

export interface Tag {
    id:string,
    fullName:string
    userName:string
    count:number
}

export interface TagsState {
    items:Tag[]
    loadingState:LoadingState

}