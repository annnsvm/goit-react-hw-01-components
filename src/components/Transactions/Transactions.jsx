import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const Transactions = ({ items }) => {
  return (
    <section>
      <h2 className="title">Transactions History</h2>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th className={css.tableHead}>Type</th>
            <th className={css.tableHead}>Amount</th>
            <th className={css.tableHead}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.tableData}>
              <td className={css.tableDataCell}>{type}</td>
              <td className={css.tableDataCell}>{amount}</td>
              <td className={css.tableDataCell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
