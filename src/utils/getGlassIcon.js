export default function getGlassIcon(glassName) {
  switch (glassName.toLowerCase()) {
    case 'beer':
      return require('../icons/beer.png');
    case 'champagne':
    case 'flute':
      return require('../icons/flute.png');
    case 'cocktail':
      return require('../icons/cocktail.png');
    case 'collins':
    case 'chimney':
    case 'zombie':
      return require('../icons/collins.png');
    case 'fizz':
    case 'coupe':
      return require('../icons/coupe.png');
    case 'highball':
      return require('../icons/highball.png');
    case 'hurricane':
      return require('../icons/hurricane.png');
    case 'margarita':
      return require('../icons/margarita.png');
    case 'rocks':
    case 'double rocks':
      return require('../icons/rocks.png');
    case 'port':
    case 'sour':
    case 'wine':
      return require('../icons/wine.png');

    default:
      return require('../icons/other.png');
  }
}
