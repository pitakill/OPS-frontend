import { writable } from "svelte/store";

const surgery = writable(null);
const surgeryDate = writable(null);
const autopsy = writable(null);
const usedFoundings = writable(null);

function stringStore() {
  const { subscribe, update } = writable("");

  return {
    subscribe,
    set: (id) =>
      update(() =>
        id.replace(/([^0-9a-zA-ZñÑ\/\(\)\-\,\.\s])/g, "").toUpperCase()
      ),
  };
}

const surgeryReason = stringStore();

export { surgery, surgeryDate, surgeryReason, autopsy, usedFoundings };
