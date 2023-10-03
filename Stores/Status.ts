import { writable } from "store";
import type { Writable } from "store";

type Status = "start" | "encrypt" | "decrypt" | "password";

const statusStore: Writable<Status> = writable("start");

const status = {
  subscribe: statusStore.subscribe,
  set: (s: Status) => {
    statusStore.set(s);
  },
};

export default status;
