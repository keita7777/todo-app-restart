import { atom } from "recoil";

export const loadingState = atom<boolean>({
  key: "loadingAtom",
  default: false,
});
