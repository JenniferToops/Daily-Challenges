//Basic Mathematical Operations

function basicOp(operation, value1, value2) {
    switch (operation) {
      case ('+'):
        return value1 + value2
        break;
      case ('-'):
        return value1 - value2
        break;
      case ('*'):
        return value1 * value2
        break;
      case ('/'):
        if (value2 > 0 || value2 < 0) {
        return value1 / value2
        } else {
        return "Please select a second value greater than or less than 0"
        }
        break;
      default:
        break;
    }
    }

    //century from a year
function century(year) {
  if ((year <= 99) && (year > 0)) {
    return 1
  } else if (year > 0 && (year % 100 === 0)) { 
    strCentury = String(year).slice(0,-2)
    return Number(strCentury);
  } else if (year > 0) { 
    let yearString = String(year);
    let yearStringSmol = yearString.slice(0, -2);
    let yearCentury = Number(yearStringSmol) + 1;
    return yearCentury;
  } else {
    return "Please select a positive integer greater than 0"
  }
}