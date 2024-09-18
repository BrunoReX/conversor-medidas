export const KM = "Kilometros";
export const MILES = "Milhas";
export const units = [KM, MILES];

// KM
export function KM_TO_MILE(value) {
  return value * 0.60934;
}

// Mile
export function MILE_TO_KM(value) {
  return value * 1.60934;
}
