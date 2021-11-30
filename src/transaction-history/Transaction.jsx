import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function Transaction({ type, amount, currency }) {
  return (
    <div className={s.wrapper}>
      <td className={s.properties}>{type}</td>
      <td className={s.properties}>{amount}</td>
      <td className={s.properties}>{currency}</td>
    </div>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
