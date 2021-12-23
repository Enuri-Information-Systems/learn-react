let address = "4XX2+RC6 Memphis, TN, USA";

address = address
  .slice(0, address.lastIndexOf(","))
  .replace(",", "")
  .replace(" ", "+")
  .replace(" ", "+").trim()

console.log(address);
