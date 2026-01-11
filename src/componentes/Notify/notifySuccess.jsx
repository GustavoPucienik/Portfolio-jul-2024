import { toast } from "react-toastify";
import { PiSealCheckBold } from "react-icons/pi";
import styles from "./notify.module.css";

export default function notifySuccess(msg) {
  toast.success(
    <div className={`${styles.toast} ${styles.toastSuccess}`}>
      <PiSealCheckBold className={styles.iconSuccess} />
      <span className={styles.message}>{msg}</span>
    </div>,
    {
      position: "bottom-right",
      hideProgressBar: true,
      theme: "light",
      icon: false,
      className: `${styles.toast} ${styles.toastSuccess}`,
    }
  );
}
