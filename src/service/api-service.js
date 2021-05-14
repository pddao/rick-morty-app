import axios from "axios";

//export function loadCharacters() {
//  return fetch("https://rickandmortyapi.com/api/character").then(
//    (characterData) => characterData.json()
//  );
//}
export function loadCharacters(page) {
  return axios
    .get("https://rickandmortyapi.com/api/character?page=" + page)
    .then((response) => response.data);
}
