import { useMemo } from 'react';
import classnames from '../../utils/classnames';
import styles from './Button.module.css';

export default function Button({ type = 'primary', htmlType = 'button', className, ...props }) {
  const classNameBase = useMemo(() => {
    let result = styles.button;

    switch (type) {
      case 'secondary':
        result += ` ${styles.buttonSecondary}`;
        break;
      case 'primary':
      default:
        break;
    }

    return result;
  }, [type]);

  return <button className={classnames(classNameBase, className)} type={htmlType} {...props} />
}