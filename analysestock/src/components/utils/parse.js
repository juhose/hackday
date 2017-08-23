export function getData() {
  const promiseMSFT = fetch(
    "http://stock-api-qa.kauppalehti.media:80/api/stock/history/nokia/ALL"
  ).then(response => response.json());
  return promiseMSFT;
}
