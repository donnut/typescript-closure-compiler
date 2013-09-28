/** @type {HTMLCanvasElement} */ var canvasA$mangled = /** @type {HTMLCanvasElement} */ (document.createElement('canvas'));
/** @type {CanvasRenderingContext2D} */ var contextA$mangled = /** @type {CanvasRenderingContext2D} */ (canvasA$mangled.getContext('2d'));

/** @type {HTMLElement} */ var canvasB$mangled = /** @type {HTMLElement} */ (document.createElement('foo'));
/** @type {?} */ var contextB$mangled = (/** @type {HTMLCanvasElement} */ (canvasB$mangled)).getContext('foo');
