"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimeTracker {
    constructor() {
        Object.defineProperty(this, "startTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "totalTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
    }
    startTracking() {
        if (this.startTime === null) {
            this.startTime = Date.now();
        }
    }
    stopTracking() {
        if (this.startTime !== null) {
            this.totalTime += Date.now() - this.startTime;
            this.startTime = null;
        }
    }
    getTotalTime() {
        if (this.startTime !== null) {
            return this.totalTime + (Date.now() - this.startTime);
        }
        return this.totalTime;
    }
}
exports.default = TimeTracker;
//# sourceMappingURL=timeTracker.js.map