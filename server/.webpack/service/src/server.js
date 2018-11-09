(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/auth.js":
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/*! exports provided: authenticate, getUser, encryptPassword, generateToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authenticate\", function() { return authenticate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"encryptPassword\", function() { return encryptPassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateToken\", function() { return generateToken; });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_user_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/user/UserModel */ \"./src/modules/user/UserModel.js\");\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET;\nasync function authenticate(plainPassword, encryptedPassword) {\n  return bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.compare(plainPassword, encryptedPassword);\n}\nasync function getUser(authorization) {\n  if (!authorization) return null;\n\n  try {\n    const token = authorization.substring(7);\n    const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(token, JWT_SECRET);\n    const user = await _modules_user_UserModel__WEBPACK_IMPORTED_MODULE_2__[\"UserModel\"].findById(decodedToken.id);\n    user.token = token;\n    return user;\n  } catch (error) {\n    return null;\n  }\n}\nasync function encryptPassword(password) {\n  return bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.hash(password, 10);\n}\nfunction generateToken(user) {\n  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n    id: user._id\n  }, JWT_SECRET);\n}\n\n//# sourceURL=webpack:///./src/auth.js?");

/***/ }),

/***/ "./src/database.js":
/*!*************************!*\
  !*** ./src/database.js ***!
  \*************************/
/*! exports provided: connectDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectDatabase\", function() { return connectDatabase; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction connectDatabase() {\n  return new Promise((resolve, reject) => {\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect('mongodb://localhost:27018/database');\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('error', reject).on('open', () => resolve(mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection)).on('close', () => console.log('🚫 Database connection closed.'));\n  });\n}\n\n//# sourceURL=webpack:///./src/database.js?");

/***/ }),

/***/ "./src/modules/resolvers.js":
/*!**********************************!*\
  !*** ./src/modules/resolvers.js ***!
  \**********************************/
/*! exports provided: prepare, authResolver, withAuth, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prepare\", function() { return prepare; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authResolver\", function() { return authResolver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withAuth\", function() { return withAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return resolvers; });\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-lambda */ \"apollo-server-lambda\");\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_iso_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-iso-date */ \"graphql-iso-date\");\n/* harmony import */ var graphql_iso_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_iso_date__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-resolvers */ \"graphql-resolvers\");\n/* harmony import */ var graphql_resolvers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_resolvers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _user_UserType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/UserType */ \"./src/modules/user/UserType.js\");\n/* harmony import */ var _todo_TodoType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo/TodoType */ \"./src/modules/todo/TodoType.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction prepare(instance) {\n  instance.id = instance._id.toString();\n  return instance;\n}\nfunction authResolver(root, args, {\n  user\n}) {\n  if (user) {\n    return graphql_resolvers__WEBPACK_IMPORTED_MODULE_2__[\"skip\"];\n  } else {\n    throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__[\"ForbiddenError\"]('User not authenticated.');\n  }\n}\nfunction withAuth(resolver) {\n  return Object(graphql_resolvers__WEBPACK_IMPORTED_MODULE_2__[\"pipe\"])(authResolver, resolver);\n}\nconst resolvers = {\n  Query: _objectSpread({}, _user_UserType__WEBPACK_IMPORTED_MODULE_3__[\"queryResolvers\"], _todo_TodoType__WEBPACK_IMPORTED_MODULE_4__[\"queryResolvers\"]),\n  Mutation: _objectSpread({}, _user_UserType__WEBPACK_IMPORTED_MODULE_3__[\"mutationResolvers\"], _todo_TodoType__WEBPACK_IMPORTED_MODULE_4__[\"mutationResolvers\"]),\n  DateTime: graphql_iso_date__WEBPACK_IMPORTED_MODULE_1__[\"GraphQLDateTime\"],\n  PageInfo: {\n    hasNextPage: connection => connection.hasNextPage(),\n    hasPreviousPage: connection => connection.hasPreviousPage()\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/resolvers.js?");

/***/ }),

/***/ "./src/modules/schema.js":
/*!*******************************!*\
  !*** ./src/modules/schema.js ***!
  \*******************************/
/*! exports provided: SchemaDefinition, typeDefs, schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SchemaDefinition\", function() { return SchemaDefinition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeDefs\", function() { return typeDefs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schema\", function() { return schema; });\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvers */ \"./src/modules/resolvers.js\");\n/* harmony import */ var _user_UserType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/UserType */ \"./src/modules/user/UserType.js\");\n/* harmony import */ var _todo_TodoType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/TodoType */ \"./src/modules/todo/TodoType.js\");\n\n\n\n\nconst SchemaDefinition = `\n  schema {\n    query: Query\n    mutation: Mutation\n  }\n\n  type Query {\n    me: User\n    todo(id: ID!): Todo\n    todos(first: Int, after: String, last: Int, before: String): TodoConnection\n  }\n\n  type Mutation {\n    signIn(input: SignInInput!): User!\n    signUp(input: SignUpInput!): User!\n    addTodo(input: AddTodoInput): Todo!\n  }\n\n  scalar DateTime\n\n  type PageInfo {\n    hasNextPage: Boolean!\n    hasPreviousPage: Boolean!\n  }\n`;\nconst typeDefs = [_user_UserType__WEBPACK_IMPORTED_MODULE_2__[\"typeDefs\"], _todo_TodoType__WEBPACK_IMPORTED_MODULE_3__[\"typeDefs\"]];\nconst schema = Object(graphql_tools__WEBPACK_IMPORTED_MODULE_0__[\"makeExecutableSchema\"])({\n  typeDefs: [SchemaDefinition, ...typeDefs],\n  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_1__[\"resolvers\"],\n  logger: console\n});\n\n//# sourceURL=webpack:///./src/modules/schema.js?");

/***/ }),

/***/ "./src/modules/todo/TodoLoader.js":
/*!****************************************!*\
  !*** ./src/modules/todo/TodoLoader.js ***!
  \****************************************/
/*! exports provided: loadTodo, loadAllTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTodo\", function() { return loadTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadAllTodos\", function() { return loadAllTodos; });\n/* harmony import */ var _TodoModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoModel */ \"./src/modules/todo/TodoModel.js\");\n/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base-64 */ \"base-64\");\n/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(base_64__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers */ \"./src/modules/resolvers.js\");\n\n\n\nasync function loadTodo(root, {\n  id\n}, {\n  user\n}) {\n  const todo = await _TodoModel__WEBPACK_IMPORTED_MODULE_0__[\"TodoModel\"].findOne({\n    _id: id,\n    user\n  });\n  return todo;\n}\nasync function loadAllTodos(root, {\n  first,\n  last,\n  before,\n  after\n}, {\n  user\n}) {\n  const $where = {};\n  const $options = {\n    limit: first || last,\n    sort: {\n      createdAt: -1\n    }\n  };\n\n  if (before) {\n    $where.createdAt = {\n      $gte: new Date(Object(base_64__WEBPACK_IMPORTED_MODULE_1__[\"decode\"])(before))\n    };\n  }\n\n  if (after) {\n    $where.createdAt = {\n      $lte: new Date(Object(base_64__WEBPACK_IMPORTED_MODULE_1__[\"decode\"])(after))\n    };\n  }\n\n  const todos = await _TodoModel__WEBPACK_IMPORTED_MODULE_0__[\"TodoModel\"].find($where, null, $options);\n  const edges = todos.map(todo => ({\n    node: Object(_resolvers__WEBPACK_IMPORTED_MODULE_2__[\"prepare\"])(todo),\n    cursor: Object(base_64__WEBPACK_IMPORTED_MODULE_1__[\"encode\"])(todo.createdAt.toISOString())\n  }));\n  const pageInfo = {\n    async hasNextPage() {\n      if (todos.length < (last || first)) {\n        return false;\n      }\n\n      const operator = before ? '$gt' : '$lt';\n      const lastTodo = todos[todos.length - 1];\n      const $options = {\n        sort: {\n          createdAt: -1\n        }\n      };\n      const $where = {\n        user,\n        createdAt: {\n          [operator]: new Date(lastTodo.createdAt)\n        }\n      };\n      const nextTodo = await _TodoModel__WEBPACK_IMPORTED_MODULE_0__[\"TodoModel\"].findOne($where, null, $options);\n      return !!nextTodo;\n    },\n\n    async hasPreviousPage() {\n      const $where = {\n        user\n      };\n      const $options = {\n        sort: {\n          createdAt: 1\n        }\n      };\n\n      if (before) {\n        $where.createdAt = {\n          $gt: new Date(Object(base_64__WEBPACK_IMPORTED_MODULE_1__[\"decode\"])(before))\n        };\n      }\n\n      if (after) {\n        $where.createdAt = {\n          $lt: new Date(Object(base_64__WEBPACK_IMPORTED_MODULE_1__[\"decode\"])(after))\n        };\n      }\n\n      const previousTodo = await _TodoModel__WEBPACK_IMPORTED_MODULE_0__[\"TodoModel\"].findOne($where, null, $options);\n      return !!previousTodo;\n    }\n\n  };\n  return {\n    edges,\n    pageInfo\n  };\n}\n\n//# sourceURL=webpack:///./src/modules/todo/TodoLoader.js?");

/***/ }),

/***/ "./src/modules/todo/TodoModel.js":
/*!***************************************!*\
  !*** ./src/modules/todo/TodoModel.js ***!
  \***************************************/
/*! exports provided: TodoSchema, TodoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoSchema\", function() { return TodoSchema; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoModel\", function() { return TodoModel; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TodoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  description: {\n    type: String,\n    required: true\n  },\n  completed: {\n    type: Boolean,\n    required: false,\n    default: false\n  },\n  date: {\n    type: Date,\n    required: false,\n    default: new Date()\n  },\n  user: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.SchemaTypes.ObjectId,\n    ref: 'User',\n    required: true\n  }\n}, {\n  timestamps: {\n    createdAt: true,\n    updatedAt: true\n  }\n});\nconst TodoModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Todo', TodoSchema);\n\n//# sourceURL=webpack:///./src/modules/todo/TodoModel.js?");

/***/ }),

/***/ "./src/modules/todo/TodoMutation.js":
/*!******************************************!*\
  !*** ./src/modules/todo/TodoMutation.js ***!
  \******************************************/
/*! exports provided: addTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony import */ var _TodoModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoModel */ \"./src/modules/todo/TodoModel.js\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resolvers */ \"./src/modules/resolvers.js\");\n\n\nasync function addTodo(root, {\n  input: {\n    description,\n    date\n  }\n}, {\n  user\n}) {\n  const todo = await _TodoModel__WEBPACK_IMPORTED_MODULE_0__[\"TodoModel\"].create({\n    user,\n    date,\n    description\n  });\n  return Object(_resolvers__WEBPACK_IMPORTED_MODULE_1__[\"prepare\"])(todo);\n}\n\n//# sourceURL=webpack:///./src/modules/todo/TodoMutation.js?");

/***/ }),

/***/ "./src/modules/todo/TodoType.js":
/*!**************************************!*\
  !*** ./src/modules/todo/TodoType.js ***!
  \**************************************/
/*! exports provided: typeDefs, queryResolvers, mutationResolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeDefs\", function() { return typeDefs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryResolvers\", function() { return queryResolvers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mutationResolvers\", function() { return mutationResolvers; });\n/* harmony import */ var _TodoLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoLoader */ \"./src/modules/todo/TodoLoader.js\");\n/* harmony import */ var _TodoMutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoMutation */ \"./src/modules/todo/TodoMutation.js\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers */ \"./src/modules/resolvers.js\");\n\n\n\nconst typeDefs = `\n  type Todo {\n    id: ID!\n    completed: Boolean\n    description: String!\n    date: DateTime\n    createdAt: DateTime\n    updatedAt: DateTime\n    user: User\n  }\n\n  type TodoConnection {\n    edges: [TodoEdge]\n    pageInfo: PageInfo!\n  }\n\n  type TodoEdge {\n    cursor: String!\n    node: Todo!\n  }\n\n  input AddTodoInput {\n    description: String!\n    date: String\n  }\n`;\nconst queryResolvers = {\n  todo: Object(_resolvers__WEBPACK_IMPORTED_MODULE_2__[\"withAuth\"])(_TodoLoader__WEBPACK_IMPORTED_MODULE_0__[\"loadTodo\"]),\n  todos: Object(_resolvers__WEBPACK_IMPORTED_MODULE_2__[\"withAuth\"])(_TodoLoader__WEBPACK_IMPORTED_MODULE_0__[\"loadAllTodos\"])\n};\nconst mutationResolvers = {\n  addTodo: Object(_resolvers__WEBPACK_IMPORTED_MODULE_2__[\"withAuth\"])(_TodoMutation__WEBPACK_IMPORTED_MODULE_1__[\"addTodo\"])\n};\n\n//# sourceURL=webpack:///./src/modules/todo/TodoType.js?");

/***/ }),

/***/ "./src/modules/user/UserLoader.js":
/*!****************************************!*\
  !*** ./src/modules/user/UserLoader.js ***!
  \****************************************/
/*! exports provided: loadCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadCurrentUser\", function() { return loadCurrentUser; });\nfunction loadCurrentUser(root, args, context) {\n  return context.user;\n}\n\n//# sourceURL=webpack:///./src/modules/user/UserLoader.js?");

/***/ }),

/***/ "./src/modules/user/UserModel.js":
/*!***************************************!*\
  !*** ./src/modules/user/UserModel.js ***!
  \***************************************/
/*! exports provided: UserSchema, UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserSchema\", function() { return UserSchema; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserModel\", function() { return UserModel; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  }\n}, {\n  timestamps: {\n    createdAt: true,\n    updatedAt: true\n  }\n});\nconst UserModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema);\n\n//# sourceURL=webpack:///./src/modules/user/UserModel.js?");

/***/ }),

/***/ "./src/modules/user/UserMutation.js":
/*!******************************************!*\
  !*** ./src/modules/user/UserMutation.js ***!
  \******************************************/
/*! exports provided: signIn, signUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signIn\", function() { return signIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUp\", function() { return signUp; });\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-lambda */ \"apollo-server-lambda\");\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UserModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserModel */ \"./src/modules/user/UserModel.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth */ \"./src/auth.js\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resolvers */ \"./src/modules/resolvers.js\");\n\n\n\n\nasync function signIn(root, {\n  input: {\n    email,\n    password\n  }\n}) {\n  const user = await _UserModel__WEBPACK_IMPORTED_MODULE_1__[\"UserModel\"].findOne({\n    email\n  });\n  const authSuccess = await Object(_auth__WEBPACK_IMPORTED_MODULE_2__[\"authenticate\"])(password, user.password);\n\n  if (!authSuccess) {\n    throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__[\"AuthenticationError\"]('E-mail or password invalid.');\n  }\n\n  user.token = Object(_auth__WEBPACK_IMPORTED_MODULE_2__[\"generateToken\"])(user);\n  return Object(_resolvers__WEBPACK_IMPORTED_MODULE_3__[\"prepare\"])(user);\n}\nasync function signUp(root, {\n  input: {\n    name,\n    email,\n    password\n  }\n}) {\n  const existingUser = await _UserModel__WEBPACK_IMPORTED_MODULE_1__[\"UserModel\"].findOne({\n    email\n  });\n\n  if (existingUser) {\n    throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__[\"ApolloError\"]('This e-mail is already used!', 'EMAIL_ALREADY_USED');\n  }\n\n  const user = await _UserModel__WEBPACK_IMPORTED_MODULE_1__[\"UserModel\"].create({\n    name,\n    email,\n    password: await Object(_auth__WEBPACK_IMPORTED_MODULE_2__[\"encryptPassword\"])(password)\n  });\n  user.token = Object(_auth__WEBPACK_IMPORTED_MODULE_2__[\"generateToken\"])(user);\n  return Object(_resolvers__WEBPACK_IMPORTED_MODULE_3__[\"prepare\"])(user);\n}\n\n//# sourceURL=webpack:///./src/modules/user/UserMutation.js?");

/***/ }),

/***/ "./src/modules/user/UserType.js":
/*!**************************************!*\
  !*** ./src/modules/user/UserType.js ***!
  \**************************************/
/*! exports provided: typeDefs, queryResolvers, mutationResolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeDefs\", function() { return typeDefs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryResolvers\", function() { return queryResolvers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mutationResolvers\", function() { return mutationResolvers; });\n/* harmony import */ var _UserLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLoader */ \"./src/modules/user/UserLoader.js\");\n/* harmony import */ var _UserMutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserMutation */ \"./src/modules/user/UserMutation.js\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers */ \"./src/modules/resolvers.js\");\n\n\n\nconst typeDefs = `\n  type User {\n    id: ID!\n    name: String!\n    email: String!\n    token: String\n  }\n\n  input SignInInput {\n    email: String!\n    password: String!\n  }\n\n  input SignUpInput {\n    name: String!\n    email: String!\n    password: String!\n  }\n`;\nconst queryResolvers = {\n  me: Object(_resolvers__WEBPACK_IMPORTED_MODULE_2__[\"withAuth\"])(_UserLoader__WEBPACK_IMPORTED_MODULE_0__[\"loadCurrentUser\"])\n};\nconst mutationResolvers = {\n  signIn: _UserMutation__WEBPACK_IMPORTED_MODULE_1__[\"signIn\"],\n  signUp: _UserMutation__WEBPACK_IMPORTED_MODULE_1__[\"signUp\"]\n};\n\n//# sourceURL=webpack:///./src/modules/user/UserType.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: graphqlHandler, playgroundHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"graphqlHandler\", function() { return graphqlHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playgroundHandler\", function() { return playgroundHandler; });\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-lambda */ \"apollo-server-lambda\");\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_playground_middleware_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-playground-middleware-lambda */ \"graphql-playground-middleware-lambda\");\n/* harmony import */ var graphql_playground_middleware_lambda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_playground_middleware_lambda__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/schema */ \"./src/modules/schema.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database */ \"./src/database.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth */ \"./src/auth.js\");\n\n\n\n\n\nconst server = new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__[\"ApolloServer\"]({\n  schema: _modules_schema__WEBPACK_IMPORTED_MODULE_2__[\"schema\"],\n  context: async ({\n    event\n  }) => ({\n    user: await Object(_auth__WEBPACK_IMPORTED_MODULE_4__[\"getUser\"])(event.headers.authorization)\n  })\n});\nObject(_database__WEBPACK_IMPORTED_MODULE_3__[\"connectDatabase\"])();\nconst graphqlHandler = server.createHandler();\nconst playgroundHandler = graphql_playground_middleware_lambda__WEBPACK_IMPORTED_MODULE_1___default()({\n  endpoint: '/graphql'\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-lambda\");\n\n//# sourceURL=webpack:///external_%22apollo-server-lambda%22?");

/***/ }),

/***/ "base-64":
/*!**************************!*\
  !*** external "base-64" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"base-64\");\n\n//# sourceURL=webpack:///external_%22base-64%22?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "graphql-iso-date":
/*!***********************************!*\
  !*** external "graphql-iso-date" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-iso-date\");\n\n//# sourceURL=webpack:///external_%22graphql-iso-date%22?");

/***/ }),

/***/ "graphql-playground-middleware-lambda":
/*!*******************************************************!*\
  !*** external "graphql-playground-middleware-lambda" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-playground-middleware-lambda\");\n\n//# sourceURL=webpack:///external_%22graphql-playground-middleware-lambda%22?");

/***/ }),

/***/ "graphql-resolvers":
/*!************************************!*\
  !*** external "graphql-resolvers" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-resolvers\");\n\n//# sourceURL=webpack:///external_%22graphql-resolvers%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ })));