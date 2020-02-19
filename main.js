/******************
 * YOUR CODE HERE *
 ******************/

function getFirstItemFrom(list) {
  return list[0];
}

function getLastItemFrom(list) {
  return list[list.length - 1];
}

function getIndex3(list) {
  return list[list.length < 4 ? list.length - 1 : 3];
}

function isLongList(list) {
  return list.length >= 10;
}

function firstItemIsNumber(list) {
  return typeof list[0] === 'number';
}

function secondCharOfThirdString(list) {
  return list[2][1];
}

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
