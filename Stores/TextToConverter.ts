import { writable } from "store";
import type { Writable } from "store";

const textToConverterStore: Writable<string> = writable("");

const textToConverter = {
  subscribe: textToConverterStore.subscribe,
  set: (text: string) => {
    textToConverterStore.set(text);
  },
};

export default textToConverter;
