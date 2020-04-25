import React, { useReducer, useEffect, createContext, useContext } from 'react';
import firebase, { generateUserDocument } from '../utils/firebase';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin': {
      return {
        isLoading: false,
        user: action.payload,
        errorMessage: '',
      };
    }
    case 'signout': {
      return { ...state, isLoading: false, isAnonymous: false };
    }
    case 'add_error': {
      return { ...state, errorMessage: action.payload };
    }
    case 'clear_error_message': {
      return { ...state, errorMessage: '' };
    }
    default:
      return state;
  }
};

const initialState = {
  isLoading: true,
  user: null,
  errorMessage: '',
};

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const user = await generateUserDocument(userAuth);
        dispatch({ type: 'signin', payload: user });
      }
    });
  }, []);

  async function checkUserAuth() {
    const userAuth = await firebase.auth().currentUser;
    if (userAuth) {
      const user = await generateUserDocument(userAuth);
      dispatch({ type: 'signin', payload: user });
    } else {
      await anonymousSignUp();
    }
  }

  async function anonymousSignUp() {
    try {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      await firebase.auth().signInAnonymously();
    } catch (err) {
      dispatch({ type: 'add_error', payload: err });
    }
  }

  return <AuthContext.Provider value={{ state, checkUserAuth }} {...props} />;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
