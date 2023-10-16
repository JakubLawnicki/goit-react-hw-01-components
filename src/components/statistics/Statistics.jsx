import PropTypes from 'prop-types';
import css from './statistics.module.css';

export function Statistics({ stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css['stat-list']}>
        {stats.map(stat => {
          const id = stat.id;
          const label = stat.label;
          const percentage = stat.percentage;

          return (
            <li key={id} className={css.item}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
