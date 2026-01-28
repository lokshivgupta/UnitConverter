
let conversionType = "length";
document.getElementById("tab-length").addEventListener("click", () => setType("length"));
document.getElementById("tab-weight").addEventListener("click", () => setType("weight"));
document.getElementById("tab-temperature").addEventListener("click", () => setType("temperature"));
document.getElementById("convert-btn").addEventListener("click", function() {
    convert();
});


function setType(type) {
    conversionType = type;
}

setType("temperature");


const lengthInMeters = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    inch: 0.0254,
    inches: 0.0254,
    ft: 0.3048,
    yard: 0.9144,
    mile: 1609.34
  };
  const weightInKg = {
    mg: 0.000001,
    g: 0.001,
    kg: 1,
    lb: 0.453592,
    oz: 0.0283495
  };
   
function convert() {
    let value = Number(document.getElementById("value").value);
    let fromUnit = document.getElementById("from-unit").value.toLowerCase();
    let toUnit = document.getElementById("to-unit").value.toLowerCase();
    let result;

    console.log("value:", value);
    console.log("fromUnit:", fromUnit);
    console.log("toUnit:", toUnit);
    

    
    if (conversionType == "length") {
        result = value * lengthInMeters[fromUnit] / lengthInMeters[toUnit];
        console.log("length")
    }else if(conversionType == "weight"){
        result = value * weightInKg[fromUnit] / weightInKg[toUnit];
        console.log("weight")
    }else if(conversionType == "temperature"){
        console.log("temperature")
        if (fromUnit === "c" && toUnit === "f") {
            result = (value * 9) / 5 + 32;
          } else if (fromUnit === "f" && toUnit === "c") {
            result = ((value - 32) * 5) / 9;
          } else if (fromUnit === "c" && toUnit === "k") {
            result = value + 273.15;
          } else if (fromUnit === "k" && toUnit === "c") {
            result = value - 273.15;
          } else if (fromUnit === "f" && toUnit === "k") {
            result = ((value - 32) * 5) / 9 + 273.15;
          } else if (fromUnit === "k" && toUnit === "f") {
            result = ((value - 273.15) * 9) / 5 + 32;
          } else {
            result = value; // same unit
            console.log("This")
          }
    } else {
        console.log("nothing")
    }
    document.getElementById("result").textContent = result;
};