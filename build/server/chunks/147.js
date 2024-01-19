"use strict";
exports.id = 147;
exports.ids = [147];
exports.modules = {

/***/ 147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(492);


const Hero = ()=>{
    const hero = _index_json__WEBPACK_IMPORTED_MODULE_1__/* .hero */ .rP;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "h-screen bg-white overflow-x-hidden",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "px-8 lg:px-32 flex flex-col justify-center align-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                    className: "text-6xl lg:text-6xl mt-64 font-bold tracking-wide",
                    children: [
                        "Hi\uD83D\uDC4B\uD83C\uDFFC, my name is",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "ml-3 font-bold whitespace-nowrap bg-black bg-clip-text text-orange-800",
                            children: hero.name
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "lg:text-4xl font-bold tracking-wide mt-4",
                    children: hero.subtitle
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "#About",
                    className: "text-1xl font-bold p-0.5 mt-6 w-32 border-2 border-black",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-white align-middle",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "block text-center py-0.5 px-2 font-semibold text-orange-700",
                            children: "Know more"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ })

};
;