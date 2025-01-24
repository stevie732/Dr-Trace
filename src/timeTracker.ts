class TimeTracker {
  private startTime: number | null = null;
  private totalTime: number = 0;

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

  getTotalTime(): number {
    if (this.startTime !== null) {
      return this.totalTime + (Date.now() - this.startTime);
    }
    return this.totalTime;
  }
}

export default TimeTracker;