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
exports.db = exports.TaskApplicationDexie = void 0;
var dexie_1 = require("dexie");
var TaskApplicationDexie = /** @class */ (function (_super) {
    __extends(TaskApplicationDexie, _super);
    function TaskApplicationDexie() {
        var _this = _super.call(this, 'task-application') || this;
        _this.version(1).stores({
            tasks: '++id, title, complete', // Primary key and indexed props
        });
        return _this;
    }
    return TaskApplicationDexie;
}(dexie_1.default));
exports.TaskApplicationDexie = TaskApplicationDexie;
exports.db = new TaskApplicationDexie();
//# sourceMappingURL=db.js.map