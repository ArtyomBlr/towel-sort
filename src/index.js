
module.exports = function towelSort (matrix) {
  if(matrix == undefined || matrix.length === 0) {
    return [];
  } else {
    var n = 0;
    var a = (matrix[n] + "," + matrix[n + 1].reverse() + "," + matrix[n + 2]).split(",");
    return a.map(string => +string);
  }
}
