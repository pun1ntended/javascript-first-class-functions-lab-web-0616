function countdown(callback) {
  setTimeout(callback, 2000)
}

function createMultiplier(multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  }
}

function multiplier(val_1, val_2) {
  return val_1 * val_2

}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);



