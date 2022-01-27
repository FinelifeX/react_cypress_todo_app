import classnames from "../../utils/classnames";
import styles from './List.module.css';

export default function ListItem({ children, className, ...props }) {
  return (
    <li className={classnames(styles.listItem, className)} {...props}>
      {children}
    </li>
  )
}