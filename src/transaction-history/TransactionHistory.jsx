import Transaction from './Transaction';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.head}>
          <th className={s.headProperties}>Type</th>
          <th className={s.headProperties}>Amount</th>
          <th className={s.headProperties}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={s.string} key={item.id}>
            <Transaction
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
