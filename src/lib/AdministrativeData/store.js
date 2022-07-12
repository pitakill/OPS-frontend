import { writable } from "svelte/store";

function stringStore() {
  const { subscribe, update } = writable("");

  return {
    subscribe,
    update,
    set: (id) =>
      update(() =>
        id
          .replace(/[áÁ]/g, "A")
          .replace(/[éÉ]/g, "E")
          .replace(/[íÍ]/g, "I")
          .replace(/[óÓ]/g, "O")
          .replace(/[úÚ]/g, "U")
          .replace(/[ñÑ]/g, "")
          .replace(/[a-zA-Z]/g, "")
          .replace(/[^0-9]/g, "")
          .toUpperCase()
      ),
  };
}

const id = writable(null);
const gender = writable(null);
const age = writable(null);
const ageUnit = writable(null);
const birthdate = writable(null);
const deathdate = writable(null);
const variable1 = stringStore();
const variable2 = stringStore();

export { id, gender, age, ageUnit, birthdate, deathdate, variable1, variable2 };
