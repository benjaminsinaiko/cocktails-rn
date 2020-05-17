export default function groupByType(cocktails) {
  const grouped = cocktails.reduce((obj, cocktail) => {
    if (!obj[cocktail.type]) {
      obj[cocktail.type] = [cocktail];
    } else {
      obj[cocktail.type] = [...obj[cocktail.type], cocktail];
    }
    return obj;
  }, {});

  return Object.entries(grouped).sort();
}
