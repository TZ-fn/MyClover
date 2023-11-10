import { ReactNode } from "react";
import styles from "./NavigationItem.module.scss";

function NavigationItem({ children, active }: { children: ReactNode; active?: boolean }) {
  return <li className={active ? styles.navListItemActive : styles.navListItem}>{children}</li>;
}

export default NavigationItem;
