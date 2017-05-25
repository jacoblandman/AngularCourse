export class CounterService {
  setToInactiveCount: number = 0;
  setToActiveCount: number = 0;

  incrementInactiveCount() {
    this.setToInactiveCount++;
    this.logCount(this.setToInactiveCount, "inactive");
  }

  incrementActiveCount() {
    this.setToActiveCount++;
    this.logCount(this.setToActiveCount, "active");
  }

  logCount(count: number, status: string) {
    console.log(count + ' users have been made ' + status);
  }

}
