import { ReactNode, KeyboardEvent } from "react";
import styles from "./LanguageControlButton.module.scss";

function LanguageControlButton({
  children,
  onClick,
  onKeyDown,
  isActive,
}: {
  children: ReactNode;
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<Element>) => void | null;
  isActive: boolean;
}) {
  return (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={isActive ? styles.activeButtonContainer : styles.buttonContainer}
    >
      {children}
    </button>
  );
}

export default LanguageControlButton;
