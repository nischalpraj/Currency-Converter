const base_url = "https://api.frankfurter.dev/v1/latest";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");

for (let select of dropdown) {
  for (let currCode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = currCode;
    newoption.value = currCode;
    if (select.name == "from" && currCode === "USD") {
      newoption.selected = "selected";
    } else if (select.name == "to" && currCode === "NPR") {
      newoption.selected = "selected";
    }
    select.append(newoption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });

  const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  };
}

btn.addEventListener("click", async(evt) => {
  evt.preventDefault();

  let amount = document.querySelector(".from input");
  let amtval = parseInt(amount.value);

  if (isNaN(amtval) || amtval <= 0) {
    amtval = 1;
    amount.value = 1;
  }
  // console.log(fromCurr.value,toCurr.value)
  const URL = `${base_url}?base=${fromCurr.value.toLowerCase()}&symbols=${toCurr.value.toLowerCase()}`;
  let response = await fetch(URL);
  console.log(response);
});
