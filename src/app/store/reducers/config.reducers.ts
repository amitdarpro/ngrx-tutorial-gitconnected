import { EConfigActions, ConfigActions } from '../actions/config.actions';
import { IConfigState, initialConfigState } from '../state/config.state';

export const configReducer = (state: IConfigState = initialConfigState, action: ConfigActions) => {
    switch (action.type) {
        case EConfigActions.GetConfigSuccess: {
            return {
                ...state,
                config: action.payload
            }
        }
    
        default: {
            return state;
        }
    }
}