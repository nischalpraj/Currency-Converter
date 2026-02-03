const base_url = "https://api.frankfurter.dev/v1/latest";

const dropdown = document.querySelectorAll(".dropdown select");

for (let select of dropdown) {
  for (currCode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = currCode;
    newoption.value = currCode;
    select.append(newoption);
  }
}
