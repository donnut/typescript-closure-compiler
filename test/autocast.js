/** @type {HTMLCanvasElement} */ var canvasA = /** @type {HTMLCanvasElement} */ (document.createElement('canvas'));
/** @type {CanvasRenderingContext2D} */ var contextA = /** @type {CanvasRenderingContext2D} */ (canvasA.getContext('2d'));

/** @type {HTMLElement} */ var canvasB = /** @type {HTMLElement} */ (document.createElement('foo'));
/** @type {?} */ var contextB = (/** @type {HTMLCanvasElement} */ (canvasB)).getContext('foo');
