import {userTypes} from './user.types'

export const setCurrentUser = user => ({
    type: userTypes.SetCurrentUser,
    payload: user
})