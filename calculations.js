// INCHES TO FEET CALCULATION FN //
function InchesToFeet() {
  // LENGTH CONVERSION //
  let inputLength1 = document.getElementById("inputLength1").value;
  // for rounding:
  // let lengthResult1 = Math.ceil(inputLength1 / 12);
  let lengthResult1 = (inputLength1 / 12).toFixed(2);
  document.getElementById(
    "inchesToFeetLengthResult"
  ).innerHTML = lengthResult1;

  // WIDTH CONVERSION //
  let inputWidth1 = document.getElementById("inputWidth1").value;
  // for rounding:
  // let lengthResult1 = Math.ceil(inputLength1 / 12);
  let widthResult1 = (inputWidth1 / 12).toFixed(2);
  document.getElementById(
    "inchesToFeetWidthResult"
  ).innerHTML = widthResult1;

  // SF CALCULATION //
  let SFresult = (lengthResult1 * widthResult1).toFixed(2);
  document.getElementById("totalSF").innerHTML = SFresult;
  return false;
}

// FEET TO INCHES CALCULATION FN //
function FeetToInches() {
  // LENGTH CONVERSION //
  let inputLength2 = document.getElementById("inputLength2").value;
  // for rounding:
  // let lengthResult1 = Math.ceil(inputLength1 / 12);
  let lengthResult2 = (inputLength2 * 12).toFixed(2);
  document.getElementById(
    "feetToInchesLengthResult"
  ).innerHTML = lengthResult2;

  // WIDTH CONVERSION //
  let inputWidth2 = document.getElementById("inputWidth2").value;
  // for rounding:
  // let lengthResult1 = Math.ceil(inputLength1 / 12);
  let widthResult2 = (inputWidth2 * 12).toFixed(2);
  document.getElementById(
    "feetToInchesWidthResult"
  ).innerHTML = widthResult2;
  return false;
}
