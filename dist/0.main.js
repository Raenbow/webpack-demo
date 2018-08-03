(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addImg = exports.addToDom = exports.login = undefined;

var _users = __webpack_require__(/*! ./users */ "./src/users.js");

var _users2 = _interopRequireDefault(_users);

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function login(username, password) {
    var user = _users2.default[username];

    if (user && user.password === password) {
        return 'User loged in as:' + user.name;
    }

    return 'Invalid username and/or password';
};

var addToDom = exports.addToDom = function addToDom(type, text) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'red';

    var element = (0, _jquery2.default)('<' + type + '>', {
        text: text,
        class: className
    });

    (0, _jquery2.default)('#root').append(element);
};

var addImg = exports.addImg = function addImg(src) {
    var img = (0, _jquery2.default)('<img>', { src: src });

    (0, _jquery2.default)('#root').append(img);
};

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    DiscoBob: {
        password: '1234',
        name: 'Bobby Bobson'
    },
    SassySally: {
        password: 'qwer',
        name: 'Sally Salson'
    },
    HoppyHolly: {
        password: 'asdf',
        name: 'Holly Hopson'
    },
    SaltySuzy: {
        password: 'zxcv',
        name: 'Suzy Sueson'
    }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlcnMuanMiXSwibmFtZXMiOlsibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlciIsInVzZXJzIiwibmFtZSIsImFkZFRvRG9tIiwidHlwZSIsInRleHQiLCJjbGFzc05hbWUiLCJlbGVtZW50IiwiY2xhc3MiLCJhcHBlbmQiLCJhZGRJbWciLCJzcmMiLCJpbWciLCJEaXNjb0JvYiIsIlNhc3N5U2FsbHkiLCJIb3BweUhvbGx5IiwiU2FsdHlTdXp5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLHdCQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQ3pDLFFBQU1DLE9BQU9DLGdCQUFNSCxRQUFOLENBQWI7O0FBRUEsUUFBR0UsUUFBUUEsS0FBS0QsUUFBTCxLQUFrQkEsUUFBN0IsRUFBc0M7QUFDbEMsZUFBTyxzQkFBc0JDLEtBQUtFLElBQWxDO0FBQ0g7O0FBRUQsV0FBTyxrQ0FBUDtBQUNILENBUk07O0FBVUEsSUFBTUMsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBbUM7QUFBQSxRQUF0QkMsU0FBc0IsdUVBQVYsS0FBVTs7QUFDdkQsUUFBTUMsVUFBVSw0QkFBTUgsSUFBTixRQUFlO0FBQzNCQyxrQkFEMkI7QUFFM0JHLGVBQU9GO0FBRm9CLEtBQWYsQ0FBaEI7O0FBS0EsMEJBQUUsT0FBRixFQUFXRyxNQUFYLENBQWtCRixPQUFsQjtBQUNILENBUE07O0FBU0EsSUFBTUcsMEJBQVMsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQVM7QUFDM0IsUUFBTUMsTUFBTSxzQkFBRSxPQUFGLEVBQVcsRUFBRUQsUUFBRixFQUFYLENBQVo7O0FBRUEsMEJBQUUsT0FBRixFQUFXRixNQUFYLENBQWtCRyxHQUFsQjtBQUNILENBSk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDdEJRO0FBQ1hDLGNBQVU7QUFDTmQsa0JBQVUsTUFESjtBQUVORyxjQUFNO0FBRkEsS0FEQztBQUtYWSxnQkFBWTtBQUNSZixrQkFBVSxNQURGO0FBRVJHLGNBQU07QUFGRSxLQUxEO0FBU1hhLGdCQUFZO0FBQ1JoQixrQkFBVSxNQURGO0FBRVJHLGNBQU07QUFGRSxLQVREO0FBYVhjLGVBQVc7QUFDUGpCLGtCQUFVLE1BREg7QUFFUEcsY0FBTTtBQUZDO0FBYkEsQyIsImZpbGUiOiIwLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlcnMgZnJvbSAnLi91c2Vycyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IHVzZXJzW3VzZXJuYW1lXTtcblxuICAgIGlmKHVzZXIgJiYgdXNlci5wYXNzd29yZCA9PT0gcGFzc3dvcmQpe1xuICAgICAgICByZXR1cm4gJ1VzZXIgbG9nZWQgaW4gYXM6JyArIHVzZXIubmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gJ0ludmFsaWQgdXNlcm5hbWUgYW5kL29yIHBhc3N3b3JkJztcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRvRG9tID0gKHR5cGUsIHRleHQsIGNsYXNzTmFtZSA9ICdyZWQnKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9ICQoYDwke3R5cGV9PmAsIHtcbiAgICAgICAgdGV4dCxcbiAgICAgICAgY2xhc3M6IGNsYXNzTmFtZVxuICAgIH0pO1xuXG4gICAgJCgnI3Jvb3QnKS5hcHBlbmQoZWxlbWVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkSW1nID0gKHNyYykgPT4ge1xuICAgIGNvbnN0IGltZyA9ICQoJzxpbWc+JywgeyBzcmMgfSk7XG5cbiAgICAkKCcjcm9vdCcpLmFwcGVuZChpbWcpO1xufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBEaXNjb0JvYjoge1xuICAgICAgICBwYXNzd29yZDogJzEyMzQnLFxuICAgICAgICBuYW1lOiAnQm9iYnkgQm9ic29uJ1xuICAgIH0sXG4gICAgU2Fzc3lTYWxseToge1xuICAgICAgICBwYXNzd29yZDogJ3F3ZXInLFxuICAgICAgICBuYW1lOiAnU2FsbHkgU2Fsc29uJ1xuICAgIH0sXG4gICAgSG9wcHlIb2xseToge1xuICAgICAgICBwYXNzd29yZDogJ2FzZGYnLFxuICAgICAgICBuYW1lOiAnSG9sbHkgSG9wc29uJ1xuICAgIH0sXG4gICAgU2FsdHlTdXp5OiB7XG4gICAgICAgIHBhc3N3b3JkOiAnenhjdicsXG4gICAgICAgIG5hbWU6ICdTdXp5IFN1ZXNvbidcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==