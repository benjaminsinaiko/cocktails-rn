import React, { useReducer, useEffect, createContext, useContext } from 'react';
import firebase from '../utils/firebase';

const db = firebase.firestore();

const CocktailsContext = createContext();

function cocktailsReducer(state, action) {
  switch (action.type) {
    case 'request_cocktails': {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case 'fetch_cocktails_success': {
      return {
        ...state,
        isLoading: false,
        cocktails: action.payload,
      };
    }
    case 'fetch_cocktails_error': {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  isLoading: true,
  cocktails: [],
  errorMessage: '',
};

function CocktailsProvider(props) {
  const [state, dispatch] = useReducer(cocktailsReducer, initialState);

  useEffect(() => {
    if (state.cocktails.length === 0) {
      fetchCocktails();
    }
  }, [state.cocktails]);

  async function fetchCocktails() {
    dispatch({ type: 'request_cocktails' });
    try {
      const snapshot = await db.collection('cocktails').get();
      const cocktails = await snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });

      dispatch({ type: 'fetch_cocktails_success', payload: cocktails });
    } catch (err) {
      dispatch({ type: 'fetch_cocktails_error', payload: err });
    }
  }

  return (
    <CocktailsContext.Provider value={{ state, fetchCocktails }} {...props} />
  );
}

function useCocktails() {
  const context = useContext(CocktailsContext);
  if (context === undefined) {
    throw new Error('useCocktails must be used within a Cocktails Provider');
  }
  return context;
}

export { CocktailsProvider, useCocktails };
