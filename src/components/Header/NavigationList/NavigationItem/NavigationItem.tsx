import { ReactNode } from "react";
import styles from "./NavigationItem.module.scss";

function NavigationItem({ children }: { children: ReactNode }) {
  return <li className={styles.navListItem}>{children}</li>;
}

export default NavigationItem;
