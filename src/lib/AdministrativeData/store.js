import { writable } from "svelte/store";

function stringStore() {
  const { subscribe, update } = writable("");

  return {
    subscribe,
    set: (id) =>
      update(() => id.replace(/([^0-9a-zA-ZñÑ\s])/g, "").toUpperCase()),
  };
}

const id = stringStore();
const gender = writable(null);
const age = writable(null);
const ageUnit = writable(null);
const birthdate = writable(null);
const deathdate = writable(null);
const variable1 = stringStore();
const variable2 = stringStore();

export { id, gender, age, ageUnit, birthdate, deathdate, variable1, variable2 };
