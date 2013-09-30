var canvasA = document.createElement('canvas');
var contextA = canvasA.getContext('2d');

var canvasB = document.createElement('foo');
var contextB = (<HTMLCanvasElement>canvasB).getContext('foo');

module M {
  var canvasA = document.createElement('canvas');
  var contextA = canvasA.getContext('2d');

  var canvasB = document.createElement('foo');
  var contextB = (<HTMLCanvasElement>canvasB).getContext('foo');
}
