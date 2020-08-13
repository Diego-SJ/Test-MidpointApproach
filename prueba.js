class MidpointApproach {
  constructor(upperLimit, lowerLimit, objective, error) {
    this.upperLimit = upperLimit;
    this.lowerLimit = lowerLimit;
    this.objective = objective;
    this.error = error;
    this.limitResult = (upperLimit + lowerLimit) / 2;
    this.iterations = 1;
    this.upperLimitIsHigher = 1;
    this.lowerLimitIsHigher = 2;
  }

  result() {
    if(this.upperLimit > this.lowerLimit) {
      this.approachMidpoint();
      console.log(`Finished in ${this.iterations} iterations. Midpoint: ${this.limitResult}`);
    } else {
      console.warn('Upper limit must be greater than lower limit.');
    }
  }

  approachMidpoint() {
    while (!this.checkErrorAllowed()) {
      const res = this.checkFurthestValue();
      if (res === this.upperLimitIsHigher) this.upperLimit = this.limitResult;
      if (res === this.lowerLimitIsHigher) this.lowerLimit = this.limitResult;
      this.limitResult = (this.upperLimit + this.lowerLimit) / 2;
      this.iterations++;
    }
  }

  checkFurthestValue() {
    const value1 = Math.abs(this.objective - this.upperLimit);
    const value2 = Math.abs(this.objective - this.lowerLimit);
    if (value1 >= value2) return this.upperLimitIsHigher;
    else return this.lowerLimitIsHigher;
  }

  checkErrorAllowed() {
    const minError = this.objective - this.error;
    const maxError = this.objective + this.error;
    if (this.limitResult >= minError && this.limitResult <= maxError) return true;
    return false;
  }
}

const mindpoint = new MidpointApproach(250, 20, 50, 0.05);
mindpoint.result();
