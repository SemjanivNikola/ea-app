import Icon from "@/common/Icons";
import { createPortal } from "react-dom";
import styles from "./FAB.module.css";

const FloatActionButton = () => {
    return createPortal(
        <div className={styles.wrapper}>
            <button className={styles.fab}>
                <Icon name="plus" size={32} />
            </button>
        </div>,
        document.body
    );
};

export default FloatActionButton;
