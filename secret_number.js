'use strict';

module.exports = function() {
  const randomNum = Math.random() * 1000000 + 1;
  return () => randomNum;
};