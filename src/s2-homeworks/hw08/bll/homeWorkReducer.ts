import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: any) => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return  (
                action.payload ==='up' ? state.map(el=>({...el})).sort()
                    :
                    state.map(el=>({...el}))
            )
             // need to fix
        }
        case 'check': {

            return state // need to fix
        }
        default:
            return state
    }
}
