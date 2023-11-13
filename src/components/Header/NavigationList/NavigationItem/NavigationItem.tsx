import { ReactNode } from "react";
import styles from "./NavigationItem.module.scss";

function NavigationItem({
  children,
  isActive,
  isHighlighted,
}: {
  children: ReactNode;
  isActive?: boolean;
  isHighlighted?: boolean;
}) {
  return (
    <li
      className={
        isActive ? styles.navListItemActive : isHighlighted ? styles.navListItemHighlighted : styles.navListItem
      }
    >
      {children}
    </li>
  );
}

export default NavigationItem;
