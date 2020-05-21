export function filterByType(cocktails, typeArray) {
  return cocktails.filter(cocktail => {
    return typeArray.includes(cocktail.type);
  });
}
