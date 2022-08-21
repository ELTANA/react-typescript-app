import styles from './Button.module.scss'

type Props = {
  name: string
}

const Button = ({ name }: Props): JSX.Element => (
  <button className={styles.btn}>{name}</button>
)

export default Button
