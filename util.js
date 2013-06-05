/**
 *  C4Q Intro to Javascript - misc utility library
 *
 *  @author Ben Gundersen
 *  @version 1.0
 */

var square = function(n) {
  return n * n;
}

var map = function(iter, f) {
  var result = [];
  for(var i in iter) {
    result.push(f(iter[i]));
  }
  return result;
}

function assert(condition, description) {
   var li = document.createElement('li');
   li.className = condition ? 'pass' : 'fail';
   li.appendChild( document.createTextNode(description) );
   document.getElementById('results').appendChild(li);
}

var walk_the_dom = function walk(node, f) {
  f(node);
  node = node.firstChild;
  while(node) {
    walk(node, f);
    node = node.nextSibling;
  }
}
