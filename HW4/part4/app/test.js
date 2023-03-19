class MonthException {
  constructor(message) {
    this.name = 'MonthException';
    this.message = message;
  }
}

function showMonthName(month) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ];
    
  if (month < 1 || month > 12 || typeof(month) !== "number") {
    throw new MonthException('Incorrect month number');
    }       
 
  return months[month - 1];
}

try {
  console.log(showMonthName(12)); 
  console.log(showMonthName("3")); 
} catch (e) {
  console.log(e.name + ' ' + e.message);
}
