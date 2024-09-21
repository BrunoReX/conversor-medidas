export const CM = "Centímetros";
export const M = "Metros";
export const KM = "Kilometros";
export const MILES = "Milhas";
export const units = [CM, M, KM, MILES];

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
