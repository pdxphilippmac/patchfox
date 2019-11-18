export default async function getGames() {
  const games = await fetch("/api/games").then(response => response.json());
  return games;
}
// function arrayToObject(array) {
//   const gameObject = {};
//   for (let i = 0; i < array.length; i++) {
//     gameObject[array[i].name] = array[i];
//   }
//   return gameObject;
// }
