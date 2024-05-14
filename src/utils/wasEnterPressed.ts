import { KeyboardEvent } from "react";

export default function wasEnterPressed(e: KeyboardEvent<Element>) {
  if (e.key === "Enter") {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
