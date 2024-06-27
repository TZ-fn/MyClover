import { ReactNode, KeyboardEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavigationItem.module.scss";

function NavigationItem({
  children,
  isHighlighted,
  onClick,
  onKeyDown,
  address,
  handleMenuClick,
}: {
  children: ReactNode;
  isHighlighted?: boolean;
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<Element>) => void | null;
  address: string;
  handleMenuClick: () => void;
}) {
  const location = useLocation().pathname;
  const isActive = location === address;

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
      <Link onClick={handleMenuClick} to={address}>
        {children}
      </Link>
    </li>
  );
}

export default NavigationItem;
