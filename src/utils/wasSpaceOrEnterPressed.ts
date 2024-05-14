export default function wasSpaceOrEnterPressed(e: KeyboardEvent) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    return true;
  } else {
    return false;
  }
}
