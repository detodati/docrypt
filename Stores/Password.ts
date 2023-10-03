import { writable } from "store";
import type { Writable } from "store";

const passwordStore: Writable<string> = writable("");

const password = {
  subscribe: passwordStore.subscribe,
  set: (p: string) => {
    passwordStore.set(p);
  },
};

export default password;
