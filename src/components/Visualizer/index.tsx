import { useMarkdown } from "../../hooks/useMarkdown"
import styles from './styles.module.css';

export default function Visuzalizer() {
  const { markdown } = useMarkdown()

  return <div className={styles.container}>{markdown}</div>
}