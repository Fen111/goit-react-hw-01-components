import randomColor from './randomColor';
import s from './Statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <section className={s.container}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
