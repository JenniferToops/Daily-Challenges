/* Training JS #8: Conditional statement--switch
Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+

*/

function howManydays(month){
    switch (month) {
      case 1:
        return 31;
        break;
      case 2:
        return 28;
        break;    
      case 3:
        return 31;
        break;
      case 4:
        return 30;
        break;
      case 5:
        return 31;
        break;
      case 6:
        return 30;
        break;
      case 7:
        return 31;
        break;
      case 8:
        return 31;
        break;
      case 9:
        return 30;
        break;
      case 10:
        return 31;
        break;
      case 11:
        return 30;
        break;
      case 12:
        return 31;
        break;
    }
  }

  function howManydays(month) {
    switch(month) {
      case 2:
        return 28;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30; 
        break;
      default:
        return 31;
    }
  }
  
  function howManydays(month) {
    switch(month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return 31;
          break;
        case 2:
          return 28;
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          return 30;
          break;  
    }
  }