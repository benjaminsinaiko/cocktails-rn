export default function displayFraction(number) {
  const int = Math.trunc(number);
  const dec = number - int;

  function getFraction(decimal) {
    switch (decimal) {
      case 0:
        return '';
      case 0.125:
        return '1/8';
      case 0.167:
        return '1/6';
      case 0.2:
        return '1/5';
      case 0.25:
        return '1/4';
      case 0.333:
        return '1/3';
      case 0.5:
        return '1/2';
      case 0.75:
        return '3/4';
      default:
        return decimal;
    }
  }

  const fraction = getFraction(dec);

  if (number > 1) {
    return `${int} ${fraction}`;
  } else {
    return fraction;
  }
}
