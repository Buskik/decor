"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/admin/users/[id]";
exports.ids = ["pages/api/admin/users/[id]"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  isAdmin: {\n    type: Boolean,\n    required: true,\n    default: false\n  }\n}, {\n  timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLFVBQVUsR0FBRyxJQUFJRCx3REFBSixDQUNqQjtBQUNFRyxFQUFBQSxJQUFJLEVBQUU7QUFBRUMsSUFBQUEsSUFBSSxFQUFFQyxNQUFSO0FBQWdCQyxJQUFBQSxRQUFRLEVBQUU7QUFBMUIsR0FEUjtBQUVFQyxFQUFBQSxLQUFLLEVBQUU7QUFBRUgsSUFBQUEsSUFBSSxFQUFFQyxNQUFSO0FBQWdCQyxJQUFBQSxRQUFRLEVBQUUsSUFBMUI7QUFBZ0NFLElBQUFBLE1BQU0sRUFBRTtBQUF4QyxHQUZUO0FBR0VDLEVBQUFBLFFBQVEsRUFBRTtBQUFFTCxJQUFBQSxJQUFJLEVBQUVDLE1BQVI7QUFBZ0JDLElBQUFBLFFBQVEsRUFBRTtBQUExQixHQUhaO0FBSUVJLEVBQUFBLE9BQU8sRUFBRTtBQUFFTixJQUFBQSxJQUFJLEVBQUVPLE9BQVI7QUFBaUJMLElBQUFBLFFBQVEsRUFBRSxJQUEzQjtBQUFpQ00sSUFBQUEsT0FBTyxFQUFFO0FBQTFDO0FBSlgsQ0FEaUIsRUFPakI7QUFDRUMsRUFBQUEsVUFBVSxFQUFFO0FBRGQsQ0FQaUIsQ0FBbkI7QUFZQSxNQUFNQyxJQUFJLEdBQUdkLDZEQUFBLElBQXdCQSxxREFBQSxDQUFlLE1BQWYsRUFBdUJDLFVBQXZCLENBQXJDO0FBQ0EsaUVBQWVhLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRlY29yLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuICAgIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGlzQWRtaW46IHsgdHlwZTogQm9vbGVhbiwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpO1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJpc0FkbWluIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0aW1lc3RhbXBzIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/User.js\n");

/***/ }),

/***/ "./pages/api/admin/users/[id]/index.js":
/*!*********************************************!*\
  !*** ./pages/api/admin/users/[id]/index.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/auth */ \"./utils/auth.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/User */ \"./models/User.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/db */ \"./utils/db.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__.isAuth, _utils_auth__WEBPACK_IMPORTED_MODULE_1__.isAdmin);\nhandler.get(async (req, res) => {\n  await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect();\n  const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(req.query.id);\n  await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].disconnect();\n  res.send(user);\n});\nhandler.put(async (req, res) => {\n  await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect();\n  const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(req.query.id);\n\n  if (user) {\n    user.isAdmin = Boolean(req.body.isAdmin);\n    await user.save();\n    await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].disconnect();\n    res.send({\n      message: 'Usuário atualizado com sucesso'\n    });\n  } else {\n    await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].disconnect();\n    res.status(404).send({\n      message: 'Usuário não encontrado'\n    });\n  }\n});\nhandler.delete(async (req, res) => {\n  await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect();\n  const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(req.query.id);\n\n  if (user) {\n    await user.remove();\n    await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].disconnect();\n    res.send({\n      message: 'Usuário deletado'\n    });\n  } else {\n    await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].disconnect();\n    res.status(404).send({\n      message: 'Usuário não encontrado'\n    });\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYWRtaW4vdXNlcnMvW2lkXS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUssT0FBTyxHQUFHTCx3REFBRSxFQUFsQjtBQUNBSyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosK0NBQVosRUFBb0JELGdEQUFwQjtBQUVBSSxPQUFPLENBQUNFLEdBQVIsQ0FBWSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDOUIsUUFBTUwseURBQUEsRUFBTjtBQUNBLFFBQU1PLElBQUksR0FBRyxNQUFNUiw2REFBQSxDQUFjSyxHQUFHLENBQUNLLEtBQUosQ0FBVUMsRUFBeEIsQ0FBbkI7QUFDQSxRQUFNViw0REFBQSxFQUFOO0FBQ0FLLEVBQUFBLEdBQUcsQ0FBQ08sSUFBSixDQUFTTCxJQUFUO0FBQ0QsQ0FMRDtBQU9BTixPQUFPLENBQUNZLEdBQVIsQ0FBWSxPQUFPVCxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDOUIsUUFBTUwseURBQUEsRUFBTjtBQUNBLFFBQU1PLElBQUksR0FBRyxNQUFNUiw2REFBQSxDQUFjSyxHQUFHLENBQUNLLEtBQUosQ0FBVUMsRUFBeEIsQ0FBbkI7O0FBQ0EsTUFBSUgsSUFBSixFQUFVO0FBQ1JBLElBQUFBLElBQUksQ0FBQ1YsT0FBTCxHQUFlaUIsT0FBTyxDQUFDVixHQUFHLENBQUNXLElBQUosQ0FBU2xCLE9BQVYsQ0FBdEI7QUFDQSxVQUFNVSxJQUFJLENBQUNTLElBQUwsRUFBTjtBQUNBLFVBQU1oQiw0REFBQSxFQUFOO0FBQ0FLLElBQUFBLEdBQUcsQ0FBQ08sSUFBSixDQUFTO0FBQUVLLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQVQ7QUFDRCxHQUxELE1BS087QUFDTCxVQUFNakIsNERBQUEsRUFBTjtBQUNBSyxJQUFBQSxHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQjtBQUFFSyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNEO0FBQ0YsQ0FaRDtBQWNBaEIsT0FBTyxDQUFDa0IsTUFBUixDQUFlLE9BQU9mLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxRQUFNTCx5REFBQSxFQUFOO0FBQ0EsUUFBTU8sSUFBSSxHQUFHLE1BQU1SLDZEQUFBLENBQWNLLEdBQUcsQ0FBQ0ssS0FBSixDQUFVQyxFQUF4QixDQUFuQjs7QUFDQSxNQUFJSCxJQUFKLEVBQVU7QUFDUixVQUFNQSxJQUFJLENBQUNhLE1BQUwsRUFBTjtBQUNBLFVBQU1wQiw0REFBQSxFQUFOO0FBQ0FLLElBQUFBLEdBQUcsQ0FBQ08sSUFBSixDQUFTO0FBQUVLLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQVQ7QUFDRCxHQUpELE1BSU87QUFDTCxVQUFNakIsNERBQUEsRUFBTjtBQUNBSyxJQUFBQSxHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQjtBQUFFSyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNEO0FBQ0YsQ0FYRDtBQWFBLGlFQUFlaEIsT0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kZWNvci8uL3BhZ2VzL2FwaS9hZG1pbi91c2Vycy9baWRdL2luZGV4LmpzPzk4YTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5jIGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmltcG9ydCB7IGlzQWRtaW4sIGlzQXV0aCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2RlbHMvVXNlcic7XHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9kYic7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcclxuaGFuZGxlci51c2UoaXNBdXRoLCBpc0FkbWluKTtcclxuXHJcbmhhbmRsZXIuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGF3YWl0IGRiLmNvbm5lY3QoKTtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChyZXEucXVlcnkuaWQpO1xyXG4gIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKTtcclxuICByZXMuc2VuZCh1c2VyKTtcclxufSk7XHJcblxyXG5oYW5kbGVyLnB1dChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBhd2FpdCBkYi5jb25uZWN0KCk7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQocmVxLnF1ZXJ5LmlkKTtcclxuICBpZiAodXNlcikge1xyXG4gICAgdXNlci5pc0FkbWluID0gQm9vbGVhbihyZXEuYm9keS5pc0FkbWluKTtcclxuICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xyXG4gICAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gICAgcmVzLnNlbmQoeyBtZXNzYWdlOiAnVXN1w6FyaW8gYXR1YWxpemFkbyBjb20gc3VjZXNzbycgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKTtcclxuICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzc2FnZTogJ1VzdcOhcmlvIG7Do28gZW5jb250cmFkbycgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmhhbmRsZXIuZGVsZXRlKGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGF3YWl0IGRiLmNvbm5lY3QoKTtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChyZXEucXVlcnkuaWQpO1xyXG4gIGlmICh1c2VyKSB7XHJcbiAgICBhd2FpdCB1c2VyLnJlbW92ZSgpO1xyXG4gICAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gICAgcmVzLnNlbmQoeyBtZXNzYWdlOiAnVXN1w6FyaW8gZGVsZXRhZG8nIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhd2FpdCBkYi5kaXNjb25uZWN0KCk7XHJcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc3NhZ2U6ICdVc3XDoXJpbyBuw6NvIGVuY29udHJhZG8nIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsibmMiLCJpc0FkbWluIiwiaXNBdXRoIiwiVXNlciIsImRiIiwiaGFuZGxlciIsInVzZSIsImdldCIsInJlcSIsInJlcyIsImNvbm5lY3QiLCJ1c2VyIiwiZmluZEJ5SWQiLCJxdWVyeSIsImlkIiwiZGlzY29ubmVjdCIsInNlbmQiLCJwdXQiLCJCb29sZWFuIiwiYm9keSIsInNhdmUiLCJtZXNzYWdlIiwic3RhdHVzIiwiZGVsZXRlIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/admin/users/[id]/index.js\n");

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signToken\": () => (/* binding */ signToken),\n/* harmony export */   \"isAuth\": () => (/* binding */ isAuth),\n/* harmony export */   \"isAdmin\": () => (/* binding */ isAdmin)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst signToken = user => {\n  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n    _id: user._id,\n    name: user.name,\n    email: user.email,\n    isAdmin: user.isAdmin\n  }, process.env.JWT_SECRET, {\n    expiresIn: '30d'\n  });\n};\n\nconst isAuth = async (req, res, next) => {\n  const {\n    authorization\n  } = req.headers;\n\n  if (authorization) {\n    const token = authorization.slice(7, authorization.length);\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET, (err, decode) => {\n      if (err) {\n        res.status(401).send({\n          message: 'O token não é válido '\n        });\n      } else {\n        req.user = decode;\n        next();\n      }\n    });\n  } else {\n    res.status(401).send({\n      message: 'O token não foi fornecido'\n    });\n  }\n};\n\nconst isAdmin = async (req, res, next) => {\n  if (req.user.isAdmin) {\n    next();\n  } else {\n    res.status(401).send({\n      message: 'User is not admin'\n    });\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUMsU0FBUyxHQUFJQyxJQUFELElBQVU7QUFDMUIsU0FBT0Ysd0RBQUEsQ0FDTDtBQUNFSSxJQUFBQSxHQUFHLEVBQUVGLElBQUksQ0FBQ0UsR0FEWjtBQUVFQyxJQUFBQSxJQUFJLEVBQUVILElBQUksQ0FBQ0csSUFGYjtBQUdFQyxJQUFBQSxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FIZDtBQUlFQyxJQUFBQSxPQUFPLEVBQUVMLElBQUksQ0FBQ0s7QUFKaEIsR0FESyxFQVFMQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFSUCxFQVNMO0FBQ0VDLElBQUFBLFNBQVMsRUFBRTtBQURiLEdBVEssQ0FBUDtBQWFELENBZEQ7O0FBZUEsTUFBTUMsTUFBTSxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDdkMsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQW9CSCxHQUFHLENBQUNJLE9BQTlCOztBQUNBLE1BQUlELGFBQUosRUFBbUI7QUFDakIsVUFBTUUsS0FBSyxHQUFHRixhQUFhLENBQUNHLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJILGFBQWEsQ0FBQ0ksTUFBckMsQ0FBZDtBQUNBcEIsSUFBQUEsMERBQUEsQ0FBV2tCLEtBQVgsRUFBa0JWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUE5QixFQUEwQyxDQUFDWSxHQUFELEVBQU1DLE1BQU4sS0FBaUI7QUFDekQsVUFBSUQsR0FBSixFQUFTO0FBQ1BSLFFBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFVBQUFBLE9BQU8sRUFBRTtBQUFYLFNBQXJCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xiLFFBQUFBLEdBQUcsQ0FBQ1gsSUFBSixHQUFXcUIsTUFBWDtBQUNBUixRQUFBQSxJQUFJO0FBQ0w7QUFDRixLQVBEO0FBUUQsR0FWRCxNQVVPO0FBQ0xELElBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0Q7QUFDRixDQWZEOztBQWdCQSxNQUFNbkIsT0FBTyxHQUFHLE9BQU9NLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDeEMsTUFBSUYsR0FBRyxDQUFDWCxJQUFKLENBQVNLLE9BQWIsRUFBc0I7QUFDcEJRLElBQUFBLElBQUk7QUFDTCxHQUZELE1BRU87QUFDTEQsSUFBQUEsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckI7QUFDRDtBQUNGLENBTkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRlY29yLy4vdXRpbHMvYXV0aC5qcz9lYjYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmNvbnN0IHNpZ25Ub2tlbiA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKFxyXG4gICAge1xyXG4gICAgICBfaWQ6IHVzZXIuX2lkLFxyXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBpc0FkbWluOiB1c2VyLmlzQWRtaW4sXHJcbiAgICB9LFxyXG5cclxuICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcbiAgICB7XHJcbiAgICAgIGV4cGlyZXNJbjogJzMwZCcsXHJcbiAgICB9XHJcbiAgKTtcclxufTtcclxuY29uc3QgaXNBdXRoID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSByZXEuaGVhZGVycztcclxuICBpZiAoYXV0aG9yaXphdGlvbikge1xyXG4gICAgY29uc3QgdG9rZW4gPSBhdXRob3JpemF0aW9uLnNsaWNlKDcsIGF1dGhvcml6YXRpb24ubGVuZ3RoKTtcclxuICAgIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIChlcnIsIGRlY29kZSkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnTyB0b2tlbiBuw6NvIMOpIHbDoWxpZG8gJyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXEudXNlciA9IGRlY29kZTtcclxuICAgICAgICBuZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdPIHRva2VuIG7Do28gZm9pIGZvcm5lY2lkbycgfSk7XHJcbiAgfVxyXG59O1xyXG5jb25zdCBpc0FkbWluID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgaWYgKHJlcS51c2VyLmlzQWRtaW4pIHtcclxuICAgIG5leHQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVXNlciBpcyBub3QgYWRtaW4nIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHNpZ25Ub2tlbiwgaXNBdXRoLCBpc0FkbWluIH07XHJcbiJdLCJuYW1lcyI6WyJqd3QiLCJzaWduVG9rZW4iLCJ1c2VyIiwic2lnbiIsIl9pZCIsIm5hbWUiLCJlbWFpbCIsImlzQWRtaW4iLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsImlzQXV0aCIsInJlcSIsInJlcyIsIm5leHQiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsInRva2VuIiwic2xpY2UiLCJsZW5ndGgiLCJ2ZXJpZnkiLCJlcnIiLCJkZWNvZGUiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/auth.js\n");

/***/ }),

/***/ "./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\n\nasync function connect() {\n  if (connection.isConnected) {\n    console.log('already connected');\n    return;\n  }\n\n  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {\n    connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);\n\n    if (connection.isConnected === 1) {\n      console.log('use previous connection');\n      return;\n    }\n\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n  }\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n  console.log('new connection');\n  connection.isConnected = db.connections[0].readyState;\n}\n\nasync function disconnect() {\n  if (connection.isConnected) {\n    if (false) {} else {\n      console.log('not disconnected');\n    }\n  }\n}\n\nfunction convertDocToObj(doc) {\n  doc._id = doc._id.toString();\n  doc.createdAt = doc.createdAt.toString();\n  doc.updatedAt = doc.updatedAt.toString();\n  return doc;\n}\n\nconst db = {\n  connect,\n  disconnect,\n  convertDocToObj\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxlQUFlQyxPQUFmLEdBQXlCO0FBQ3ZCLE1BQUlELFVBQVUsQ0FBQ0UsV0FBZixFQUE0QjtBQUMxQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQTtBQUNEOztBQUNELE1BQUlMLG9FQUFBLEdBQThCLENBQWxDLEVBQXFDO0FBQ25DQyxJQUFBQSxVQUFVLENBQUNFLFdBQVgsR0FBeUJILDJFQUF6Qjs7QUFDQSxRQUFJQyxVQUFVLENBQUNFLFdBQVgsS0FBMkIsQ0FBL0IsRUFBa0M7QUFDaENDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0E7QUFDRDs7QUFDRCxVQUFNTCwwREFBQSxFQUFOO0FBQ0Q7O0FBQ0QsUUFBTVUsRUFBRSxHQUFHLE1BQU1WLHVEQUFBLENBQWlCVyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBN0IsQ0FBakI7QUFDQVQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQUosRUFBQUEsVUFBVSxDQUFDRSxXQUFYLEdBQXlCTyxFQUFFLENBQUNKLFdBQUgsQ0FBZSxDQUFmLEVBQWtCRSxVQUEzQztBQUNEOztBQUNELGVBQWVDLFVBQWYsR0FBNEI7QUFDMUIsTUFBSVIsVUFBVSxDQUFDRSxXQUFmLEVBQTRCO0FBQzFCLGVBQTJDLEVBQTNDLE1BR087QUFDTEMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBU1MsZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDNUJBLEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixHQUFVRCxHQUFHLENBQUNDLEdBQUosQ0FBUUMsUUFBUixFQUFWO0FBQ0FGLEVBQUFBLEdBQUcsQ0FBQ0csU0FBSixHQUFnQkgsR0FBRyxDQUFDRyxTQUFKLENBQWNELFFBQWQsRUFBaEI7QUFDQUYsRUFBQUEsR0FBRyxDQUFDSSxTQUFKLEdBQWdCSixHQUFHLENBQUNJLFNBQUosQ0FBY0YsUUFBZCxFQUFoQjtBQUNBLFNBQU9GLEdBQVA7QUFDRDs7QUFFRCxNQUFNTCxFQUFFLEdBQUc7QUFBRVIsRUFBQUEsT0FBRjtBQUFXTyxFQUFBQSxVQUFYO0FBQXVCSyxFQUFBQTtBQUF2QixDQUFYO0FBQ0EsaUVBQWVKLEVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRlY29yLy4vdXRpbHMvZGIuanM/N2NiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgY29uc29sZS5sb2coJ2FscmVhZHkgY29ubmVjdGVkJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxuICAgIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkID09PSAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c2UgcHJldmlvdXMgY29ubmVjdGlvbicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSk7XHJcbiAgY29uc29sZS5sb2coJ25ldyBjb25uZWN0aW9uJyk7XHJcbiAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgYXdhaXQgbW9uZ29vc2UuZGlzY29ubmVjdCgpO1xyXG4gICAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm90IGRpc2Nvbm5lY3RlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydERvY1RvT2JqKGRvYykge1xyXG4gIGRvYy5faWQgPSBkb2MuX2lkLnRvU3RyaW5nKCk7XHJcbiAgZG9jLmNyZWF0ZWRBdCA9IGRvYy5jcmVhdGVkQXQudG9TdHJpbmcoKTtcclxuICBkb2MudXBkYXRlZEF0ID0gZG9jLnVwZGF0ZWRBdC50b1N0cmluZygpO1xyXG4gIHJldHVybiBkb2M7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0geyBjb25uZWN0LCBkaXNjb25uZWN0LCBjb252ZXJ0RG9jVG9PYmogfTtcclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbnMiLCJsZW5ndGgiLCJyZWFkeVN0YXRlIiwiZGlzY29ubmVjdCIsImRiIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29udmVydERvY1RvT2JqIiwiZG9jIiwiX2lkIiwidG9TdHJpbmciLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/admin/users/[id]/index.js"));
module.exports = __webpack_exports__;

})();