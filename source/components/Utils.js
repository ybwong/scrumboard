var cardPosition = [1, 0];
var observer = null;

function emitChange() {
  observer(cardPosition);
}

exports.observe = function (o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

exports.moveCard = function (toX, toY) {
  cardPosition = [toX, toY];
  emitChange();
}