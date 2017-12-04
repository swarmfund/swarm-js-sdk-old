"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var CallBuilder = require("./call_builder").CallBuilder;

var DocumentCallBuilder = exports.DocumentCallBuilder = (function (_CallBuilder) {
    function DocumentCallBuilder(serverUrl) {
        _classCallCheck(this, DocumentCallBuilder);

        _get(Object.getPrototypeOf(DocumentCallBuilder.prototype), "constructor", this).call(this, serverUrl);
        this.url.segment("users");
    }

    _inherits(DocumentCallBuilder, _CallBuilder);

    _createClass(DocumentCallBuilder, {
        all: {
            value: function all(accountId) {
                this.filter.push(["users", accountId, "documents"]);
                return this;
            }
        },
        file: {
            value: function file(accountId, fileType) {
                this.filter.push(["users", accountId, "documents", fileType]);
                return this;
            }
        }
    });

    return DocumentCallBuilder;
})(CallBuilder);