// This function is supposed to add two numbers, but it has a bug!
function add(a, b) {
  return a - b; // BUG: Should be a + b
}
module.exports = add;
