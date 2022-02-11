import { useMarkdown } from '../../hooks/useMarkdown';
import styles from './styles.module.css';

export default function Editor() {
  const { setMarkdown } = useMarkdown();

  return (
    <div className={styles.editor_container}>
      <label htmlFor="editor-area">Entre seu markdown</label>
      <textarea name="editor-area" id="editor-area" onChange={(ev) => setMarkdown(ev.target.value)}></textarea>
    </div>
  )
}