export const CM = "Centímetros";
export const KM = "Kilometros";
export const MILES = "Milhas";
export const units = [CM, KM, MILES];

// CM
export function CM_TO_KM(value) {
  console.log(value * 0.00001);
  return value * 0.00001;
}

export function CM_TO_MILE(value) {
  return value * 6.2137e-6;
}

// KM
export function KM_TO_MILE(value) {
  return value * 0.60934;
}

export function KM_TO_CM(value) {
  return value * 100000;
}

// Mile
export function MILE_TO_KM(value) {
  return value * 1.60934;
}

export function MILE_TO_CM(value) {
  return value * 160934.4;
}
