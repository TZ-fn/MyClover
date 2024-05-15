import { ReactNode, KeyboardEvent } from "react";
import styles from "./NavigationItem.module.scss";

function NavigationItem({
  children,
  isActive,
  isHighlighted,
  onClick,
  onKeyDown,
}: {
  children: ReactNode;
  isActive?: boolean;
  isHighlighted?: boolean;
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<Element>) => void | null;
}) {
  return (
    <li
      onClick={onClick}
      tabIndex={onKeyDown ? 0 : -1}
      onKeyDown={onKeyDown}
      role={onKeyDown ? "button" : "listitem"}
      className={
        isActive && isHighlighted
          ? styles.navListItemHighlightedActive
          : isHighlighted
          ? styles.navListItemHighlighted
          : isActive
          ? styles.navListItemActive
          : styles.navListItem
      }
    >
      {children}
    </li>
  );
}

export default NavigationItem;
