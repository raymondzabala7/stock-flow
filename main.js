items = [];

document.addEventListener("product-submit", (event) => {
  const item = event.detail;
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
});

const URL_BASE = "https://stock-flow-2aed6-default-rtdb.firebaseio.com/"

document.addEventListener("product-submit", (event) => {
  const urlFood = `${URL_BASE}/food`;
  const item = event.detail;
  const res = httpClient(`${urlFood}.json`, item, "POST");
  res
  .then((data) => data.json())
  .then((data) => {
  item.id = data.name;
  const res = httpClient(`${urlFood}/${item.id}.json`, item, "PUT");
  res
  .then((data) => data.json())
  .then((data) => console.log)
  .catch((err) => console.error);
  })
  .catch((err) => console.error);
  });

const httpClient = (url, payload, method) => {
  return fetch (url, {
  method,
  headers: {
  "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
  });
};