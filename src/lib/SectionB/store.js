import { writable } from "svelte/store";

const surgery = writable(null);
const surgeryDate = writable(null);
const autopsy = writable(null);
const usedFoundings = writable(null);
const mannerOfDeath = writable(null);
const placeOfDeath = writable(null);
const multiplePregnancy = writable(null);
const stillborn = writable(null);
const hoursAlive = writable("");
const weightInGrams = writable("");
const fullWeeksOfPregnancy = writable("");
const motherAgeInYears = writable("");
const womanPregnantCondition = writable("");
const pregnancyContributionToDeath = writable("");

function stringStore() {
  const { subscribe, update } = writable("");

  return {
    subscribe,
    set: (id) =>
      update(() =>
        id
          .replace(/[áÁ]/, "A")
          .replace(/[éÉ]/, "E")
          .replace(/[íÍ]/, "I")
          .replace(/[óÓ]/, "O")
          .replace(/[úÚ]/, "U")
          .replace(/([^0-9a-zA-ZñÑ\/\(\)\-\,\.\s])/g, "")
          .toUpperCase()
      ),
  };
}

const surgeryReason = stringStore();
const placeOfDeathOther = stringStore();

export {
  surgery,
  surgeryDate,
  surgeryReason,
  autopsy,
  usedFoundings,
  mannerOfDeath,
  placeOfDeath,
  placeOfDeathOther,
  multiplePregnancy,
  stillborn,
  hoursAlive,
  weightInGrams,
  fullWeeksOfPregnancy,
  motherAgeInYears,
  womanPregnantCondition,
  pregnancyContributionToDeath,
};
