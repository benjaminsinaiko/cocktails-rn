export default function getGlassIcon(glassName) {
  switch (glassName.toLowerCase()) {
    case 'beer':
      return require('../icons/beer.png');
    case 'champagne':
      return require('../icons/champagne.png');
    case 'cocktail':
      return require('../icons/cocktail.png');
    case 'collins':
      return require('../icons/collins.png');
    case 'coupe':
      return require('../icons/coupe.png');
    case 'highball':
      return require('../icons/highball.png');
    case 'hurricane':
      return require('../icons/hurricane.png');
    case 'margarita':
      return require('../icons/margarita.png');
    case 'rocks':
      return require('../icons/rocks.png');

    default:
      return require('../icons/other.png');
  }
}
