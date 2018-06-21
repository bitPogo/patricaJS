(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var BaseException = function (_Error) {
	_inherits(BaseException, _Error);

	function BaseException(Name, Message) {
		_classCallCheck(this, BaseException);

		var _this = _possibleConstructorReturn(this, (BaseException.__proto__ || Object.getPrototypeOf(BaseException)).call(this, Message));

		_this.Name = Name;
		console.trace(); // eslint-disable-line
		return _this;
	}

	return BaseException;
}(Error);

var ValueErrorException = function (_BaseException) {
	_inherits(ValueErrorException, _BaseException);

	function ValueErrorException(Message) {
		_classCallCheck(this, ValueErrorException);

		return _possibleConstructorReturn(this, (ValueErrorException.__proto__ || Object.getPrototypeOf(ValueErrorException)).call(this, 'ValueErrorException', Message));
	}

	return ValueErrorException;
}(BaseException);

var TypeErrorException = function (_BaseException2) {
	_inherits(TypeErrorException, _BaseException2);

	function TypeErrorException(Message) {
		_classCallCheck(this, TypeErrorException);

		return _possibleConstructorReturn(this, (TypeErrorException.__proto__ || Object.getPrototypeOf(TypeErrorException)).call(this, 'ValueErrorException', Message));
	}

	return TypeErrorException;
}(BaseException);

var NotImplementedException = function (_BaseException3) {
	_inherits(NotImplementedException, _BaseException3);

	function NotImplementedException(What) {
		_classCallCheck(this, NotImplementedException);

		return _possibleConstructorReturn(this, (NotImplementedException.__proto__ || Object.getPrototypeOf(NotImplementedException)).call(this, 'NotImplementedException', What + ' is not implemented (yet).'));
	}

	return NotImplementedException;
}(BaseException);

var InvalidMethodException = function (_BaseException4) {
	_inherits(InvalidMethodException, _BaseException4);

	function InvalidMethodException(What) {
		_classCallCheck(this, InvalidMethodException);

		return _possibleConstructorReturn(this, (InvalidMethodException.__proto__ || Object.getPrototypeOf(InvalidMethodException)).call(this, 'InvalidMethodException', What + ' should do nothing.'));
	}

	return InvalidMethodException;
}(BaseException);
'use strict';

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

/* eslint-disable operator-linebreak */
var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, null, [{
		key: 'debugObjectPrint',
		value: function debugObjectPrint(Object) {
			var Body = document.getElementsByTagName('body')[0];
			var Element = document.createElement('div');
			Element.innerHTML = '<pre>' + JSON.stringify(Object, undefined, 4) + '</pre>';
			Body.appendChild(Element);
		}
	}, {
		key: 'objectSize',
		value: function objectSize(Obj) {
			var Key = void 0;
			var Size = 0;
			for (Key in Obj) {
				if (true === Obj.hasOwnProperty(Key)) {
					Size++;
				}
			}
			return Size;
		}
	}, {
		key: 'isEmpty',
		value: function isEmpty(Anything) {
			if ('undefined' === typeof Anything || null === Anything) {
				return true;
			} else {
				if ('string' === typeof Anything) {
					return 0 === Anything.length;
				} else if (true === Array.isArray(Anything)) {
					return 0 === Anything.length;
				} else if ('object' === (typeof Anything === 'undefined' ? 'undefined' : _typeof(Anything))) {
					return 0 === Utils.objectSize(Anything);
				} else {
					return false;
				}
			}
		}
	}]);

	return Utils;
}();
'use strict';

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

/* eslint-disable operator-linebreak */
var PatricaTrieNodeBase = function () {
	function PatricaTrieNodeBase() {
		_classCallCheck(this, PatricaTrieNodeBase);
	}

	_createClass(PatricaTrieNodeBase, [{
		key: 'isAEnd',
		value: function isAEnd() {
			return this._IsEnding;
		}
	}, {
		key: 'unsetEnd',
		value: function unsetEnd() {
			this._IsEnding = false;
		}
	}, {
		key: 'hasChildren',
		value: function hasChildren() {
			return 0 < this._Children.length;
		}
	}, {
		key: '_setParent',
		value: function _setParent(Parent) {
			this.__Parent = Parent;
		}
	}, {
		key: '_getParent',
		value: function _getParent() {
			return this.__Parent;
		}
	}, {
		key: '_getPrefix',
		value: function _getPrefix() {
			var Prefix = void 0;

			if (false === this.__Parent._IsRoot) {
				Prefix = this.__Parent.getKey();
			} else {
				Prefix = '';
			}

			return Prefix;
		}
	}, {
		key: '_setKey',
		value: function _setKey(Key) {
			this.__Key = Key;
		}
	}, {
		key: '_getKey',
		value: function _getKey() {
			return this.__Key;
		}
	}, {
		key: 'getKey',
		value: function getKey() {
			var Prefix = void 0;

			if (false === this.__Parent._IsRoot) {
				Prefix = this.__Parent.getKey();
			} else {
				Prefix = '';
			}

			return Prefix + this.__Key;
		}
	}, {
		key: '_getKeys',
		value: function _getKeys(Key, Return) {
			var Child = void 0;

			Key += this.__Key;

			if (true === this._IsEnding) {
				Return.push(Key);
			}

			for (Child in this._Children) {
				this._Children[Child]._getKeys(Key, Return);
			}
		}
	}, {
		key: '_getKeysFilter',
		value: function _getKeysFilter(Key, Return, Filter) {
			var Child = void 0;

			Key += this.__Key;

			if (true === this._IsEnding) {
				if (true === Filter(Key)) {
					Return.push(Key);
				}
			}

			for (Child in this._Children) {
				this._Children[Child]._getKeys(Key, Return);
			}
		}
	}, {
		key: 'getKeys',
		value: function getKeys() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Prefix = void 0;

			if (false === this.__Parent._IsRoot) {
				Prefix = this.__Parent.getKey();
			} else {
				Prefix = '';
			}

			var Output = [];
			if ('function' === typeof Filter) {
				this._getKeysFilter(Prefix, Output, Filter);
			} else {
				this._getKeys(Prefix, Output);
			}
			return Output;
		}

		/* Interface */
		// eslint-disable-next-line

	}, {
		key: '_findByKey',
		value: function _findByKey(Key, Exact) {
			throw new NotImplementedException('_findByKey');
		}
	}, {
		key: 'findByKey',
		value: function findByKey(Key) {
			var Prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var Exact = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var RootKeyLength = void 0;

			if ('string' !== typeof Key || 0 === Key.length) {
				return null;
			}

			if (true === Prefixed) {
				if (false === this.__Parent._IsRoot) {
					RootKeyLength = this.__Parent.getKey().length;
					Key = Key.substring(RootKeyLength);
				}
			}

			return this._findByKey(Key, Exact);
		}

		/* Interface */
		// eslint-disable-next-line

	}, {
		key: '_findByKeyIgnoreCase',
		value: function _findByKeyIgnoreCase(LowerKey, Exact, Return) {
			throw new NotImplementedException('_findByKeyIgnoreCase');
		}
	}, {
		key: 'findByKeyIgnoreCase',
		value: function findByKeyIgnoreCase(Key) {
			var Prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var Exact = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var RootKeyLength = void 0;
			var Nodes = [];

			if ('string' !== typeof Key || 0 === Key.length) {
				return null;
			}

			if (true === Prefixed) {
				if (false === this.__Parent._IsRoot) {
					RootKeyLength = this.__Parent.getKey().length;
					Key = Key.substring(RootKeyLength);
				}
			}

			this._findByKeyIgnoreCase(Key.toLowerCase(), Exact, Nodes);
			return new PatricaTrieCollection(Nodes);
		}
	}, {
		key: 'containsKey',
		value: function containsKey(Key) {
			var Prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var Exact = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var Node = this.findByKey(Key, Prefixed, Exact);

			if (null === Node) {
				return false;
			} else {
				if (true === Exact) {
					return Node.isAEnd();
				} else {
					return true;
				}
			}
		}
	}, {
		key: '_containsKeyIgnoreCase',
		value: function _containsKeyIgnoreCase(LowerKey) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Return = void 0,
			    Found = void 0,
			    CurrentKey = void 0;

			if (0 === LowerKey.length) {
				return;
			}
			// eslint-disable-next-line
			CurrentKey = this._getKey().toLowerCase();

			if (true === CurrentKey.startsWith(LowerKey)) {
				if (true === Exact && CurrentKey !== LowerKey) {
					return false;
				} else {
					return true;
				}
			} else if (LowerKey.startsWith(CurrentKey)) {
				LowerKey = LowerKey.substring(this._getKey().length);
				Found = this.__searchForKey(LowerKey.charCodeAt(0));

				if (-1 !== Found) {
					Return = this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
					if (false === Return) {
						Found = this.__searchForKey(LowerKey.charAt(0).toUpperCase().charCodeAt(0));
						if (-1 !== Found) {
							return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
						}
					}
					return Return;
				} else {
					Found = this.__searchForKey(LowerKey.charAt(0).toUpperCase().charCodeAt(0));
					if (-1 !== Found) {
						return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
					}
				}
			}
		}

		/* Interface */
		// eslint-disable-next-line

	}, {
		key: '_containsKeyIgnoreCase',
		value: function _containsKeyIgnoreCase(LowerKey) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			throw new NotImplementedException('_findByKeyIgnoreCase');
		}
	}, {
		key: 'containsKeyIgnoreCase',
		value: function containsKeyIgnoreCase(Key) {
			var Prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var Exact = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var RootKeyLength = void 0;

			if ('string' !== typeof Key || 0 === Key.length) {
				return null;
			}

			if (true === Prefixed) {
				if (false === this._getParent()._IsRoot) {
					RootKeyLength = this._getParent().getKey().length;
					Key = Key.substring(RootKeyLength);
				}
			}

			return this._containsKeyIgnoreCase(Key.toLowerCase(), Exact);
		}
	}, {
		key: '_longestPrefix',
		value: function _longestPrefix(Key) {
			var Index = void 0;
			var To = Math.min(Key.length, this.__Key.length);

			for (Index = 1; To > Index; Index++) {
				if (Key.charCodeAt(Index) !== this.__Key.charCodeAt(Index)) {
					return Index;
				}
			}

			return To;
		}
	}, {
		key: '_importChildren',
		value: function _importChildren(Children) {
			var Child = void 0;

			if (false === Array.isArray(Children)) {
				throw new TypeErrorException('Expected array for import.');
			}

			for (Child in Children) {
				if (false === Children[Child] instanceof PatricaTrieNode) {
					throw new ValueErrorException('Illegal import of non PatricaTrieNode.');
				}

				Children[Child]._setParent(this);
			}

			this._Children = Children;
			return true;
		}

		/* Interface */
		// eslint-disable-next-line

	}, {
		key: 'insert',
		value: function insert(Key) {
			throw new NotImplementedException('insert');
		}

		/* Interface */
		// eslint-disable-next-line

	}, {
		key: 'remove',
		value: function remove(Key) {
			var Prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			throw new NotImplementedException('remove');
		}
	}, {
		key: 'erase',
		value: function erase() {
			throw new NotImplementedException('erase');
		}
	}, {
		key: 'serialize',
		value: function serialize() {
			throw new NotImplementedException('serialize');
		}
	}]);

	return PatricaTrieNodeBase;
}();
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* eslint-disable operator-linebreak */

var PatricaTrieNode = exports.PatricaTrieNode = function (_PatricaTrieNodeBase) {
	_inherits(PatricaTrieNode, _PatricaTrieNodeBase);

	function PatricaTrieNode(Key, Parent) {
		_classCallCheck(this, PatricaTrieNode);

		var IsRoot = false;

		var _this = _possibleConstructorReturn(this, (PatricaTrieNode.__proto__ || Object.getPrototypeOf(PatricaTrieNode)).call(this));

		if ('undefined' === typeof Key && 'undefined' === typeof Parent) {
			IsRoot = true;
		}

		_this._IsRoot = IsRoot;

		if (false === IsRoot) {
			if (true === Utils.isEmpty(Parent) || false === Parent instanceof PatricaTrieNode) {
				throw new TypeErrorException('Expected a PatricaTrieNode as Parent.');
			}

			if ('string' !== typeof Key || true === Utils.isEmpty(Key)) {
				throw new TypeErrorException('Expected non empty key.');
			}

			_this._IsEnding = true;
		} else {
			_this._IsEnding = false;
		}

		_this._setKey(Key);
		_this._setParent(Parent);
		_this._Children = [];
		return _this;
	}

	_createClass(PatricaTrieNode, [{
		key: '__searchForKey',
		value: function __searchForKey(Key) {
			var Start = void 0,
			    End = void 0,
			    Middle = void 0;

			Start = 0;
			End = this._Children.length - 1;

			if (0 === this._Children.length || this._Children[0]._getKey().charCodeAt(0) > Key) {
				return -1;
			}

			if (this._Children[End]._getKey().charCodeAt(0) < Key) {
				return -1;
			}

			while (Start <= End) {
				Middle = Start + End >> 1;

				if (Key > this._Children[Middle]._getKey().charCodeAt(0)) {
					Start = Middle + 1;
				} else if (Key < this._Children[Middle]._getKey().charCodeAt(0)) {
					End = Middle - 1;
				} else {
					return Middle;
				}
			}

			return -1;
		}
	}, {
		key: '_findByKey',
		value: function _findByKey(Key, Exact) {
			var Found = void 0;
			if (0 === Key.length) {
				return null;
			}

			if (true === this._getKey().startsWith(Key)) {
				if (true === Exact && Key !== this._getKey()) {
					return null;
				} else {
					return this;
				}
			} else if (Key.startsWith(this._getKey())) {
				Key = Key.substring(this._getKey().length);
				Found = this.__searchForKey(Key.charCodeAt(0));

				if (-1 !== Found) {
					return this._Children[Found]._findByKey(Key, Exact);
				} else {
					return null;
				}
			} else {
				return null;
			}
		}
	}, {
		key: '_findByKeyIgnoreCase',
		value: function _findByKeyIgnoreCase(LowerKey, Exact, Return) {
			var Found = void 0,
			    CurrentKey = void 0;

			if (0 === LowerKey.length) {
				return;
			}
			// eslint-disable-next-line
			CurrentKey = this._getKey().toLowerCase();

			if (true === CurrentKey.startsWith(LowerKey)) {
				if (true === Exact && CurrentKey !== LowerKey) {
					return;
				} else {
					Return.push(this);
					return;
				}
			} else if (LowerKey.startsWith(CurrentKey)) {
				LowerKey = LowerKey.substring(this._getKey().length);
				Found = this.__searchForKey(LowerKey.charCodeAt(0));

				if (-1 !== Found) {
					this._Children[Found]._findByKeyIgnoreCase(LowerKey, Exact, Return);
				}

				Found = this.__searchForKey(LowerKey.charAt(0).toUpperCase().charCodeAt(0));
				if (-1 !== Found) {
					this._Children[Found]._findByKeyIgnoreCase(LowerKey, Exact, Return);
				}
			}
		}
	}, {
		key: '_containsKeyIgnoreCase',
		value: function _containsKeyIgnoreCase(LowerKey) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Return = void 0,
			    Found = void 0,
			    CurrentKey = void 0;

			if (0 === LowerKey.length) {
				return;
			}
			// eslint-disable-next-line
			CurrentKey = this._getKey().toLowerCase();

			if (true === CurrentKey.startsWith(LowerKey)) {
				if (true === Exact && CurrentKey !== LowerKey) {
					return false;
				} else {
					return true;
				}
			} else if (LowerKey.startsWith(CurrentKey)) {
				LowerKey = LowerKey.substring(this._getKey().length);
				Found = this.__searchForKey(LowerKey.charCodeAt(0));

				if (-1 !== Found) {
					Return = this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
					if (false === Return) {
						Found = this.__searchForKey(LowerKey.charAt(0).toUpperCase().charCodeAt(0));
						if (-1 !== Found) {
							return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
						}
					}

					return Return;
				} else {
					Found = this.__searchForKey(LowerKey.charAt(0).toUpperCase().charCodeAt(0));
					if (-1 !== Found) {
						return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
					}
				}
			}

			return false;
		}
	}, {
		key: '_insertPosition',
		value: function _insertPosition(Key) {
			var Start = void 0,
			    End = void 0,
			    Middle = void 0;

			Start = 0;
			End = this._Children.length - 1;

			if (0 === this._Children.length || this._Children[0]._getKey().charCodeAt(0) > Key) {
				return -1;
			}

			if (this._Children[End]._getKey().charCodeAt(0) < Key) {
				return -(this._Children.length + 1);
			}

			while (Start <= End) {
				Middle = Start + End >> 1;
				if ('undefined' === typeof this._Children[Middle]._getKey()) {
					return -(Start + 1);
				}

				if (Key > this._Children[Middle]._getKey().charCodeAt(0)) {
					Start = Middle + 1;
				} else if (Key < this._Children[Middle]._getKey().charCodeAt(0)) {
					End = Middle - 1;
				} else {
					return Middle;
				}
			}

			return -(Start + 1);
		}
	}, {
		key: '_insertIntoChild',
		value: function _insertIntoChild(Key) {
			var Index = this._insertPosition(Key.charCodeAt(0));

			if (-1 < Index) {
				this._Children[Index].insert(Key);
				return;
			}

			this._Children.splice(-(Index + 1), 0, new PatricaTrieNode(Key, this));
		}
	}, {
		key: 'insert',
		value: function insert(Key) {
			var Common = void 0,
			    NewKey = void 0,
			    NewChild = void 0,
			    NewChild2 = void 0;

			var NewKeyLength = Key.length;
			var CurrentKeyLength = this._getKey().length;
			var PrefixLength = void 0;

			if ('string' !== typeof Key || 0 === Key.length) {
				return;
			}
			// eslint-disable-next-line
			PrefixLength = this._longestPrefix(Key);

			if (NewKeyLength === CurrentKeyLength && PrefixLength === CurrentKeyLength) {
				this._IsEnding = true;
			} else {
				if (PrefixLength === CurrentKeyLength) {
					NewKey = Key.substring(PrefixLength);
					this._insertIntoChild(NewKey);
				} else if (PrefixLength === NewKeyLength) {
					NewChild = new PatricaTrieNode(this._getKey().substring(PrefixLength), this);

					NewChild._importChildren(this._Children);

					if (false === this._IsEnding) {
						this._IsEnding = true;
						NewChild.unsetEnd();
					}
					this._setKey(this._getKey().substring(0, PrefixLength));
					this._Children = [NewChild];
				} else {
					Common = this._getKey().substring(0, PrefixLength);
					NewChild = new PatricaTrieNode(this._getKey().substring(PrefixLength), this);

					NewChild2 = new PatricaTrieNode(Key.substring(PrefixLength), this);

					NewChild._importChildren(this._Children);

					if (false === this._IsEnding) {
						NewChild.unsetEnd();
					}

					this._IsEnding = false;
					this._setKey(Common);

					if (NewChild._getKey().charCodeAt(0) < NewChild2._getKey().charCodeAt(0)) {
						this._Children = [NewChild, NewChild2];
					} else {
						this._Children = [NewChild2, NewChild];
					}
				}
			}
		}
	}, {
		key: '_removeFromTrie',
		value: function _removeFromTrie() {
			this._getParent()._clean(this._getKey().charCodeAt(0));
		}
	}, {
		key: '_clean',
		value: function _clean(Key) {
			var Index = this.__searchForKey(Key);
			if (-1 === Index) {
				return;
			}

			this._Children.splice(Index, 1);

			if (true === this._IsRoot) {
				return;
			}

			if (0 === this._Children.length && false === this._IsEnding && 0 < this._getKey().length) {
				this._removeFromTrie();
			} else if (1 === this._Children.length && false === this._Children[0].hasChildren() && false === this._IsEnding) {
				this._setKey(this._getKey() + this._Children[0]._getKey());
				this._IsEnding = this._Children[0].isAEnd();
				this._Children.pop();
			}
		}
	}, {
		key: 'remove',
		value: function remove(Key) {
			var Prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var ToDelete = this.findByKey(Key, Prefixed, true);

			if (null === ToDelete) {
				return;
			}

			if (true === ToDelete.hasChildren()) {
				if (true === ToDelete.isAEnd()) {
					ToDelete.unsetEnd();
				}
			} else {
				ToDelete._removeFromTrie();
			}
		}
	}, {
		key: 'erase',
		value: function erase() {
			this._Children = [];
		}
	}, {
		key: '_serialize',
		value: function _serialize(Output) {
			var Child = void 0;

			Output.push('[' + this._getKey().length + ':' + this._getKey());
			if (true === this._IsEnding) {
				Output.push('1');
			} else {
				Output.push('0');
			}

			for (Child in this._Children) {
				this._Children[Child]._serialize(Output);
			}

			Output.push(']');
		}
	}, {
		key: 'serialize',
		value: function serialize() {
			var Output = [];

			this._serialize(Output);

			return Output.join('');
		}
	}, {
		key: '_fromString',
		value: function _fromString(Nodes, Position) {
			var ImportNode = void 0;
			var Imports = [];

			while (Nodes.length > Position) {
				ImportNode = PatricaTrieNode._loadFromString(Nodes, Position, this);
				Position = ImportNode[0];
				Imports.push(ImportNode[1]);
				if (']' === Nodes.charAt(Position)) {
					this._importChildren(Imports);
					this._Children = this._Children.sort(PatricaTrieNodeBase.sortChildes);
					return ++Position;
				}
			}

			throw new ValueErrorException('Unexpected end of string @position ' + Position + '.');
		}
	}], [{
		key: 'sortChildes',
		value: function sortChildes(Child) {
			return Child._getKey();
		}
	}, {
		key: '_loadFromString',
		value: function _loadFromString(NodeString, Position, Parent) {
			var lastPosition = void 0,
			    KeyLength = void 0,
			    Key = void 0,
			    Node = void 0;

			if ('[' !== NodeString.charAt(Position)) {
				throw new ValueErrorException('The given string is not valid. - Exspecetd [ got ' + NodeString.charAt(Position) + ' at position ' + Position + '.');
			}

			Position++;
			lastPosition = Position;
			while (47 < NodeString.charCodeAt(Position) && 58 > NodeString.charCodeAt(Position)) {
				Position++;
			}

			KeyLength = parseInt(NodeString.substring(lastPosition, Position));

			if (true === isNaN(KeyLength) || 0 === KeyLength) {
				throw new ValueErrorException('Illegal key length @position ' + lastPosition + '.');
			}

			Position++;
			Key = NodeString.substring(Position, Position + KeyLength);
			Position += KeyLength;

			Node = new PatricaTrieNode(Key, Parent);
			if ('0' === NodeString.charAt(Position)) {
				Node.unsetEnd();
			}

			Position++;

			if (']' !== NodeString.charAt(Position)) {
				return [Node._fromString(NodeString, Position), Node];
			} else {
				return [++Position, Node];
			}
		}
	}]);

	return PatricaTrieNode;
}(PatricaTrieNodeBase);
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* eslint-disable operator-linebreak */
var PatricaTrieNodeEx = exports.PatricaTrieNodeEx = function (_PatricaTrieNode) {
	_inherits(PatricaTrieNodeEx, _PatricaTrieNode);

	function PatricaTrieNodeEx(Key, Value, Parent) {
		_classCallCheck(this, PatricaTrieNodeEx);

		var IsRoot = false;

		var _this = _possibleConstructorReturn(this, (PatricaTrieNodeEx.__proto__ || Object.getPrototypeOf(PatricaTrieNodeEx)).call(this, Key, Parent));

		if (true === _this._IsRoot && 'undefined' === typeof Value) {
			IsRoot = true;
		}

		_this._IsRoot = IsRoot;

		if (false === IsRoot) {
			_this._IsEnding = true;
		} else {
			_this._IsEnding = false;
		}

		if (false === IsRoot) {
			_this.__Value = Value;
		}
		return _this;
	}

	_createClass(PatricaTrieNodeEx, [{
		key: 'setValue',
		value: function setValue(Value) {
			this.__Value = Value;
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.__Value;
		}
	}, {
		key: '_getValues',
		value: function _getValues(Return) {
			var Child = void 0;

			if (true === this._IsEnding) {
				Return.push(this.__Value);
			}

			for (Child in this._Children) {
				this._Children[Child]._getValues(Return);
			}
		}
	}, {
		key: '_getValuesFilter',
		value: function _getValuesFilter(Return, Filter) {
			var Child = void 0;

			if (true === this._IsEnding) {
				if (true === Filter(this.__Value)) {
					Return.push(this.__Value);
				}
			}

			for (Child in this._Children) {
				this._Children[Child]._getValuesFilter(Return, Filter);
			}
		}
	}, {
		key: 'getValues',
		value: function getValues() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Output = [];

			if ('function' === typeof Filter) {
				this._getValuesFilter(Output, Filter);
			} else {
				this._getValues(Output);
			}

			return Output;
		}
	}, {
		key: 'getKeyAndValue',
		value: function getKeyAndValue() {
			var Key = void 0;
			var Return = {};

			if (false === this._getParent()._IsRoot) {
				Key = this._getParent().getKey();
			} else {
				Key = '';
			}

			Key += this._getKey();

			Return[Key] = this.__Value;
			return Return;
		}
	}, {
		key: '_getKeysAndValues',
		value: function _getKeysAndValues(Key, Return) {
			var Index = void 0;
			Key += this._getKey();

			if (true === this._IsEnding) {
				Return[Key] = this.__Value;
			}

			for (Index = 0; Index < this._Children.length; Index++) {
				this._Children[Index]._getKeysAndValues(Key, Return);
			}
		}
	}, {
		key: '_getKeysAndValuesFilter',
		value: function _getKeysAndValuesFilter(Key, Return, Filter) {
			var Index = void 0;
			Key += this._getKey();

			if (true === this._IsEnding) {
				if (true === Filter(Key, this.__Value)) {
					Return[Key] = this.__Value;
				}
			}

			for (Index = 0; Index < this._Children.length; Index++) {
				this._Children[Index]._getKeysAndValuesFilter(Key, Return, Filter);
			}
		}
	}, {
		key: 'getKeysAndValues',
		value: function getKeysAndValues() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Key = void 0;
			var Return = {};

			if (false === this._getParent()._IsRoot) {
				Key = this._getParent().getKey();
			} else {
				Key = '';
			}

			if ('function' === typeof Filter) {
				this._getKeysAndValuesFilter(Key, Return, Filter);
			} else {
				this._getKeysAndValues(Key, Return);
			}

			return Return;
		}
	}, {
		key: 'findByKeyIgnoreCase',
		value: function findByKeyIgnoreCase(Key) {
			var Prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var Exact = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var RootKeyLength = void 0;
			var Nodes = [];

			if ('string' !== typeof Key || 0 === Key.length) {
				return null;
			}

			if (true === Prefixed) {
				if (false === this.__Parent._IsRoot) {
					RootKeyLength = this.__Parent.getKey().length;
					Key = Key.substring(RootKeyLength);
				}
			}

			this._findByKeyIgnoreCase(Key.toLowerCase(), Exact, Nodes);
			return new PatricaTrieCollectionEx(Nodes);
		}
	}, {
		key: 'findByValue',
		value: function findByValue(Comparer) {
			var DepthFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var StartKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var EndKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

			var Index = void 0,
			    Found = void 0;
			var NewStart = '';
			var NewEnd = '';
			var Start = 0;
			var End = this._Children.length;

			if ('function' !== typeof Comparer.compare) {
				throw new TypeErrorException('Expected compare function of Compare object.');
			}

			if ('string' === typeof StartKey) {
				Start = this.__searchForKey(StartKey.charCodeAt(0));
				NewStart = StartKey.substring(1);
			}

			if ('string' === typeof EndKey) {
				End = this.__searchForKey(EndKey.charCodeAt(0));
				NewEnd = EndKey.substring(1);
			}

			if (-1 === Start && -1 === End) {
				return null;
			}

			if (Start > End) {
				return null;
			}

			if (true === this._IsEnding && false === DepthFirst) {
				if (true === Comparer.compare(this.__Value)) {
					return this;
				}
			}

			if (0 < NewStart.length) {
				if (Start === End) {
					Found = this._Children[Start].findByValue(Comparer, DepthFirst, NewStart, NewEnd);
				} else {
					Found = this._Children[Start].findByValue(Comparer, DepthFirst, NewStart);
				}

				if (null !== Found) {
					return Found;
				}
			}

			for (Index = Start; Index < End; Index++) {
				Found = this._Children[Index].findByValue(Comparer, DepthFirst);
				if (null !== Found) {
					return Found;
				}
			}

			if (0 < NewEnd.length) {
				Found = this._Children[End].findByValue(Comparer, DepthFirst, undefined, NewEnd);

				if (null !== Found) {
					return Found;
				}
			}

			if (true === this._IsEnding && true === DepthFirst) {
				if (true === Comparer.compare(this.__Value)) {
					return this;
				}
			}

			return null;
		}
	}, {
		key: '_findAllByValue',
		value: function _findAllByValue(Return, Comparer) {
			var DepthFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
			var StartKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
			var EndKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

			var Index = void 0;
			var NewStart = '';
			var NewEnd = '';
			var Start = 0;
			var End = this._Children.length;

			if ('string' === typeof StartKey) {
				Start = this.__searchForKey(StartKey.charCodeAt(0));
				NewStart = StartKey.substring(1);
			}

			if ('string' === typeof EndKey) {
				End = this.__searchForKey(EndKey.charCodeAt(0));
				NewEnd = EndKey.substring(1);
			}

			if (-1 === Start && -1 === End) {
				return;
			}

			if (Start > End) {
				return;
			}

			if (true === this._IsEnding && false === DepthFirst) {
				if (true === Comparer.compare(this.__Value)) {
					Return.push(this);
				}
			}

			if (0 < NewStart.length) {
				if (Start === End) {
					this._Children[Start]._findAllByValue(Return, Comparer, DepthFirst, NewStart, NewEnd);
				} else {
					this._Children[Start]._findAllByValue(Return, Comparer, DepthFirst, NewStart);
				}
			}

			for (Index = Start; Index < End; Index++) {
				this._Children[Index]._findAllByValue(Return, Comparer, DepthFirst);
			}

			if (0 < NewEnd.length) {
				this._Children[End].findAllByValue(Return, Comparer, DepthFirst, undefined, NewEnd);
			}

			if (true === this._IsEnding && true === DepthFirst) {
				if (true === Comparer.compare(this.__Value)) {
					Return.push(this);
				}
			}
		}
	}, {
		key: 'findAllByValue',
		value: function findAllByValue(Comparer) {
			var DepthFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var StartKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var EndKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

			var Return = [];

			if ('function' !== typeof Comparer.compare) {
				throw new TypeErrorException('Expected compare function of Compare object.');
			}

			this._findAllByValue(Return, Comparer, DepthFirst, StartKey, EndKey);

			return new PatricaTrieCollectionEx(Return);
		}
	}, {
		key: '_insertIntoChild',
		value: function _insertIntoChild(Key, Value) {
			var Index = this._insertPosition(Key.charCodeAt(0));

			if (-1 < Index) {
				this._Children[Index].insert(Key, Value);
				return;
			}

			this._Children.splice(-(Index + 1), 0, new PatricaTrieNodeEx(Key, Value, this));
		}
	}, {
		key: 'insert',
		value: function insert(Key, Value) {
			var Common = void 0,
			    NewKey = void 0,
			    NewChild = void 0,
			    NewChild2 = void 0;

			var NewKeyLength = Key.length;
			var CurrentKeyLength = this._getKey().length;
			var PrefixLength = void 0;

			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}
			// eslint-disable-next-line
			PrefixLength = this._longestPrefix(Key);

			if (NewKeyLength === CurrentKeyLength && PrefixLength === CurrentKeyLength) {
				this._IsEnding = true;
				this.__Value = Value;
			} else {
				if (PrefixLength === CurrentKeyLength) {
					NewKey = Key.substring(PrefixLength);
					this._insertIntoChild(NewKey, Value);
				} else if (PrefixLength === NewKeyLength) {
					NewChild = new PatricaTrieNodeEx(this._getKey().substring(PrefixLength), this.__Value, this);

					this.__Value = Value;

					NewChild._importChildren(this._Children);

					if (false === this._IsEnding) {
						this._IsEnding = true;
						NewChild.unsetEnd();
					}
					this._setKey(this._getKey().substring(0, PrefixLength));
					this._Children = [NewChild];
				} else {
					Common = this._getKey().substring(0, PrefixLength);
					NewChild = new PatricaTrieNodeEx(this._getKey().substring(PrefixLength), this.__Value, this);

					NewChild2 = new PatricaTrieNodeEx(Key.substring(PrefixLength), Value, this);

					NewChild._importChildren(this._Children);

					if (false === this._IsEnding) {
						NewChild.unsetEnd();
					}

					this._IsEnding = false;
					this._setKey(Common);
					this.__Value = undefined;

					if (NewChild._getKey().charCodeAt(0) < NewChild2._getKey().charCodeAt(0)) {
						this._Children = [NewChild, NewChild2];
					} else {
						this._Children = [NewChild2, NewChild];
					}
				}
			}
		}
	}, {
		key: '_insertIntoChildPreventOverwrite',
		value: function _insertIntoChildPreventOverwrite(Key, Value) {
			var Index = this._insertPosition(Key.charCodeAt(0));

			if (-1 < Index) {
				return this._Children[Index].insertPreventOverwrite(Key, Value);
			}

			this._Children.splice(-(Index + 1), 0, new PatricaTrieNodeEx(Key, Value, this));
			return null;
		}
	}, {
		key: 'insertPreventOverwrite',
		value: function insertPreventOverwrite(Key, Value) {
			var Common = void 0,
			    NewKey = void 0,
			    NewChild = void 0,
			    NewChild2 = void 0,
			    PrefixLength = void 0;
			var NewKeyLength = Key.length;
			var CurrentKeyLength = this.__Key.length;

			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}
			// eslint-disable-next-line
			PrefixLength = this._longestPrefix(Key);

			if (NewKeyLength === CurrentKeyLength && PrefixLength === CurrentKeyLength) {
				if (undefined === this.__Value) {
					this._IsEnding = true;
					this.__Value = Value;
					return null;
				} else {
					return this;
				}
			} else {
				if (PrefixLength === CurrentKeyLength) {
					NewKey = Key.substring(PrefixLength);
					return this._insertIntoChildPreventOverwrite(NewKey, Value);
				} else if (PrefixLength === NewKeyLength) {
					NewChild = new PatricaTrieNodeEx(this._getKey().substring(PrefixLength), this.__Value, this);

					this.__Value = Value;

					NewChild._importChildren(this._Children);

					if (false === this._IsEnding) {
						this._IsEnding = true;
						NewChild.unsetEnd();
					}
					this._setKey(this._getKey().substring(0, PrefixLength));
					this._Children = [NewChild];
					return null;
				} else {
					Common = this._getKey().substring(0, PrefixLength);
					NewChild = new PatricaTrieNodeEx(this._getKey().substring(PrefixLength), this.__Value, this);

					NewChild2 = new PatricaTrieNodeEx(Key.substring(PrefixLength), Value, this);

					NewChild._importChildren(this._Children);

					if (false === this._IsEnding) {
						NewChild.unsetEnd();
					}

					this._IsEnding = false;
					this._setKey(Common);
					this.__Value = undefined;

					if (NewChild._getKey().charCodeAt(0) < NewChild2._getKey().charCodeAt(0)) {
						this._Children = [NewChild, NewChild2];
					} else {
						this._Children = [NewChild2, NewChild];
					}

					return null;
				}
			}
		}
	}, {
		key: '_clean',
		value: function _clean(Key) {
			var Index = this.__searchForKey(Key);
			if (-1 === Index) {
				return;
			}

			this._Children.splice(Index, 1);

			if (true === this._IsRoot) {
				return;
			}

			if (0 === this._Children.length && false === this._IsEnding && 0 < this._getKey().length) {
				this._removeFromTrie();
			} else if (1 === this._Children.length && false === this._Children[0].hasChildren() && false === this._IsEnding) {
				this._setKey(this._getKey() + this._Children[0]._getKey());
				this.__Value = this._Children[0].getValue();
				this._IsEnding = this._Children[0].isAEnd();
				this._Children.pop();
			}
		}
	}, {
		key: 'remove',
		value: function remove(Key) {
			var Prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var ToDelete = this.findByKey(Key, Prefixed, true);

			if (null === ToDelete) {
				return;
			}

			if (true === ToDelete.hasChildren()) {
				if (true === ToDelete.isAEnd()) {
					ToDelete.setValue(null);
					ToDelete.unsetEnd();
				}
			} else {
				ToDelete._removeFromTrie();
			}
		}
	}, {
		key: 'removeByValue',
		value: function removeByValue(Comparer) {
			var DepthFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var StartKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var EndKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

			var ToDelete = this.findByValue(Comparer, DepthFirst, StartKey, EndKey);

			if (null === ToDelete) {
				return;
			}

			if (true === ToDelete.hasChildren()) {
				if (true === ToDelete.isAEnd()) {
					ToDelete.setValue(null);
					ToDelete.unsetEnd();
				}
			} else {
				ToDelete._removeFromTrie();
			}
		}
	}, {
		key: '_serialize',
		value: function _serialize(ValueSerializer, Output) {
			var Value = void 0,
			    Child = void 0;

			Output.push('[' + this._getKey().length + ':' + this._getKey());
			if (true === this._IsEnding) {
				Value = ValueSerializer(this.__Value);
				Output.push(Value.length + ':' + Value);
			} else {
				Output.push('0');
			}

			for (Child in this._Children) {
				this._Children[Child]._serialize(ValueSerializer, Output);
			}

			Output.push(']');
		}
	}, {
		key: 'serialize',
		value: function serialize(ValueSerializer) {
			var Output = [];
			if ('function' !== typeof ValueSerializer) {
				throw new TypeErrorException('Expected a function for value serializer.');
			}

			this._serialize(ValueSerializer, Output);

			return Output.join('');
		}
	}, {
		key: '_fromString',
		value: function _fromString(Nodes, Position, ValueDeserializer) {
			var ImportNode = void 0;
			var Imports = [];

			while (Nodes.length > Position) {
				ImportNode = PatricaTrieNodeEx._loadFromString(Nodes, Position, this, ValueDeserializer);
				Position = ImportNode[0];
				Imports.push(ImportNode[1]);
				if (']' === Nodes.charAt(Position)) {
					this._importChildren(Imports);
					this._Children = this._Children.sort(PatricaTrieNodeBase.sortChildes);
					return ++Position;
				}
			}

			throw new ValueErrorException('Unexpected end of string @position ' + Position + '.');
		}
	}], [{
		key: '_loadFromString',
		value: function _loadFromString(NodeString, Position, Parent, ValueDeserializer) {
			var lastPosition = void 0,
			    KeyLength = void 0,
			    Key = void 0,
			    ValueLength = void 0,
			    Value = void 0,
			    Node = void 0;

			if ('[' !== NodeString.charAt(Position)) {
				throw new ValueErrorException('The given string is not valid. - Exspecetd [ got ' + NodeString.charAt(Position) + ' at position ' + Position + '.');
			}

			Position++;
			lastPosition = Position;
			while (47 < NodeString.charCodeAt(Position) && 58 > NodeString.charCodeAt(Position)) {
				Position++;
			}

			KeyLength = parseInt(NodeString.substring(lastPosition, Position));

			if (true === isNaN(KeyLength) || 0 === KeyLength) {
				throw new ValueErrorException('Illegal key length @position ' + lastPosition + '.');
			}

			Position++;
			Key = NodeString.substring(Position, Position + KeyLength);
			Position += KeyLength;
			lastPosition = Position;

			while (47 < NodeString.charCodeAt(Position) && 58 > NodeString.charCodeAt(Position)) {
				Position++;
			}
			ValueLength = parseInt(NodeString.substring(lastPosition, Position));

			if (true === isNaN(ValueLength)) {
				throw new ValueErrorException('Illegal value length @position ' + lastPosition + '.');
			}

			if (0 === ValueLength) {
				Node = new PatricaTrieNodeEx(Key, null, Parent);
				Node.unsetEnd();
			} else {
				Position++;
				Value = ValueDeserializer(NodeString.substring(Position, Position + ValueLength));
				Node = new PatricaTrieNodeEx(Key, Value, Parent);
				Position += ValueLength;
			}

			if (']' !== NodeString.charAt(Position)) {
				return [Node._fromString(NodeString, Position, ValueDeserializer), Node];
			} else {
				return [++Position, Node];
			}
		}
	}]);

	return PatricaTrieNodeEx;
}(PatricaTrieNode);
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* eslint-disable operator-linebreak */
var PatricaStaticTrieNode = exports.PatricaStaticTrieNode = function (_PatricaTrieNodeBase) {
	_inherits(PatricaStaticTrieNode, _PatricaTrieNodeBase);

	function PatricaStaticTrieNode(Key, Parent, Size, Normalizer) {
		_classCallCheck(this, PatricaStaticTrieNode);

		var IsRoot = false;

		var _this = _possibleConstructorReturn(this, (PatricaStaticTrieNode.__proto__ || Object.getPrototypeOf(PatricaStaticTrieNode)).call(this));

		if ('undefined' === typeof Key && 'undefined' === typeof Parent) {
			IsRoot = true;
		}

		_this._IsRoot = IsRoot;

		if (false === IsRoot) {
			if (true === Utils.isEmpty(Parent) || false === Parent instanceof PatricaStaticTrieNode) {
				throw new TypeErrorException('Expected a PatricaTrieNode as Parent.');
			}

			if ('string' !== typeof Key || true === Utils.isEmpty(Key)) {
				throw new TypeErrorException('Expected non empty key.');
			}

			_this._IsEnding = true;
		} else {
			_this._IsEnding = false;
		}

		if ('function' !== typeof Normalizer) {
			throw new TypeErrorException('Expected function for normalizing.');
		}

		if (0 >= Size) {
			throw new ValueErrorException('Expected size greater then zero.');
		}

		_this._setKey(Key);
		_this._setParent(Parent);
		_this._Children = new Array(Size);
		_this._Children.fill(null);
		_this.__Size = Size;
		return _this;
	}

	_createClass(PatricaStaticTrieNode, [{
		key: 'getSize',
		value: function getSize() {
			return this.__Size;
		}
	}, {
		key: '_findByKey',
		value: function _findByKey(Key, Exact) {
			var Found = void 0;
			if (0 === Key.length) {
				return null;
			}

			if (true === this._getKey().startsWith(Key)) {
				if (true === Exact && Key !== this._getKey()) {
					return null;
				} else {
					return this;
				}
			} else if (Key.startsWith(this._getKey())) {
				Key = Key.substring(this._getKey().length);
				Found = this.__Normalizer(Key.charAt(0));
				if (0 > Found || this.__Size <= Found) {
					return null;
				}

				return this._Children[Found]._findByKey(Key, Exact);
			} else {
				return null;
			}
		}
	}, {
		key: '_findByKeyIgnoreCase',
		value: function _findByKeyIgnoreCase(LowerKey, Exact, Return) {
			var Found = void 0,
			    CurrentKey = void 0;
			if (0 === LowerKey.length) {
				return null;
			}
			// eslint-disable-next-line
			CurrentKey = this._getKey().toLowerCase();

			if (true === CurrentKey.startsWith(LowerKey)) {
				if (true === Exact && CurrentKey !== LowerKey) {
					return;
				} else {
					Return.push(this);
					return;
				}
			} else if (LowerKey.startsWith(CurrentKey)) {
				LowerKey = LowerKey.substring(this._getKey().length);
				Found = this.__Normalizer(LowerKey.charAt(0));

				if (-1 < Found && this.__Size > Found) {
					this._Children[Found]._findByKeyIgnoreCase(LowerKey, Exact, Return);
				}

				Found = this.__Normalizer(LowerKey.charAt(0).toUpperCase());

				if (-1 < Found && this.__Size > Found) {
					this._Children[Found]._findByKeyIgnoreCase(LowerKey, Exact, Return);
				}
			}
		}
	}, {
		key: '_containsKeyIgnoreCase',
		value: function _containsKeyIgnoreCase(LowerKey) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Return = void 0,
			    Found = void 0,
			    CurrentKey = void 0;

			if (0 === LowerKey.length) {
				return;
			}
			// eslint-disable-next-line
			CurrentKey = this._getKey().toLowerCase();

			if (true === CurrentKey.startsWith(LowerKey)) {
				if (true === Exact && CurrentKey !== LowerKey) {
					return false;
				} else {
					return true;
				}
			} else if (LowerKey.startsWith(CurrentKey)) {
				LowerKey = LowerKey.substring(this._getKey().length);
				Found = this.__Normalizer(LowerKey.charAt(0));

				if (-1 < Found && this.__Size > Found) {
					Return = this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
					if (false === Return) {
						Found = this.__Normalizer(LowerKey.charAt(0));

						if (-1 < Found && this.__Size > Found) {
							return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
						}
					}

					return Return;
				} else {
					Found = this.__Normalizer(LowerKey.charAt(0));

					if (-1 < Found && this.__Size > Found) {
						return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
					}
				}
			}

			return false;
		}
	}, {
		key: '_insertIntoChild',
		value: function _insertIntoChild(Key) {
			var Index = this.__Normalizer(Key.charAt(0));

			if (-1 < Index && this.__Size > Index) {
				this._Children[Index].insert(Key);
				return;
			}

			this._Children.splice(-(Index + 1), 0, new PatricaStaticTrieNode(Key, this));
		}
	}, {
		key: 'insert',
		value: function insert(Key) {
			var Common = void 0,
			    NewKey = void 0,
			    NewChild = void 0,
			    NewChild2 = void 0,
			    Index = void 0;

			var NewKeyLength = Key.length;
			var CurrentKeyLength = this._getKey().length;
			var PrefixLength = void 0;

			if ('string' !== typeof Key || 0 === Key.length) {
				return;
			}
			// eslint-disable-next-line
			PrefixLength = this._longestPrefix(Key);

			if (NewKeyLength === CurrentKeyLength && PrefixLength === CurrentKeyLength) {
				this._IsEnding = true;
			} else {
				if (PrefixLength === CurrentKeyLength) {
					NewKey = Key.substring(PrefixLength);
					return this._insertIntoChild(NewKey);
				} else if (PrefixLength === NewKeyLength) {
					NewChild = new PatricaStaticTrieNode(this._getKey().substring(PrefixLength), this, this.__Size, this.__Normalizer);

					NewChild._importChildren(this._Children);

					if (false === this._IsEnding) {
						this._IsEnding = true;
						NewChild.unsetEnd();
					}
					this._setKey(this._getKey().substring(0, PrefixLength));
					this._Children = new Array(this.__Size);

					Index = this.__Normalizer(NewChild._getKey().charAt(0));
					this._Children[Index] = NewChild;
				} else {
					Common = this._getKey().substring(0, PrefixLength);
					NewChild = new PatricaStaticTrieNode(this._getKey().substring(PrefixLength), this, this.__Size, this.__Normalizer);

					NewChild2 = new PatricaStaticTrieNode(Key.substring(PrefixLength), this, this.__Size, this.__Normalizer);

					NewChild._importChildren(this._Children);

					if (false === this._IsEnding) {
						NewChild.unsetEnd();
					}

					this._IsEnding = false;
					this._setKey(Common);
					this._Children = new Array(this.__Size);

					Index = this.__Normalizer(NewChild._getKey().charAt(0));
					this._Children[Index] = NewChild;

					Index = this.__Normalizer(NewChild2._getKey().charAt(0));
					this._Children[Index] = NewChild2;
				}
			}
		}
	}, {
		key: '_removeFromTrie',
		value: function _removeFromTrie() {
			this._getParent()._clean(this._getKey().charCodeAt(0));
		}
	}, {
		key: '_clean',
		value: function _clean(Key) {
			var Index = this.__Normalizer(Key);
			if (0 > Index && this.__Size <= Index) {
				return;
			}

			this._Children[Index] = null;

			if (true === this._IsRoot) {
				return;
			}

			if (0 === this._Children.length && false === this._IsEnding && 0 < this._getKey().length) {
				this._removeFromTrie();
			} else if (1 === this._Children.length && false === this._Children[0].hasChildren() && false === this._IsEnding) {
				this._setKey(this._getKey() + this._Children[0]._getKey());
				this._IsEnding = this._Children[0].isAEnd();
				this._Children[0] = null;
			}
		}
	}, {
		key: 'remove',
		value: function remove(Key) {
			var Prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var ToDelete = this.findByKey(Key, Prefixed, true);

			if (null === ToDelete) {
				return;
			}

			if (true === ToDelete.hasChildren()) {
				if (true === ToDelete.isAEnd()) {
					ToDelete.unsetEnd();
				}
			} else {
				ToDelete._removeFromTrie();
			}
		}
	}, {
		key: 'erase',
		value: function erase() {
			this._Children = new Array(this.__Size);
			this._Children.fill(null);
		}
	}, {
		key: '_serialize',
		value: function _serialize(ValueSerializer, Output) {
			var Value = void 0,
			    Child = void 0;

			Output.push('[' + this.__Size + ':' + this._getKey().length + ':' + this._getKey());
			if (true === this._IsEnding) {
				Value = ValueSerializer(this.__Value);
				Output.push(Value.length + ':' + Value);
			} else {
				Output.push('0');
			}

			for (Child in this._Children) {
				this._Children[Child]._serialize(ValueSerializer, Output);
			}

			Output.push(']');
		}
	}, {
		key: 'serialize',
		value: function serialize(ValueSerializer) {
			var Output = [];
			if ('function' !== typeof ValueSerializer) {
				throw new TypeErrorException('Expected a function for value serializer.');
			}

			this._serialize(ValueSerializer, Output);

			return Output.join('');
		}
	}]);

	return PatricaStaticTrieNode;
}(PatricaTrieNodeBase);
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* eslint-disable operator-linebreak */
var PatricaStaticTrieNodeFx = exports.PatricaStaticTrieNodeFx = function (_PatricaStaticTrieNod) {
	_inherits(PatricaStaticTrieNodeFx, _PatricaStaticTrieNod);

	function PatricaStaticTrieNodeFx(Key, Value, Parent, Size, Normalizer) {
		_classCallCheck(this, PatricaStaticTrieNodeFx);

		var IsRoot = false;

		var _this = _possibleConstructorReturn(this, (PatricaStaticTrieNodeFx.__proto__ || Object.getPrototypeOf(PatricaStaticTrieNodeFx)).call(this, Key, Parent, Size, Normalizer));

		if (true === _this._IsRoot && 'undefined' === typeof Value) {
			IsRoot = true;
		}

		_this._IsRoot = IsRoot;

		if (false === IsRoot) {
			_this._IsEnding = true;
		} else {
			_this._IsEnding = false;
		}

		if (false === IsRoot) {
			_this.__Value = Value;
		}
		return _this;
	}

	_createClass(PatricaStaticTrieNodeFx, [{
		key: 'setValue',
		value: function setValue(Value) {
			this.__Value = Value;
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.__Value;
		}
	}, {
		key: '_getValues',
		value: function _getValues(Return) {
			var Child = void 0;

			if (true === this._IsEnding) {
				Return.push(this.__Value);
			}

			for (Child in this._Children) {
				this._Children[Child]._getValues(Return);
			}
		}
	}, {
		key: '_getValuesFilter',
		value: function _getValuesFilter(Return, Filter) {
			var Child = void 0;

			if (true === this._IsEnding) {
				if (true === Filter(this.__Value)) {
					Return.push(this.__Value);
				}
			}

			for (Child in this._Children) {
				this._Children[Child]._getValuesFilter(Return, Filter);
			}
		}
	}, {
		key: 'getValues',
		value: function getValues() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Output = [];

			if ('function' === typeof Filter) {
				this._getValuesFilter(Output, Filter);
			} else {
				this._getValues(Output);
			}

			return Output;
		}
	}, {
		key: 'getKeyAndValue',
		value: function getKeyAndValue() {
			var Key = void 0;
			var Return = {};

			if (false === this._getParent()._IsRoot) {
				Key = this._getParent().getKey();
			} else {
				Key = '';
			}

			Key += this._getKey();

			Return[Key] = this.__Value;
			return Return;
		}
	}, {
		key: '_getKeysAndValues',
		value: function _getKeysAndValues(Key, Return) {
			var Index = void 0;
			Key += this._getKey();

			if (true === this._IsEnding) {
				Return[Key] = this.__Value;
			}

			for (Index = 0; Index < this._Children.length; Index++) {
				this._Children[Index]._getKeysAndValues(Key, Return);
			}
		}
	}, {
		key: '_getKeysAndValuesFilter',
		value: function _getKeysAndValuesFilter(Key, Return, Filter) {
			var Index = void 0;
			Key += this._getKey();

			if (true === this._IsEnding) {
				if (true === Filter(Key, this.__Value)) {
					Return[Key] = this.__Value;
				}
			}

			for (Index = 0; Index < this._Children.length; Index++) {
				this._Children[Index]._getKeysAndValuesFilter(Key, Return, Filter);
			}
		}
	}, {
		key: 'getKeysAndValues',
		value: function getKeysAndValues() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Key = void 0;
			var Return = {};

			if (false === this._getParent()._IsRoot) {
				Key = this._getParent().getKey();
			} else {
				Key = '';
			}

			if ('function' === typeof Filter) {
				this._getKeysAndValuesFilter(Key, Return, Filter);
			} else {
				this._getKeysAndValues(Key, Return);
			}

			return Return;
		}
	}, {
		key: 'findByKeyIgnoreCase',
		value: function findByKeyIgnoreCase(Key) {
			var Prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var Exact = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var RootKeyLength = void 0;
			var Nodes = [];

			if ('string' !== typeof Key || 0 === Key.length) {
				return null;
			}

			if (true === Prefixed) {
				if (false === this.__Parent._IsRoot) {
					RootKeyLength = this.__Parent.getKey().length;
					Key = Key.substring(RootKeyLength);
				}
			}

			this._findByKeyIgnoreCase(Key.toLowerCase(), Exact, Nodes);
			return new PatricaTrieCollectionEx(Nodes);
		}
	}, {
		key: 'findByValue',
		value: function findByValue(Comparer) {
			var DepthFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var StartKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var EndKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

			var Index = void 0,
			    Found = void 0;
			var NewStart = '';
			var NewEnd = '';
			var Start = 0;
			var End = this._Children.length;

			if ('function' !== typeof Comparer.compare) {
				throw new TypeErrorException('Expected compare function of Compare object.');
			}

			if ('string' === typeof StartKey) {
				Start = this.__searchForKey(StartKey.charCodeAt(0));
				NewStart = StartKey.substring(1);
			}

			if ('string' === typeof EndKey) {
				End = this.__searchForKey(EndKey.charCodeAt(0));
				NewEnd = EndKey.substring(1);
			}

			if (-1 === Start && -1 === End) {
				return null;
			}

			if (Start > End) {
				return null;
			}

			if (true === this._IsEnding && false === DepthFirst) {
				if (true === Comparer.compare(this.__Value)) {
					return this;
				}
			}

			if (0 < NewStart.length) {
				if (Start === End) {
					Found = this._Children[Start].findByValue(Comparer, DepthFirst, NewStart, NewEnd);
				} else {
					Found = this._Children[Start].findByValue(Comparer, DepthFirst, NewStart);
				}

				if (null !== Found) {
					return Found;
				}
			}

			for (Index = Start; Index < End; Index++) {
				Found = this._Children[Index].findByValue(Comparer, DepthFirst);
				if (null !== Found) {
					return Found;
				}
			}

			if (0 < NewEnd.length) {
				Found = this._Children[End].findByValue(Comparer, DepthFirst, undefined, NewEnd);

				if (null !== Found) {
					return Found;
				}
			}

			if (true === this._IsEnding && true === DepthFirst) {
				if (true === Comparer.compare(this.__Value)) {
					return this;
				}
			}

			return null;
		}
	}, {
		key: '_findAllByValue',
		value: function _findAllByValue(Return, Comparer) {
			var DepthFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
			var StartKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
			var EndKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

			var Index = void 0;
			var NewStart = '';
			var NewEnd = '';
			var Start = 0;
			var End = this._Children.length;

			if ('string' === typeof StartKey) {
				Start = this.__searchForKey(StartKey.charCodeAt(0));
				NewStart = StartKey.substring(1);
			}

			if ('string' === typeof EndKey) {
				End = this.__searchForKey(EndKey.charCodeAt(0));
				NewEnd = EndKey.substring(1);
			}

			if (-1 === Start && -1 === End) {
				return;
			}

			if (Start > End) {
				return;
			}

			if (true === this._IsEnding && false === DepthFirst) {
				if (true === Comparer.compare(this.__Value)) {
					Return.push(this);
				}
			}

			if (0 < NewStart.length) {
				if (Start === End) {
					this._Children[Start]._findAllByValue(Return, Comparer, DepthFirst, NewStart, NewEnd);
				} else {
					this._Children[Start]._findAllByValue(Return, Comparer, DepthFirst, NewStart);
				}
			}

			for (Index = Start; Index < End; Index++) {
				this._Children[Index]._findAllByValue(Return, Comparer, DepthFirst);
			}

			if (0 < NewEnd.length) {
				this._Children[End].findAllByValue(Return, Comparer, DepthFirst, undefined, NewEnd);
			}

			if (true === this._IsEnding && true === DepthFirst) {
				if (true === Comparer.compare(this.__Value)) {
					Return.push(this);
				}
			}
		}
	}, {
		key: 'findAllByValue',
		value: function findAllByValue(Comparer) {
			var DepthFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var StartKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var EndKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

			var Return = [];

			if ('function' !== typeof Comparer.compare) {
				throw new TypeErrorException('Expected compare function of Compare object.');
			}

			this._findAllByValue(Return, Comparer, DepthFirst, StartKey, EndKey);

			return new PatricaTrieCollectionEx(Return);
		}
	}, {
		key: '_insertIntoChild',
		value: function _insertIntoChild(Key, Value) {
			var Index = this._insertPosition(Key.charCodeAt(0));

			if (-1 < Index) {
				this._Children[Index].insert(Key, Value);
				return;
			}

			this._Children.splice(-(Index + 1), 0, new PatricaStaticTrieNodeFx(Key, Value, this));
		}
	}, {
		key: 'insert',
		value: function insert(Key, Value) {
			var Common = void 0,
			    NewKey = void 0,
			    NewChild = void 0,
			    NewChild2 = void 0,
			    Index = void 0;

			var NewKeyLength = Key.length;
			var CurrentKeyLength = this._getKey().length;
			var PrefixLength = void 0;

			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}
			// eslint-disable-next-line
			PrefixLength = this._longestPrefix(Key);

			if (NewKeyLength === CurrentKeyLength && PrefixLength === CurrentKeyLength) {
				this._IsEnding = true;
				this.__Value = Value;
			} else {
				if (PrefixLength === CurrentKeyLength) {
					NewKey = Key.substring(PrefixLength);
					this._insertIntoChild(NewKey, Value);
				} else if (PrefixLength === NewKeyLength) {
					NewChild = new PatricaStaticTrieNodeFx(this._getKey().substring(PrefixLength), this.__Value, this);

					this.__Value = Value;

					NewChild._importChildren(this._Children);

					if (false === this._IsEnding) {
						this._IsEnding = true;
						NewChild.unsetEnd();
					}
					this._setKey(this._getKey().substring(0, PrefixLength));
					this._Children = new Array(this.__Size);

					Index = this.__Normalizer(NewChild._getKey().charAt(0));
					this._Children[Index] = NewChild;
				} else {
					Common = this._getKey().substring(0, PrefixLength);
					NewChild = new PatricaStaticTrieNodeFx(this._getKey().substring(PrefixLength), this.__Value, this);

					NewChild2 = new PatricaStaticTrieNodeFx(Key.substring(PrefixLength), Value, this);

					NewChild._importChildren(this._Children);

					if (false === this._IsEnding) {
						NewChild.unsetEnd();
					}

					this._IsEnding = false;
					this._setKey(Common);
					this.__Value = undefined;
					this._Children = new Array(this.__Size);

					Index = this.__Normalizer(NewChild._getKey().charAt(0));
					this._Children[Index] = NewChild;

					Index = this.__Normalizer(NewChild2._getKey().charAt(0));
					this._Children[Index] = NewChild2;
				}
			}
		}
	}, {
		key: '_insertIntoChildPreventOverwrite',
		value: function _insertIntoChildPreventOverwrite(Key, Value) {
			var Index = this._insertPosition(Key.charCodeAt(0));

			if (-1 < Index) {
				return this._Children[Index].insertPreventOverwrite(Key, Value);
			}

			this._Children.splice(-(Index + 1), 0, new PatricaStaticTrieNodeFx(Key, Value, this));
			return null;
		}
	}, {
		key: 'insertPreventOverwrite',
		value: function insertPreventOverwrite(Key, Value) {
			var Common = void 0,
			    NewKey = void 0,
			    NewChild = void 0,
			    NewChild2 = void 0,
			    PrefixLength = void 0,
			    Index = void 0;
			var NewKeyLength = Key.length;
			var CurrentKeyLength = this.__Key.length;

			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}
			// eslint-disable-next-line
			PrefixLength = this._longestPrefix(Key);

			if (NewKeyLength === CurrentKeyLength && PrefixLength === CurrentKeyLength) {
				if (undefined === this.__Value) {
					this._IsEnding = true;
					this.__Value = Value;
					return null;
				} else {
					return this;
				}
			} else {
				if (PrefixLength === CurrentKeyLength) {
					NewKey = Key.substring(PrefixLength);
					return this._insertIntoChildPreventOverwrite(NewKey, Value);
				} else if (PrefixLength === NewKeyLength) {
					NewChild = new PatricaStaticTrieNodeFx(this._getKey().substring(PrefixLength), this.__Value, this);

					this.__Value = Value;

					NewChild._importChildren(this._Children);

					if (false === this._IsEnding) {
						this._IsEnding = true;
						NewChild.unsetEnd();
					}
					this._setKey(this._getKey().substring(0, PrefixLength));
					this._Children = new Array(this.__Size);

					Index = this.__Normalizer(NewChild._getKey().charAt(0));
					this._Children[Index] = NewChild;
					return null;
				} else {
					Common = this._getKey().substring(0, PrefixLength);
					NewChild = new PatricaStaticTrieNodeFx(this._getKey().substring(PrefixLength), this.__Value, this);

					NewChild2 = new PatricaStaticTrieNodeFx(Key.substring(PrefixLength), Value, this);

					NewChild._importChildren(this._Children);

					if (false === this._IsEnding) {
						NewChild.unsetEnd();
					}

					this._IsEnding = false;
					this._setKey(Common);
					this.__Value = undefined;
					this._Children = new Array(this.__Size);

					Index = this.__Normalizer(NewChild._getKey().charAt(0));
					this._Children[Index] = NewChild;

					Index = this.__Normalizer(NewChild2._getKey().charAt(0));
					this._Children[Index] = NewChild2;

					return null;
				}
			}
		}
	}, {
		key: 'remove',
		value: function remove(Key) {
			var Prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var ToDelete = this.findByKey(Key, Prefixed, true);

			if (null === ToDelete) {
				return;
			}

			if (true === ToDelete.hasChildren()) {
				if (true === ToDelete.isAEnd()) {
					ToDelete.setValue(null);
					ToDelete.unsetEnd();
				}
			} else {
				ToDelete._removeFromTrie();
			}
		}
	}, {
		key: 'removeByValue',
		value: function removeByValue(Comparer) {
			var DepthFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var StartKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var EndKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

			var ToDelete = this.findByValue(Comparer, DepthFirst, StartKey, EndKey);

			if (null === ToDelete) {
				return;
			}

			if (true === ToDelete.hasChildren()) {
				if (true === ToDelete.isAEnd()) {
					ToDelete.setValue(null);
					ToDelete.unsetEnd();
				}
			} else {
				ToDelete._removeFromTrie();
			}
		}
	}, {
		key: '_serialize',
		value: function _serialize(ValueSerializer, Output) {
			var Value = void 0,
			    Child = void 0;

			Output.push('[' + this.__Size + ':' + this._getKey().length + ':' + this._getKey());
			if (true === this._IsEnding) {
				Value = ValueSerializer(this.__Value);
				Output.push(Value.length + ':' + Value);
			} else {
				Output.push('0');
			}

			for (Child in this._Children) {
				this._Children[Child]._serialize(ValueSerializer, Output);
			}

			Output.push(']');
		}
	}, {
		key: 'serialize',
		value: function serialize(ValueSerializer) {
			var Output = [];
			if ('function' !== typeof ValueSerializer) {
				throw new TypeErrorException('Expected a function for value serializer.');
			}

			this._serialize(ValueSerializer, Output);

			return Output.join('');
		}
	}]);

	return PatricaStaticTrieNodeFx;
}(PatricaStaticTrieNode);
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* eslint-disable operator-linebreak */
var PatricaTrieCollection = exports.PatricaTrieCollection = function (_PatricaTrieNodeBase) {
	_inherits(PatricaTrieCollection, _PatricaTrieNodeBase);

	function PatricaTrieCollection(Items) {
		_classCallCheck(this, PatricaTrieCollection);

		var _this = _possibleConstructorReturn(this, (PatricaTrieCollection.__proto__ || Object.getPrototypeOf(PatricaTrieCollection)).call(this));

		if (false === Array.isArray(Items)) {
			throw new TypeErrorException('Expected array of patrica nodes.');
		}

		_this._Children = Items;
		return _this;
	}

	_createClass(PatricaTrieCollection, [{
		key: 'size',
		value: function size() {
			return this._Children.length;
		}
	}, {
		key: 'item',
		value: function item(Index) {
			if (0 > Index || this._Children.length <= Index) {
				return null;
			} else {
				return this._Children[Index];
			}
		}
	}, {
		key: 'getKeys',
		value: function getKeys() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Index = void 0,
			    Key = void 0;
			var Keys = [];

			if ('function' === typeof Filter) {
				for (Index = 0; Index < this._Children.length; Index++) {
					Key = this._Children[Index].getKey();
					if (true === Filter(Key)) {
						Keys.push(Key);
					}
				}
			} else {
				for (Index = 0; Index < this._Children.length; Index++) {
					Keys.push(this._Children[Index].getKey());
				}
			}

			return Keys;
		}
	}, {
		key: 'getAllKeys',
		value: function getAllKeys() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Index = void 0,
			    Prefix = void 0;
			var Keys = [];

			if ('function' === typeof Filter) {
				for (Index = 0; Index < this._Children.length; Index++) {
					Prefix = this._Children[Index]._getPrefix();
					this._Children[Index]._getKeysFilter(Prefix, Keys, Filter);
				}
			} else {
				for (Index = 0; Index < this._Children.length; Index++) {
					Prefix = this._Children[Index]._getPrefix();
					this._Children[Index]._getKeys(Prefix, Keys);
				}
			}

			return Keys;
		}
	}, {
		key: 'remove',
		value: function remove(Item) {
			if (0 > Item || this._Children.length <= Item) {
				return;
			}

			this._Children.splice(Item, 1);
		}
	}, {
		key: 'toArray',
		value: function toArray() {
			return this._Children;
		}
	}, {
		key: 'isAEnd',
		value: function isAEnd() {
			throw new InvalidMethodException('isAEnd');
		}
	}, {
		key: 'unsetEnd',
		value: function unsetEnd() {
			throw new InvalidMethodException('unsetEnd');
		}
	}, {
		key: 'hasChildren',
		value: function hasChildren() {
			return 0 < this._Children.length;
		}
	}, {
		key: 'findByKey',
		value: function findByKey() {
			throw new InvalidMethodException('findByKey');
		}
	}, {
		key: 'findByKeyIgnoreCase',
		value: function findByKeyIgnoreCase() {
			throw new InvalidMethodException('findByKeyIgnoreCase');
		}
	}, {
		key: 'containsKey',
		value: function containsKey() {
			throw new InvalidMethodException('containsKey');
		}
	}, {
		key: 'containsKeyIgnoreCase',
		value: function containsKeyIgnoreCase() {
			throw new InvalidMethodException('containsKeyIgnoreCase');
		}

		// eslint-disable-next-line

	}, {
		key: 'insert',
		value: function insert(Key) {
			throw new InvalidMethodException('insert');
		}
	}, {
		key: 'erase',
		value: function erase() {
			throw new InvalidMethodException('erase');
		}
	}, {
		key: 'serialize',
		value: function serialize() {
			throw new InvalidMethodException('serialize');
		}
	}]);

	return PatricaTrieCollection;
}(PatricaTrieNodeBase);
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* eslint-disable operator-linebreak */
var PatricaTrieCollectionEx = exports.PatricaTrieCollectionEx = function (_PatricaTrieCollectio) {
	_inherits(PatricaTrieCollectionEx, _PatricaTrieCollectio);

	function PatricaTrieCollectionEx(Items) {
		_classCallCheck(this, PatricaTrieCollectionEx);

		return _possibleConstructorReturn(this, (PatricaTrieCollectionEx.__proto__ || Object.getPrototypeOf(PatricaTrieCollectionEx)).call(this, Items));
	}

	_createClass(PatricaTrieCollectionEx, [{
		key: 'getValues',
		value: function getValues() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Index = void 0,
			    Value = void 0;
			var Values = [];

			if ('function' === typeof Filter) {
				for (Index = 0; Index < this._Children.length; Index++) {
					Value = this._Children[Index].getValue();
					if (true === Filter(Value)) {
						Values.push(Value);
					}
				}
			} else {
				for (Index = 0; Index < this._Children.length; Index++) {
					Values.push(this._Children[Index].getValue());
				}
			}

			return Values;
		}
	}, {
		key: 'getAllValues',
		value: function getAllValues() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Index = void 0;
			var Values = [];

			if ('function' === typeof Filter) {
				for (Index = 0; Index < this._Children.length; Index++) {
					this._Children[Index]._getValuesFilter(Values, Filter);
				}
			} else {
				for (Index = 0; Index < this._Children.length; Index++) {
					this._Children[Index]._getValuesFilter(Values);
				}
			}

			return Values;
		}
	}, {
		key: 'getKeysAndValues',
		value: function getKeysAndValues() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Index = void 0,
			    KeyAndValue = void 0,
			    Key = void 0;
			var KeysAndValues = {};

			if ('function' === typeof Filter) {
				for (Index = 0; Index < this._Children.length; Index++) {
					KeyAndValue = this._Children[Index].getKeyAndValue();
					Key = Object.getOwnPropertyNames(KeyAndValue)[0];
					if (true === Filter(Key, KeyAndValue[Key])) {
						KeysAndValues[Key] = KeyAndValue[Key];
					}
				}
			} else {
				for (Index = 0; Index < this._Children.length; Index++) {
					KeyAndValue = this._Children[Index].getKeyAndValue();
					Key = Object.getOwnPropertyNames(KeyAndValue)[0];
					KeysAndValues[Key] = KeyAndValue[Key];
				}
			}

			return KeysAndValues;
		}
	}, {
		key: 'getAllKeysAndValues',
		value: function getAllKeysAndValues() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Index = void 0,
			    Prefix = void 0;
			var KeysAndValues = {};

			if ('function' === typeof Filter) {
				for (Index = 0; Index < this._Children.length; Index++) {
					Prefix = this._Children[Index]._getPrefix();
					this._Children[Index]._getKeysAndValuesFilter(Prefix, KeysAndValues, Filter);
				}
			} else {
				for (Index = 0; Index < this._Children.length; Index++) {
					Prefix = this._Children[Index]._getPrefix();
					this._Children[Index]._getKeysAndValues(Prefix, KeysAndValues);
				}
			}

			return KeysAndValues;
		}
	}]);

	return PatricaTrieCollectionEx;
}(PatricaTrieCollection);
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* eslint-disable operator-linebreak */

var PatricaTrie = exports.PatricaTrie = function (_PatricaTrieNode) {
	_inherits(PatricaTrie, _PatricaTrieNode);

	function PatricaTrie() {
		_classCallCheck(this, PatricaTrie);

		return _possibleConstructorReturn(this, (PatricaTrie.__proto__ || Object.getPrototypeOf(PatricaTrie)).call(this, undefined, undefined));
	}

	_createClass(PatricaTrie, [{
		key: 'getKeys',
		value: function getKeys() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Child = void 0;
			var Output = [];

			if ('function' === typeof Filter) {
				for (Child in this._Children) {
					this._Children[Child]._getKeysFilter('', Output, Filter);
				}
			} else {
				for (Child in this._Children) {
					this._Children[Child]._getKeys('', Output);
				}
			}

			return Output;
		}
	}, {
		key: '__searchForKey',
		value: function __searchForKey(Key) {
			var Start = void 0,
			    End = void 0,
			    MiddleBinary = void 0,
			    MiddleInterpolation = void 0,
			    WhereStart = void 0,
			    WhereEnd = void 0,
			    Swap = void 0;
			var Interpolation = void 0,
			    Binary = void 0,
			    InterpolationIsDefined = void 0,
			    BinaryIsDefined = void 0;

			if (0 === this._Children.length) {
				return -1;
			} else {
				Start = 0;
				End = this._Children.length - 1;
			}

			if (0 === this._Children.length || this._Children[0]._getKey().charCodeAt(0) > Key) {
				return -1;
			}

			if (this._Children[End]._getKey().charCodeAt(0) < Key) {
				return -1;
			}

			while (Start <= End && this._Children.length > End) {
				WhereStart = this._Children[Start]._getKey().charCodeAt(0);
				WhereEnd = this._Children[End]._getKey().charCodeAt(0);

				MiddleBinary = Start + End >> 1;
				MiddleInterpolation = WhereEnd - WhereStart;
				if (0 !== MiddleInterpolation) {
					MiddleInterpolation = Math.round(Start + (Key - WhereStart) * (End - Start) / (WhereEnd - WhereStart));
				}

				if (MiddleBinary > MiddleInterpolation) {
					Swap = MiddleBinary;
					MiddleBinary = MiddleInterpolation;
					MiddleInterpolation = Swap;
				}

				Binary = this._Children[MiddleBinary];
				BinaryIsDefined = 'undefined' !== typeof Binary;
				Interpolation = this._Children[MiddleInterpolation];
				InterpolationIsDefined = 'undefined' !== typeof Interpolation;

				if (false === BinaryIsDefined && false === InterpolationIsDefined) {
					return -1;
				}

				if (true === BinaryIsDefined && Key === Binary._getKey().charCodeAt(0)) {
					return MiddleBinary;
				} else if (true === InterpolationIsDefined && Key === Interpolation._getKey().charCodeAt(0)) {
					return MiddleInterpolation;
				} else if (true === BinaryIsDefined && Key < Binary._getKey().charCodeAt(0)) {
					End = MiddleBinary - 1;
				} else if (true === InterpolationIsDefined && Key < Interpolation._getKey().charCodeAt(0)) {
					Start = MiddleBinary + 1;
					End = MiddleInterpolation + 1;
				} else {
					Start = MiddleInterpolation + 1;
				}
			}

			return -1;
		}

		// @override

	}, {
		key: 'findByKey',
		value: function findByKey(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Found = void 0;

			if ('string' !== typeof Key || 0 === Key.length) {
				return null;
			}
			// eslint-disable-next-line
			Found = this.__searchForKey(Key.charCodeAt(0));

			if (-1 === Found) {
				return null;
			} else {
				return this._Children[Found].findByKey(Key, false, Exact);
			}
		}
	}, {
		key: 'findByKeyIgnoreCase',
		value: function findByKeyIgnoreCase(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Found = void 0,
			    LowerKey = void 0;
			var Nodes = [];

			if ('string' !== typeof Key || 0 === Key.length) {
				return null;
			}
			// eslint-disable-next-line
			LowerKey = Key.toLowerCase();
			// eslint-disable-next-line
			Found = this.__searchForKey(LowerKey.charCodeAt(0));
			if (-1 !== Found) {
				this._Children[Found]._findByKeyIgnoreCase(LowerKey, Exact, Nodes);
			}

			Found = this.__searchForKey(LowerKey.charAt(0).toUpperCase().charCodeAt(0));
			if (-1 !== Found) {
				this._Children[Found]._findByKeyIgnoreCase(LowerKey, Exact, Nodes);
			}

			return new PatricaTrieCollection(Nodes);
		}

		// @override

	}, {
		key: 'containsKey',
		value: function containsKey(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Found = this.findByKey(Key, Exact);
			if (null === Found) {
				return false;
			} else {
				return true;
			}
		}
	}, {
		key: '_containsKeyIgnoreCase',
		value: function _containsKeyIgnoreCase(LowerKey) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Return = void 0,
			    Found = void 0;

			Found = this.__searchForKey(LowerKey.charCodeAt(0));

			if (-1 !== Found) {
				Return = this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
				if (false === Return) {
					Found = this.__searchForKey(LowerKey.charAt(0).toUpperCase().charCodeAt(0));
					if (-1 !== Found) {
						return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
					}
				}
				return Return;
			} else {
				Found = this.__searchForKey(LowerKey.charAt(0).toUpperCase().charCodeAt(0));
				if (-1 !== Found) {
					return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
				}
			}
		}
	}, {
		key: 'containsKeyIgnoreCase',
		value: function containsKeyIgnoreCase(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}

			return this._containsKeyIgnoreCase(Key.toLowerCase(), Exact);
		}
	}, {
		key: 'insert',
		value: function insert(Key) {
			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}

			return this._insertIntoChild(Key);
		}
	}, {
		key: 'insertPreventOverwrite',
		value: function insertPreventOverwrite(Key) {
			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}

			return this._insertIntoChildPreventOverwrite(Key);
		}
	}, {
		key: 'remove',
		value: function remove(Key) {
			var ToDelete = this.findByKey(Key, true);

			if (null === ToDelete) {
				return;
			}

			if (true === ToDelete.hasChildren()) {
				if (true === ToDelete.isAEnd()) {
					ToDelete.unsetEnd();
				}
			} else {
				ToDelete._removeFromTrie();
			}
		}
	}, {
		key: 'serialize',
		value: function serialize() {
			var Child = void 0;
			var Output = ['[r'];

			for (Child in this._Children) {
				this._Children[Child]._serialize(Output);
			}
			Output.push(']');

			return Output.join('');
		}
	}], [{
		key: 'loadFromString',
		value: function loadFromString(Trie) {
			var Length = void 0,
			    NewTrie = void 0,
			    Position = void 0;
			if ('string' !== typeof Trie) {
				throw new TypeErrorException('Expected string to parse.');
			}

			// eslint-disable-next-line
			Length = Trie.length;

			if (3 > Length) {
				throw new ValueErrorException('The given string cannot be valid.');
			}

			if ('[' !== Trie.charAt(0)) {
				throw new ValueErrorException('The given string is not valid. - Exspecetd [ got ' + Trie.charAt(0) + ' at position 0.');
			}

			if ('r' !== Trie.charAt(1)) {
				throw new ValueErrorException('The given string is not valid. - Exspecetd r got ' + Trie.charAt(1) + ' at position 1.');
			}

			NewTrie = new PatricaTrie();

			if (']' === Trie.charAt(2)) {
				return NewTrie;
			}

			// eslint-disable-next-line
			Position = NewTrie._fromString(Trie, 2);

			if (Position !== Length) {
				throw new ValueErrorException('The given string is not valid. - Exspecetd end of string @position ' + Position + '.');
			}

			return NewTrie;
		}
	}]);

	return PatricaTrie;
}(PatricaTrieNode);
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* eslint-disable operator-linebreak */
var PatricaTrieEx = exports.PatricaTrieEx = function (_PatricaTrieNodeEx) {
	_inherits(PatricaTrieEx, _PatricaTrieNodeEx);

	function PatricaTrieEx() {
		_classCallCheck(this, PatricaTrieEx);

		return _possibleConstructorReturn(this, (PatricaTrieEx.__proto__ || Object.getPrototypeOf(PatricaTrieEx)).call(this, undefined, undefined, undefined));
	}

	_createClass(PatricaTrieEx, [{
		key: 'setValue',
		value: function setValue() {
			throw new InvalidMethodException('setValue');
		}
	}, {
		key: 'getKeys',
		value: function getKeys() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Child = void 0;
			var Output = [];

			if ('function' === typeof Filter) {
				for (Child in this._Children) {
					this._Children[Child]._getKeysFilter('', Output, Filter);
				}
			} else {
				for (Child in this._Children) {
					this._Children[Child]._getKeys('', Output);
				}
			}

			return Output;
		}
	}, {
		key: 'getValues',
		value: function getValues() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Child = void 0;
			var Output = [];

			if ('function' === typeof Filter) {
				for (Child in this._Children) {
					this._Children[Child]._getValuesFilter(Output, Filter);
				}
			} else {
				for (Child in this._Children) {
					this._Children[Child]._getValues(Output);
				}
			}

			return Output;
		}
	}, {
		key: 'getKeyAndValue',
		value: function getKeyAndValue() {
			return null;
		}
	}, {
		key: 'getKeysAndValues',
		value: function getKeysAndValues() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Child = void 0;
			var Return = {};

			if ('function' === typeof Filter) {
				for (Child in this._Children) {
					this._Children[Child]._getKeysAndValuesFilter('', Return, Filter);
				}
			} else {
				for (Child in this._Children) {
					this._Children[Child]._getKeysAndValues('', Return);
				}
			}

			return Return;
		}
	}, {
		key: '__searchForKey',
		value: function __searchForKey(Key) {
			var Start = void 0,
			    End = void 0,
			    MiddleBinary = void 0,
			    MiddleInterpolation = void 0,
			    WhereStart = void 0,
			    WhereEnd = void 0,
			    Swap = void 0;
			var Interpolation = void 0,
			    Binary = void 0,
			    InterpolationIsDefined = void 0,
			    BinaryIsDefined = void 0;

			if (0 === this._Children.length) {
				return -1;
			} else {
				Start = 0;
				End = this._Children.length - 1;
			}

			if (0 === this._Children.length || this._Children[0]._getKey().charCodeAt(0) > Key) {
				return -1;
			}

			if (this._Children[End]._getKey().charCodeAt(0) < Key) {
				return -1;
			}

			while (Start <= End && this._Children.length > End) {
				WhereStart = this._Children[Start]._getKey().charCodeAt(0);
				WhereEnd = this._Children[End]._getKey().charCodeAt(0);

				MiddleBinary = Start + End >> 1;
				MiddleInterpolation = WhereEnd - WhereStart;
				if (0 !== MiddleInterpolation) {
					MiddleInterpolation = Math.round(Start + (Key - WhereStart) * (End - Start) / (WhereEnd - WhereStart));
				}

				if (MiddleBinary > MiddleInterpolation) {
					Swap = MiddleBinary;
					MiddleBinary = MiddleInterpolation;
					MiddleInterpolation = Swap;
				}

				Binary = this._Children[MiddleBinary];
				BinaryIsDefined = 'undefined' !== typeof Binary;
				Interpolation = this._Children[MiddleInterpolation];
				InterpolationIsDefined = 'undefined' !== typeof Interpolation;

				if (false === BinaryIsDefined && false === InterpolationIsDefined) {
					return -1;
				}

				if (true === BinaryIsDefined && Key === Binary._getKey().charCodeAt(0)) {
					return MiddleBinary;
				} else if (true === InterpolationIsDefined && Key === Interpolation._getKey().charCodeAt(0)) {
					return MiddleInterpolation;
				} else if (true === BinaryIsDefined && Key < Binary._getKey().charCodeAt(0)) {
					End = MiddleBinary - 1;
				} else if (true === InterpolationIsDefined && Key < Interpolation._getKey().charCodeAt(0)) {
					Start = MiddleBinary + 1;
					End = MiddleInterpolation + 1;
				} else {
					Start = MiddleInterpolation + 1;
				}
			}

			return -1;
		}

		// @override

	}, {
		key: 'findByKey',
		value: function findByKey(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Found = void 0;

			if ('string' !== typeof Key || 0 === Key.length) {
				return null;
			}
			// eslint-disable-next-line
			Found = this.__searchForKey(Key.charCodeAt(0));

			if (-1 === Found) {
				return null;
			} else {
				return this._Children[Found].findByKey(Key, false, Exact);
			}
		}
	}, {
		key: 'findByKeyIgnoreCase',
		value: function findByKeyIgnoreCase(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Found = void 0,
			    LowerKey = void 0;
			var Nodes = [];

			if ('string' !== typeof Key || 0 === Key.length) {
				return null;
			}
			// eslint-disable-next-line
			LowerKey = Key.toLowerCase();
			// eslint-disable-next-line
			Found = this.__searchForKey(LowerKey.charCodeAt(0));
			if (-1 !== Found) {
				this._Children[Found]._findByKeyIgnoreCase(LowerKey, Exact, Nodes);
			}

			Found = this.__searchForKey(LowerKey.charAt(0).toUpperCase().charCodeAt(0));
			if (-1 !== Found) {
				this._Children[Found]._findByKeyIgnoreCase(LowerKey, Exact, Nodes);
			}

			return new PatricaTrieCollectionEx(Nodes);
		}

		// @override

	}, {
		key: 'containsKey',
		value: function containsKey(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Found = this.findByKey(Key, Exact);
			if (null === Found) {
				return false;
			} else {
				return true;
			}
		}
	}, {
		key: '_containsKeyIgnoreCase',
		value: function _containsKeyIgnoreCase(LowerKey) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Return = void 0,
			    Found = void 0;

			Found = this.__searchForKey(LowerKey.charCodeAt(0));

			if (-1 !== Found) {
				Return = this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
				if (false === Return) {
					Found = this.__searchForKey(LowerKey.charAt(0).toUpperCase().charCodeAt(0));
					if (-1 !== Found) {
						return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
					}
				}
				return Return;
			} else {
				Found = this.__searchForKey(LowerKey.charAt(0).toUpperCase().charCodeAt(0));
				if (-1 !== Found) {
					return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
				}
			}
		}
	}, {
		key: 'containsKeyIgnoreCase',
		value: function containsKeyIgnoreCase(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}

			return this._containsKeyIgnoreCase(Key.toLowerCase(), Exact);
		}
	}, {
		key: 'findByValue',
		value: function findByValue(Comparer) {
			var DepthFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var StartKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var EndKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

			var Index = void 0,
			    Found = void 0;
			var NewStart = '';
			var NewEnd = '';
			var Start = 0;
			var End = this._Children.length;

			if ('function' !== typeof Comparer.compare) {
				throw new TypeErrorException('Expected compare function of Compare object.');
			}

			if ('string' === typeof StartKey) {
				Start = this.__searchForKey(StartKey.charCodeAt(0));
				NewStart = StartKey.substring(1);
			}

			if ('string' === typeof EndKey) {
				End = this.__searchForKey(EndKey.charCodeAt(0));
				NewEnd = EndKey.substring(1);
			}

			if (-1 === Start && -1 === End) {
				return null;
			}

			if (Start > End) {
				return null;
			}

			if (0 < NewStart.length) {
				if (Start === End) {
					Found = this._Children[Start].findByValue(Comparer, DepthFirst, NewStart, NewEnd);
				} else {
					Found = this._Children[Start].findByValue(Comparer, DepthFirst, NewStart);
				}

				if (null !== Found) {
					return Found;
				}
			}

			for (Index = Start; Index < End; Index++) {
				Found = this._Children[Index].findByValue(Comparer, DepthFirst);
				if (null !== Found) {
					return Found;
				}
			}

			if (0 < NewEnd.length) {
				Found = this._Children[End].findByValue(Comparer, DepthFirst, undefined, NewEnd);

				if (null !== Found) {
					return Found;
				}
			}

			return null;
		}
	}, {
		key: '_findAllByValue',
		value: function _findAllByValue(Return, Comparer) {
			var DepthFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
			var StartKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
			var EndKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

			var Index = void 0;
			var NewStart = '';
			var NewEnd = '';
			var Start = 0;
			var End = this._Children.length;

			if ('string' === typeof StartKey) {
				Start = this.__searchForKey(StartKey.charCodeAt(0));
				NewStart = StartKey.substring(1);
			}

			if ('string' === typeof EndKey) {
				End = this.__searchForKey(EndKey.charCodeAt(0));
				NewEnd = EndKey.substring(1);
			}

			if (-1 === Start && -1 === End) {
				return;
			}

			if (Start > End) {
				return;
			}

			if (0 < NewStart.length) {
				if (Start === End) {
					this._Children[Start]._findAllByValue(Return, Comparer, DepthFirst, NewStart, NewEnd);
				} else {
					this._Children[Start]._findAllByValue(Return, Comparer, DepthFirst, NewStart);
				}
			}

			for (Index = Start; Index < End; Index++) {
				this._Children[Index]._findAllByValue(Return, Comparer, DepthFirst);
			}

			if (0 < NewEnd.length) {
				this._Children[End].findAllByValue(Return, Comparer, DepthFirst, undefined, NewEnd);
			}
		}
	}, {
		key: 'findAllByValue',
		value: function findAllByValue(Comparer) {
			var DepthFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var StartKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var EndKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

			var Return = [];
			if ('function' !== typeof Comparer.compare) {
				throw new TypeErrorException('Expected compare function of Compare object.');
			}

			this._findAllByValue(Return, Comparer, DepthFirst, StartKey, EndKey);
			return new PatricaTrieCollectionEx(Return);
		}
	}, {
		key: 'insert',
		value: function insert(Key, Value) {
			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}

			return this._insertIntoChild(Key, Value);
		}
	}, {
		key: 'insertPreventOverwrite',
		value: function insertPreventOverwrite(Key, Value) {
			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}

			return this._insertIntoChildPreventOverwrite(Key, Value);
		}
	}, {
		key: 'remove',
		value: function remove(Key) {
			var ToDelete = this.findByKey(Key, true);
			if (null === ToDelete) {
				return;
			}

			if (true === ToDelete.hasChildren()) {
				if (true === ToDelete.isAEnd()) {
					ToDelete.setValue(null);
					ToDelete.unsetEnd();
				}
			} else {
				ToDelete._removeFromTrie();
			}
		}
	}, {
		key: 'serialize',
		value: function serialize(ValueSerializer) {
			var Child = void 0;
			var Output = ['[r'];

			for (Child in this._Children) {
				this._Children[Child]._serialize(ValueSerializer, Output);
			}
			Output.push(']');

			return Output.join('');
		}
	}], [{
		key: 'loadFromString',
		value: function loadFromString(Trie, ValueDeserializer) {
			var Length = void 0,
			    NewTrie = void 0,
			    Position = void 0;
			if ('string' !== typeof Trie) {
				throw new TypeErrorException('Expected string to parse.');
			}

			if ('function' !== typeof ValueDeserializer) {
				throw new TypeErrorException('Expected function for deserialization.');
			}
			// eslint-disable-next-line
			Length = Trie.length;

			if (3 > Length) {
				throw new ValueErrorException('The given string cannot be valid.');
			}

			if ('[' !== Trie.charAt(0)) {
				throw new ValueErrorException('The given string is not valid. - Exspecetd [ got ' + Trie.charAt(0) + ' at position 0.');
			}

			if ('r' !== Trie.charAt(1)) {
				throw new ValueErrorException('The given string is not valid. - Exspecetd r got ' + Trie.charAt(1) + ' at position 1.');
			}

			NewTrie = new PatricaTrieEx();

			if (']' === Trie.charAt(2)) {
				return NewTrie;
			}

			// eslint-disable-next-line
			Position = NewTrie._fromString(Trie, 2, ValueDeserializer);

			if (Position !== Length) {
				throw new ValueErrorException('The given string is not valid. - Exspecetd end of string @position ' + Position + '.');
			}

			return NewTrie;
		}
	}]);

	return PatricaTrieEx;
}(PatricaTrieNodeEx);
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* eslint-disable operator-linebreak */
var PatricaTrieStatic = exports.PatricaTrieStatic = function (_PatricaStaticTrieNod) {
	_inherits(PatricaTrieStatic, _PatricaStaticTrieNod);

	function PatricaTrieStatic(Size, Normalizer) {
		_classCallCheck(this, PatricaTrieStatic);

		return _possibleConstructorReturn(this, (PatricaTrieStatic.__proto__ || Object.getPrototypeOf(PatricaTrieStatic)).call(this, undefined, undefined, Size, Normalizer));
	}

	_createClass(PatricaTrieStatic, [{
		key: 'getKeys',
		value: function getKeys() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Child = void 0;
			var Output = [];

			if ('function' === typeof Filter) {
				for (Child in this._Children) {
					this._Children[Child]._getKeysFilter('', Output, Filter);
				}
			} else {
				for (Child in this._Children) {
					this._Children[Child]._getKeys('', Output);
				}
			}

			return Output;
		}

		// @override

	}, {
		key: 'findByKey',
		value: function findByKey(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Found = void 0;

			if ('string' !== typeof Key || 0 === Key.length) {
				return null;
			}
			// eslint-disable-next-line
			Found = this.__Normalizer(Key.charAt(0));

			if (0 > Found || this.__Size <= Found) {
				return null;
			} else {
				return this._Children[Found].findByKey(Key, false, Exact);
			}
		}
	}, {
		key: 'findByKeyIgnoreCase',
		value: function findByKeyIgnoreCase(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Found = void 0,
			    LowerKey = void 0;
			var Nodes = [];

			if ('string' !== typeof Key || 0 === Key.length) {
				return null;
			}
			// eslint-disable-next-line
			LowerKey = Key.toLowerCase();
			Found = this.__Normalizer(LowerKey.charAt(0));

			if (-1 < Found && this.__Size > Found) {
				this._Children[Found]._findByKeyIgnoreCase(LowerKey, Exact, Nodes);
			}

			Found = this.__Normalizer(LowerKey.charAt(0).toUpperCase());

			if (-1 < Found && this.__Size > Found) {
				this._Children[Found]._findByKeyIgnoreCase(LowerKey, Exact, Nodes);
			}

			return new PatricaTrieCollection(Nodes);
		}

		// @override

	}, {
		key: 'containsKey',
		value: function containsKey(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Found = this.findByKey(Key, Exact);
			if (null === Found) {
				return false;
			} else {
				return true;
			}
		}
	}, {
		key: '_containsKeyIgnoreCase',
		value: function _containsKeyIgnoreCase(LowerKey) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Return = void 0,
			    Found = void 0;

			Found = this.__Normalizer(LowerKey.charAt(0));

			if (-1 < Found && this.__Size > Found) {
				Return = this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
				if (false === Return) {
					Found = this.__Normalizer(LowerKey.charAt(0).toUpperCase());
					if (-1 < Found && this.__Size > Found) {
						return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
					}
				}
				return Return;
			} else {
				Found = this.__Normalizer(LowerKey.charAt(0).toUpperCase());
				if (-1 < Found && this.__Size > Found) {
					return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
				}
			}
		}
	}, {
		key: 'containsKeyIgnoreCase',
		value: function containsKeyIgnoreCase(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}

			return this._containsKeyIgnoreCase(Key.toLowerCase(), Exact);
		}
	}, {
		key: 'insert',
		value: function insert(Key, Value) {
			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}

			return this._insertIntoChild(Key, Value);
		}
	}, {
		key: 'insertPreventOverwrite',
		value: function insertPreventOverwrite(Key, Value) {
			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}

			return this._insertIntoChildPreventOverwrite(Key, Value);
		}
	}, {
		key: 'remove',
		value: function remove(Key) {
			var ToDelete = this.findByKey(Key, true);

			if (null === ToDelete) {
				return;
			}

			if (true === ToDelete.hasChildren()) {
				if (true === ToDelete.isAEnd()) {
					ToDelete.unsetEnd();
				}
			} else {
				ToDelete._removeFromTrie();
			}
		}
	}, {
		key: 'serialize',
		value: function serialize() {
			var Child = void 0;
			var Output = ['[r', ':' + this.__Size];

			for (Child in this._Children) {
				this._Children[Child]._serialize(Output);
			}
			Output.push(']');

			return Output.join('');
		}
	}, {
		key: '__parser',
		value: function __parser() {}
	}, {
		key: 'loadFromString',
		value: function loadFromString(Trie) {
			var Length = void 0;
			this.__PositionPointer = 0;
			if ('string' !== typeof Trie) {
				throw new TypeErrorException('Expected string to parse.');
			}
			// eslint-disable-next-line
			Length = Trie.length;

			if (3 > Length) {
				throw new ValueErrorException('The given string cannot be valid.');
			}

			if ('[' !== Trie.charAt(0)) {
				throw new ValueErrorException('The given string is not valid. - Exspecetd [ got ' + Trie.charAt(0) + ' at position 0.');
			}

			if ('r' !== Trie.charAt(1)) {
				throw new ValueErrorException('The given string is not valid. - Exspecetd r got ' + Trie.charAt(1) + ' at position 1.');
			}
		}
	}]);

	return PatricaTrieStatic;
}(PatricaStaticTrieNode);
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* eslint-disable operator-linebreak */
var PatricaStaticTrieEx = exports.PatricaStaticTrieEx = function (_PatricaStaticTrieNod) {
	_inherits(PatricaStaticTrieEx, _PatricaStaticTrieNod);

	function PatricaStaticTrieEx(Size, Normalizer) {
		_classCallCheck(this, PatricaStaticTrieEx);

		return _possibleConstructorReturn(this, (PatricaStaticTrieEx.__proto__ || Object.getPrototypeOf(PatricaStaticTrieEx)).call(this, undefined, undefined, Size, Normalizer));
	}

	_createClass(PatricaStaticTrieEx, [{
		key: 'setValue',
		value: function setValue() {
			throw new InvalidMethodException('setValue');
		}
	}, {
		key: 'getKeys',
		value: function getKeys() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Child = void 0;
			var Output = [];

			if ('function' === typeof Filter) {
				for (Child in this._Children) {
					this._Children[Child]._getKeysFilter('', Output, Filter);
				}
			} else {
				for (Child in this._Children) {
					this._Children[Child]._getKeys('', Output);
				}
			}

			return Output;
		}
	}, {
		key: 'getValues',
		value: function getValues() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Child = void 0;
			var Output = [];

			if ('function' === typeof Filter) {
				for (Child in this._Children) {
					this._Children[Child]._getValuesFilter(Output, Filter);
				}
			} else {
				for (Child in this._Children) {
					this._Children[Child]._getValues(Output);
				}
			}

			return Output;
		}
	}, {
		key: 'getKeyAndValue',
		value: function getKeyAndValue() {
			return null;
		}
	}, {
		key: 'getKeysAndValues',
		value: function getKeysAndValues() {
			var Filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var Child = void 0;
			var Return = {};

			if ('function' === typeof Filter) {
				for (Child in this._Children) {
					this._Children[Child]._getKeysAndValuesFilter('', Return, Filter);
				}
			} else {
				for (Child in this._Children) {
					this._Children[Child]._getKeysAndValues('', Return);
				}
			}

			return Return;
		}
	}, {
		key: 'findByKey',
		value: function findByKey(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Found = void 0;

			if ('string' !== typeof Key || 0 === Key.length) {
				return null;
			}
			// eslint-disable-next-line
			Found = this.__Normalizer(Key.charAt(0));

			if (0 > Found || this.__Size <= Found) {
				return null;
			} else {
				return this._Children[Found].findByKey(Key, false, Exact);
			}
		}
	}, {
		key: 'findByKeyIgnoreCase',
		value: function findByKeyIgnoreCase(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Found = void 0,
			    LowerKey = void 0;
			var Nodes = [];

			if ('string' !== typeof Key || 0 === Key.length) {
				return null;
			}
			// eslint-disable-next-line
			LowerKey = Key.toLowerCase();
			Found = this.__Normalizer(LowerKey.charAt(0));

			if (-1 < Found && this.__Size > Found) {
				this._Children[Found]._findByKeyIgnoreCase(LowerKey, Exact, Nodes);
			}

			Found = this.__Normalizer(LowerKey.charAt(0).toUpperCase());

			if (-1 < Found && this.__Size > Found) {
				this._Children[Found]._findByKeyIgnoreCase(LowerKey, Exact, Nodes);
			}

			return new PatricaTrieCollection(Nodes);
		}

		// @override

	}, {
		key: 'containsKey',
		value: function containsKey(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Found = this.findByKey(Key, Exact);
			if (null === Found) {
				return false;
			} else {
				return true;
			}
		}
	}, {
		key: '_containsKeyIgnoreCase',
		value: function _containsKeyIgnoreCase(LowerKey) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var Return = void 0,
			    Found = void 0;

			Found = this.__Normalizer(LowerKey.charAt(0));

			if (-1 < Found && this.__Size > Found) {
				Return = this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
				if (false === Return) {
					Found = this.__Normalizer(LowerKey.charAt(0).toUpperCase());
					if (-1 < Found && this.__Size > Found) {
						return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
					}
				}
				return Return;
			} else {
				Found = this.__Normalizer(LowerKey.charAt(0).toUpperCase());
				if (-1 < Found && this.__Size > Found) {
					return this._Children[Found]._containsKeyIgnoreCase(LowerKey, Exact);
				}
			}
		}
	}, {
		key: 'containsKeyIgnoreCase',
		value: function containsKeyIgnoreCase(Key) {
			var Exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}

			return this._containsKeyIgnoreCase(Key.toLowerCase(), Exact);
		}
	}, {
		key: 'findByValue',
		value: function findByValue(Comparer) {
			var DepthFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var StartKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var EndKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

			var Index = void 0,
			    Found = void 0;
			var NewStart = '';
			var NewEnd = '';
			var Start = 0;
			var End = this._Children.length;

			if ('function' !== typeof Comparer.compare) {
				throw new TypeErrorException('Expected compare function of Compare object.');
			}

			if ('string' === typeof StartKey) {
				Start = this.__searchForKey(StartKey.charCodeAt(0));
				NewStart = StartKey.substring(1);
			}

			if ('string' === typeof EndKey) {
				End = this.__searchForKey(EndKey.charCodeAt(0));
				NewEnd = EndKey.substring(1);
			}

			if (-1 === Start && -1 === End) {
				return null;
			}

			if (Start > End) {
				return null;
			}

			if (0 < NewStart.length) {
				if (Start === End) {
					Found = this._Children[Start].findByValue(Comparer, DepthFirst, NewStart, NewEnd);
				} else {
					Found = this._Children[Start].findByValue(Comparer, DepthFirst, NewStart);
				}

				if (null !== Found) {
					return Found;
				}
			}

			for (Index = Start; Index < End; Index++) {
				Found = this._Children[Index].findByValue(Comparer, DepthFirst);
				if (null !== Found) {
					return Found;
				}
			}

			if (0 < NewEnd.length) {
				Found = this._Children[End].findByValue(Comparer, DepthFirst, undefined, NewEnd);

				if (null !== Found) {
					return Found;
				}
			}

			return null;
		}
	}, {
		key: '_findAllByValue',
		value: function _findAllByValue(Return, Comparer) {
			var DepthFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
			var StartKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
			var EndKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

			var Index = void 0;
			var NewStart = '';
			var NewEnd = '';
			var Start = 0;
			var End = this._Children.length;

			if ('string' === typeof StartKey) {
				Start = this.__searchForKey(StartKey.charCodeAt(0));
				NewStart = StartKey.substring(1);
			}

			if ('string' === typeof EndKey) {
				End = this.__searchForKey(EndKey.charCodeAt(0));
				NewEnd = EndKey.substring(1);
			}

			if (-1 === Start && -1 === End) {
				return;
			}

			if (Start > End) {
				return;
			}

			if (0 < NewStart.length) {
				if (Start === End) {
					this._Children[Start]._findAllByValue(Return, Comparer, DepthFirst, NewStart, NewEnd);
				} else {
					this._Children[Start]._findAllByValue(Return, Comparer, DepthFirst, NewStart);
				}
			}

			for (Index = Start; Index < End; Index++) {
				this._Children[Index]._findAllByValue(Return, Comparer, DepthFirst);
			}

			if (0 < NewEnd.length) {
				this._Children[End].findAllByValue(Return, Comparer, DepthFirst, undefined, NewEnd);
			}
		}
	}, {
		key: 'findAllByValue',
		value: function findAllByValue(Comparer) {
			var DepthFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var StartKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
			var EndKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

			var Return = [];
			if ('function' !== typeof Comparer.compare) {
				throw new TypeErrorException('Expected compare function of Compare object.');
			}

			this._findAllByValue(Return, Comparer, DepthFirst, StartKey, EndKey);
			return new PatricaTrieCollectionEx(Return);
		}
	}, {
		key: 'insert',
		value: function insert(Key, Value) {
			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}

			return this._insertIntoChild(Key, Value);
		}
	}, {
		key: 'insertPreventOverwrite',
		value: function insertPreventOverwrite(Key, Value) {
			if ('string' !== typeof Key || 0 === Key.length) {
				return false;
			}

			return this._insertIntoChildPreventOverwrite(Key, Value);
		}
	}, {
		key: 'remove',
		value: function remove(Key) {
			var ToDelete = this.findByKey(Key, true);
			if (null === ToDelete) {
				return;
			}

			if (true === ToDelete.hasChildren()) {
				if (true === ToDelete.isAEnd()) {
					ToDelete.setValue(null);
					ToDelete.unsetEnd();
				}
			} else {
				ToDelete._removeFromTrie();
			}
		}
	}, {
		key: 'serialize',
		value: function serialize(ValueSerializer) {
			var Child = void 0;
			var Output = ['[r', ':' + this.__Size];

			for (Child in this._Children) {
				this._Children[Child]._serialize(ValueSerializer, Output);
			}
			Output.push(']');

			return Output.join('');
		}
	}, {
		key: '__parser',
		value: function __parser(ValueDeserializer) {}
	}, {
		key: 'loadFromString',
		value: function loadFromString(Trie, ValueDeserializer) {
			var Length = void 0;
			if ('string' !== typeof Trie) {
				throw new TypeErrorException('Expected string to parse.');
			}

			if ('function' !== typeof ValueDeserializer) {
				throw new TypeErrorException('Expected function for deserialization.');
			}
			// eslint-disable-next-line
			Length = Trie.length;

			if (3 > Length) {
				throw new ValueErrorException('The given string cannot be valid.');
			}

			if ('[' !== Trie.charAt(0)) {
				throw new ValueErrorException('The given string is not valid. - Exspecetd [ got ' + Trie.charAt(0) + ' at position 0.');
			}

			if ('r' !== Trie.charAt(1)) {
				throw new ValueErrorException('The given string is not valid. - Exspecetd r got ' + Trie.charAt(1) + ' at position 1.');
			}
		}
	}]);

	return PatricaStaticTrieEx;
}(PatricaStaticTrieNodeFx);
'use strict';

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var StringCompare = function () {
	function StringCompare() {
		_classCallCheck(this, StringCompare);
	}

	_createClass(StringCompare, null, [{
		key: 'compare',
		value: function compare(Comp) {
			return -1 !== StringCompare.Tests.indexOf(Comp);
		}
	}]);

	return StringCompare;
}();

StringCompare.Tests = ['a', 'b', 'e', 'f', 'g', 'm'];

var Trie = new PatricaTrieEx();
var Trie2 = new PatricaTrieEx();
var Trie3 = new PatricaTrie();
var Trie4 = void 0;
Trie.insert('121', 'a');
Trie.insert('11', 'b');
Trie.insert('12', 'c');
Trie.insert('13', 'd');
Trie.insert('14', 'e');
Trie.insert('15', 'f');
Trie.insert('123123', 'g');
Trie.insert('23', 'h');
Trie.insert('42', 'i');
Trie.insert('1112341', 'j');
Trie.insert('124532', 'k');
Trie.insert('2333', 'l');
Trie.insert('422222', 'm');
Trie.insert('1', 'n');
console.log(Trie.containsKey('5432'));
console.log(Trie.containsKey('12'));
console.log(Trie.containsKey('4', true));
Utils.debugObjectPrint(Trie.getKeys());
Utils.debugObjectPrint(Trie.getValues());
console.log(Trie.findByKey('4', true));
Trie.remove('12');
Trie.remove('11');
Trie.remove('13');
Trie.remove('14');
Trie.remove('15');
Trie.remove('23');
Trie.remove('2333');
Trie.insert('2', 'q');
Utils.debugObjectPrint(Trie.getKeys());
Utils.debugObjectPrint(Trie.getValues());
Utils.debugObjectPrint(Trie.findByKey('1').getValues());
Utils.debugObjectPrint(Trie.findByKey('124532').getKey());
console.log('\n\n');
console.log(Trie.insertPreventOverwrite('123', 'o'));
console.log(Trie.insertPreventOverwrite('123', 'p'));
Utils.debugObjectPrint(Trie.findByValue(StringCompare).getKey());
console.log(Trie.findAllByValue(StringCompare));
console.log(Trie);
Utils.debugObjectPrint(Trie.getKeysAndValues());
Utils.debugObjectPrint(Trie.serialize(JSON.stringify));

Trie4 = PatricaTrieEx.loadFromString(Trie.serialize(JSON.stringify), JSON.parse);
Utils.debugObjectPrint(Trie4.getKeysAndValues());

Utils.debugObjectPrint(Trie2.serialize(JSON.stringify));
Trie4 = PatricaTrieEx.loadFromString(Trie2.serialize(JSON.stringify), JSON.parse);

Trie3.insert('121', 'a');
Trie3.insert('11', 'b');
Trie3.insert('12', 'c');
Trie3.insert('13', 'd');
Trie3.insert('14', 'e');
Trie3.insert('15', 'f');
Trie3.insert('123123', 'g');
Trie3.insert('23', 'h');
Trie3.insert('42', 'i');
Trie3.insert('1112341', 'j');
Trie3.insert('124532', 'k');
Trie3.insert('2333', 'l');
Trie3.insert('422222', 'm');
Trie3.insert('1', 'n');
console.log(Trie3.containsKey('5432'));
console.log(Trie3.containsKey('12'));
console.log(Trie3.containsKey('4', true));
Utils.debugObjectPrint(Trie3.getKeys());
console.log(Trie.findByKey('4', true));
Trie3.remove('12');
Trie3.remove('11');
Trie3.remove('13');
Trie3.remove('14');
Trie3.remove('15');
Trie3.remove('23');
Trie3.remove('2333');
Trie.insert('2', 'q');
Utils.debugObjectPrint(Trie3.findByKey('124532').getKey());
Utils.debugObjectPrint(Trie3.getKeys());
console.log(Trie3);
Utils.debugObjectPrint(Trie3.serialize());
Trie4 = PatricaTrie.loadFromString(Trie3.serialize());
Utils.debugObjectPrint(Trie4.getKeys());



},{}]},{},[1]);
