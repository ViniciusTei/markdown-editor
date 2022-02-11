import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          Salvar
        </li>
        <li>
          Abrir arquivo
        </li>
      </ul>
      <h1>Markdown Editor</h1>
    </header>
  )
}