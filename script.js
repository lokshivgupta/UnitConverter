const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

const dropdown = document.querySelectorAll(".dropdown select");

for(let select of dropdown){
     for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerHTML = currCode;
        newOption.value = currCode;
        
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === "CAD"){
            newOption.selected = "selected"
        }
        select.append(newOption);
     }
     select.addEventListener("change", (evt) =>{
        updateFlag(evt.target)
     })
}

const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc =`https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}



btn.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if(amountVal === "" || amountVal < 1){
        amountVal = 1;
        amountVal.value = "1";

    }

    const URL = `${url}/${fromCurr.value.toLowerCase()}.json`;

    console.log(URL);
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    let final = amountVal * rate;
    msg.innerText = `${amountVal} ${fromCurr.value} = ${final} ${toCurr.value} `

});