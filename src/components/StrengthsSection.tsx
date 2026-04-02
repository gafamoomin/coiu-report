import styles from './StrengthsSection.module.css'
import { strengths } from '../data'

export default function StrengthsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionTag}>CoIU固有の強み</div>
        <h2 className={styles.sectionTitle}>他の新設大学にはない差別化要因</h2>
        <p className={styles.sectionDesc}>
          批判的検証と並行して、CoIUが持つ独自の強みを公正に評価します。これらが予測を武雄アジア大学より上振れさせる要因となります。
        </p>

        <div className={styles.grid}>
          {strengths.map((s, i) => (
            <div key={i} className={styles.card} style={{ borderTopColor: s.color }}>
              <div className={styles.icon}>{s.icon}</div>
              <div className={styles.title} style={{ color: s.color }}>{s.title}</div>
              <p className={styles.detail}>{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
