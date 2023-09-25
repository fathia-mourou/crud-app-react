const compareDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
  
    if (date1 < date2) {
      return -1
    } else if (date1 > date2) {
      return 1
    } else {
      return 0
    }
  };
  module.exports = compareDates