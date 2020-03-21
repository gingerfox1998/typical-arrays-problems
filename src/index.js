
exports.min = function min (array) {
  var minarr = array[0];
    if(array.length != 0) {
        for(i = 1; i < array.length; i++){
            if(array[i] < minarr) {
                minarr = array[i];
            }
        }
    }
    else {
        minarr = 0;
    }
  return minarr;
}

exports.max = function max (array) {
  var maxarr = array[0];
    if(array.length != 0) {
        for(i = 1; i < array.length; i++){
            if(array[i] > maxarr) {
                maxarr = array[i];
            }
        }
    }
    else {
        maxarr = 0;
    }
  return maxarr;
}

exports.avg = function avg (array) {
  var avgarr = 0;
    if(array.length != 0) {
        for(i = 0; i < array.length; i++){
            avgarr = avgarr + array[i];
        }
        avgarr = avgarr / array.length;
    }
    else {
        avgarr = 0;
    }
  return avgarr;
}
