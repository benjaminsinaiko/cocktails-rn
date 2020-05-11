import { useCallback } from 'react';

import { useCocktails } from '../contexts/cocktailsContext';

export default function useRandomCocktail() {
  const { state } = useCocktails();
  const { cocktails } = state;

  const pickRandomId = useCallback(() => {
    if (cocktails.length > 0) {
      const randomCocktail =
        cocktails[Math.floor(Math.random() * cocktails.length)];
      return randomCocktail.id;
    }
  }, [cocktails]);

  return pickRandomId;
}
