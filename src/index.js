
exports.min = function min (array) {
  var minarr = array[0];
    for(i = 1; i < array.length; i++){
        if(array[i] < array[i - 1]) {
            minarr = array[i];
        }
    }
  return minarr;
}

exports.max = function max (array) {
  var maxarr = array[0];
    for(i = 1; i < array.length; i++){
        if(array[i] > array[i - 1]) {
            maxarr = array[i];
        }
    }
  return maxarr;
}

exports.avg = function avg (array) {
  var avgarr = 0;
    for(i = 0; i < array.length; i++){
        avgarr = avgarr + array[i];
    }
    avgarr = avgarr / (array.length - 1);
  return avgarr;
}
