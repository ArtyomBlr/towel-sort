
module.exports = function towelSort (matrix) {
  if(matrix == undefined || matrix.length === 0) {
    return [];
  } else if(matrix.length === 1){
    var n = 0;
    var a = (matrix[n]).split(",");
    return a.map(string => +string);
  } else if(matrix.length === 2){
    var n = 0;
    var a = (matrix[n] + "," + matrix[n + 1].reverse()).split(",");
    return a.map(string => +string);
  } else if(matrix.length === 3){
    var n = 0;
    var a = (matrix[n] + "," + matrix[n + 1].reverse() + "," + matrix[n + 2]).split(",");
    return a.map(string => +string);
  } else if(matrix.length === 4){
    var n = 0;
    var a = (matrix[n] + "," + matrix[n + 1].reverse() + "," + matrix[n + 2] + "," + matrix[n + 3].reverse()).split(",");
    return a.map(string => +string);
  }
}

  /*else {
    var n = 0;
    var a = (matrix[n] + "," + matrix[n + 1].reverse() + "," + matrix[n + 2]).split(",");
    return a.map(string => +string);
  }*/
