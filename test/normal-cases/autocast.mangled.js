/** @type {HTMLCanvasElement} */ var canvasA = /** @type {HTMLCanvasElement} */ (document.createElement('canvas'));
/** @type {CanvasRenderingContext2D} */ var contextA = /** @type {CanvasRenderingContext2D} */ (canvasA.getContext('2d'));

/** @type {HTMLElement} */ var canvasB = /** @type {HTMLElement} */ (document.createElement('foo'));
/** @type {?} */ var contextB = (/** @type {HTMLCanvasElement} */ (canvasB)).getContext('foo');

var M = {};

/** @type {HTMLCanvasElement} */ M.canvasA$mangled = /** @type {HTMLCanvasElement} */ (document.createElement('canvas'));
/** @type {CanvasRenderingContext2D} */ M.contextA$mangled = /** @type {CanvasRenderingContext2D} */ (M.canvasA$mangled.getContext('2d'));

/** @type {HTMLElement} */ M.canvasB$mangled = /** @type {HTMLElement} */ (document.createElement('foo'));
/** @type {?} */ M.contextB$mangled = (/** @type {HTMLCanvasElement} */ (M.canvasB$mangled)).getContext('foo');
