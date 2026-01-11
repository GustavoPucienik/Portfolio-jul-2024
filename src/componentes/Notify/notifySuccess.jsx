import { toast } from "react-toastify";
import { PiSealCheckBold } from "react-icons/pi";
import styles from "./notify.module.css";

export default function notifySuccess(msg) {
  toast.success(
    <div className={`${styles.toast} ${styles.toastSuccess}`}>
      <div className={styles.iconSuccess}>
        <PiSealCheckBold />
      </div>
      <span className={styles.message}>{msg}</span>
    </div>,
    {
      position: "bottom-right",
      hideProgressBar: true,
      icon: false,
    }
  );
}
