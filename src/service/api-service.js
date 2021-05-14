import axios from "axios";

//export function loadCharacters() {
//  return fetch("https://rickandmortyapi.com/api/character").then(
//    (characterData) => characterData.json()
//  );
//}
export function loadCharacters() {
  return axios
    .get("https://rickandmortyapi.com/api/character")
    .then((characterData) => {
      return characterData.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export default loadCharacters;
