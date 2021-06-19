import {AuthState} from './AuthContext';

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'singIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'NoUserName',
      };

    default:
      return state;
  }
};

type AuthAction = {type: 'singIn'};
