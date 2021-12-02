import PropTypes from 'prop-types';
import s from './Transaction.module.css';

export default function Transaction({ type, amount, currency }) {
  return (
    <>
      <td className={s.properties}>{type}</td>
      <td className={s.properties}>{amount}</td>
      <td className={s.properties}>{currency}</td>
    </>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
