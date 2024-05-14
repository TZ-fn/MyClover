import { ReactNode } from "react";
import wasSpaceOrEnterPressed from "utils/wasSpaceOrEnterPressed";
import styles from "./NavigationItem.module.scss";

function NavigationItem({
  children,
  isActive,
  isHighlighted,
  onClick,
}: {
  children: ReactNode;
  isActive?: boolean;
  isHighlighted?: boolean;
  onClick?: () => void;
}) {
  return (
    <li
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (wasSpaceOrEnterPressed(e) && onClick) {
          onClick();
        }
      }}
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
