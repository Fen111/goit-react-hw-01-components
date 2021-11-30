import s from './statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <section className={s.container}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statList}>
        {stats.map(stat => (
          <li className={s.item} key={stat.id}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
