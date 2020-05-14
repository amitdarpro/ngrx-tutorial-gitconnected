import { EUserActions, UserActions } from '../actions/user.actions';
import { IUserState, initialUserState } from '../state/user.state';

export const userReducer = (state: IUserState = initialUserState, action: UserActions): IUserState => {

    switch (action.type) {
        case EUserActions.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }

        case EUserActions.GetUserSuccess: {
            return {
                ...state,
                selectedUser: action.payload
            };
        }

        default: {
            return state
        }
    }
}
