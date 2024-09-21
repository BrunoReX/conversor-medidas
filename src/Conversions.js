import * as Constants from "./Constants.js";

// CM
export function CM_TO_M(value) {
  return value * 0.01;
}

export function CM_TO_KM(value) {
  return value * 0.00001;
}

export function CM_TO_MILE(value) {
  return value * 0.0000062137;
}

// Metros
export function M_TO_CM(value) {
  return value * 100;
}

export function M_TO_KM(value) {
  return value * 0.001;
}

export function M_TO_MILE(value) {
  return value * 0.00062137;
}

// KM
export function KM_TO_CM(value) {
  return value * 100000;
}

export function KM_TO_M(value) {
  return value * 1000;
}

export function KM_TO_MILE(value) {
  return value * 0.60934;
}

// Milhas
export function MILE_TO_CM(value) {
  return value * 160934.4;
}

export function MILE_TO_M(value) {
  return value * 1609.344;
}

export function MILE_TO_KM(value) {
  return value * 1.60934;
}

export function CmConversion(convUnit, value) {
  switch (convUnit) {
    case Constants.M:
      return CM_TO_M(value);
    case Constants.KM:
      return CM_TO_KM(value);
    case Constants.MILES:
      return CM_TO_MILE(value);
    default:
      return value;
  }
}

export function MConversion(convUnit, value) {
  switch (convUnit) {
    case Constants.CM:
      return M_TO_CM(value);
    case Constants.KM:
      return M_TO_KM(value);
    case Constants.MILES:
      return M_TO_MILE(value);
    default:
      return value;
  }
}

export function KmConversion(convUnit, value) {
  switch (convUnit) {
    case Constants.CM:
      return KM_TO_CM(value);
    case Constants.M:
      return KM_TO_M(value);
    case Constants.MILES:
      return KM_TO_MILE(value);
    default:
      return value;
  }
}

export function MileConversion(convUnit, value) {
  switch (convUnit) {
    case Constants.CM:
      return MILE_TO_CM(value);
    case Constants.M:
      return MILE_TO_M(value);
    case Constants.KM:
      return MILE_TO_KM(value);
    default:
      return value;
  }
}
