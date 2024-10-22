"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Man = /** @class */ (function () {
    function Man(name, description) {
        this.name = name;
        this.description = description;
    }
    Man.prototype.getInfo = function () {
        console.log(this.name);
        console.log(this.description);
    };
    return Man;
}());
//let man=new Man("dert","qqqqqqqqqqqqqqqqqqquality");
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male(name, description, gender) {
        var _this = _super.call(this, name, description) || this;
        _this.gender = gender;
        return _this;
    }
    Male.prototype.getFunction = function () {
        console.log(this.gender);
    };
    return Male;
}(Man));
var maleMan = new Male("dert", "qqqqqqqqqqqqqq", "Male");
console.log(maleMan.getInfo());
