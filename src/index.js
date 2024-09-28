module.exports = function reverse (n) {
        let snm = n.toString();
        let result = '';
        let i = snm.length - 1;
        while (i >= 0) {
          result = result + snm[i];
          i--;
        }
        return parseInt(result);
      
      
}
