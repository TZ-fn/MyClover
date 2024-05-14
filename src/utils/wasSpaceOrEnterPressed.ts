import { KeyboardEvent } from "react";

export default function wasSpaceOrEnterPressed(e: KeyboardEvent<Element>) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
