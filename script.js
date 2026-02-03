const base_url = "https://api.frankfurter.dev/v1/latest";

const dropdown = document.querySelectorAll(".dropdown select");

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
  };
}
