import PropTypes from 'prop-types';
import css from './transactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          const id = item.id;
          const type = item.type;
          const amount = item.amount;
          const currency = item.currency;
          return (
            <tr key={id}>
              <td className={css.cell}>{type}</td>
              <td className={css.cell}>{amount}</td>
              <td className={css.cell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
