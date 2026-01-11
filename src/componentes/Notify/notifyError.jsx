import { toast } from "react-toastify";
import { PiSealWarningDuotone } from "react-icons/pi";
import styles from "./notify.module.css";

export default function notifyError(msg) {
  toast.error(
    <div className={`${styles.toast} ${styles.toastError}`}>
      <PiSealWarningDuotone className={styles.iconError} />
      <span className={styles.message}>{msg}</span>
    </div>,
    {
      position: "bottom-right",
      hideProgressBar: true,
      theme: "light",
      icon: false,
      className: `${styles.toast} ${styles.toastError}`,
    }
  );
}
