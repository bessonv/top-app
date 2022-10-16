import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import { format } from 'date-fns';
import cn from 'classnames';


export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
        <div className={styles.corp}>OwlTop @ 2020 - {format(new Date(), 'yyyy')} все права защищены</div>
        <a href="#" target="_blank" className={styles.agreement}>Пользовательское соглашение</a>
        <a href="#" target="_blank" className={styles.politics}>Политика конфиденциальности</a>
    </footer>
  );
};
