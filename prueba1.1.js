const UpperLimitIsHigher = 1;
const LowerLimitIsHigher = 2;

const MidpointApproach = (upperLimit, lowerLimit, objective, error) => {
  let limitResult = (upperLimit + lowerLimit) / 2;
  let numIterations = GetIterations(
    limitResult,
    upperLimit,
    lowerLimit,
    objective,
    error,
  );
  console.log(`Finish in ${numIterations} iterations.`);
};

const GetIterations = (
  limitResult,
  upperLimit,
  lowerLimit,
  objective,
  error,
) => {
  let iterations = 0;
  while (true) {
    iterations++;
    if (ErrorAllowed(limitResult, objective, error)) {
      break;
    } else {
      const res = CheckFurthestValue(upperLimit, lowerLimit, objective);
      if (res === UpperLimitIsHigher) upperLimit = limitResult;
      if (res === LowerLimitIsHigher) lowerLimit = limitResult;
      limitResult = (upperLimit + lowerLimit) / 2;
    }
  }
  return iterations;
};

const CheckFurthestValue = (upperLimit, lowerLimit, objective) => {
  const value1 = Math.abs(upperLimit - objective);
  const value2 = Math.abs(lowerLimit - objective);
  if (value1 >= value2) return UpperLimitIsHigher;
  else return LowerLimitIsHigher;
};

const ErrorAllowed = (limitResult, objective, error) => {
  const minError = objective - error;
  const maxError = objective + error;
  if (limitResult >= minError && limitResult <= maxError) return true;
  return false;
};

MidpointApproach(250, 20, 50, 0.05);
