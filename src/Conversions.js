import * as Constants from "./Constants.js";

// MM
function mmToCm(value) {
  return value * 0.1;
}

function mmToM(value) {
  return value * 0.001;
}

function mmToKm(value) {
  return value * 0.000001;
}

function mmToMile(value) {
  return value * 6.2137119223733e-7;
}

// CM
function cmToMm(value) {
  return value * 10;
}

function cmToM(value) {
  return value * 0.01;
}

function cmToKm(value) {
  return value * 0.00001;
}

function cmToMile(value) {
  return value * 0.0000062137;
}

// Metros
function mToMm(value) {
  return value * 1000;
}

function mToCm(value) {
  return value * 100;
}

function mToKm(value) {
  return value * 0.001;
}

function mToMile(value) {
  return value * 0.00062137;
}

// KM
function kmToMm(value) {
  return value * 1000000;
}

function kmToCm(value) {
  return value * 100000;
}

function kmToM(value) {
  return value * 1000;
}

function kmToMile(value) {
  return value * 0.60934;
}

// Milhas
function mileToMm(value) {
  return value * 1609344;
}

function mileToCm(value) {
  return value * 160934.4;
}

function mileToM(value) {
  return value * 1609.344;
}

function mileToKm(value) {
  return value * 1.60934;
}

export function MmConversion(convUnit, value) {
  switch (convUnit) {
    case Constants.CM:
      return mmToCm(value);
    case Constants.M:
      return mmToM(value);
    case Constants.KM:
      return mmToKm(value);
    case Constants.MILES:
      return mmToMile(value);
    default:
      return value;
  }
}

export function CmConversion(convUnit, value) {
  switch (convUnit) {
    case Constants.MM:
      return cmToMm(value);
    case Constants.M:
      return cmToM(value);
    case Constants.KM:
      return cmToKm(value);
    case Constants.MILES:
      return cmToMile(value);
    default:
      return value;
  }
}

export function MConversion(convUnit, value) {
  switch (convUnit) {
    case Constants.MM:
      return mToMm(value);
    case Constants.CM:
      return mToCm(value);
    case Constants.KM:
      return mToKm(value);
    case Constants.MILES:
      return mToMile(value);
    default:
      return value;
  }
}

export function KmConversion(convUnit, value) {
  switch (convUnit) {
    case Constants.MM:
      return kmToMm(value);
    case Constants.CM:
      return kmToCm(value);
    case Constants.M:
      return kmToM(value);
    case Constants.MILES:
      return kmToMile(value);
    default:
      return value;
  }
}

export function MileConversion(convUnit, value) {
  switch (convUnit) {
    case Constants.MM:
      return mileToMm(value);
    case Constants.CM:
      return mileToCm(value);
    case Constants.M:
      return mileToM(value);
    case Constants.KM:
      return mileToKm(value);
    default:
      return value;
  }
}
