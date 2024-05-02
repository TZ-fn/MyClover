import styles from "./Services.module.scss";

export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h3>title</h3>
      <ul className={styles.servicesList}>
        <li>serv1</li>
        <li>serv2</li>
        <li>serv3</li>
        <li>serv4</li>
        <li>serv5</li>
        <li>serv6</li>
      </ul>
    </div>
  );
}
