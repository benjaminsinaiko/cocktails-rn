import { useEffect, useState } from 'react';

import { useCocktails } from '../contexts/cocktailsContext';

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const useRandomCocktail = () => {
  const { state } = useCocktails();
  const { cocktails } = state;
  const [randomCocktailId, setRandomCocktailId] = useState(null);

  useEffect(() => {
    if (cocktails.length > 0) {
      const random = pickRandom(cocktails);
      setRandomCocktailId(random.id);
    }
  }, [cocktails]);

  return randomCocktailId;
};

export default useRandomCocktail;

export default function pickRandomCocktail() {}
