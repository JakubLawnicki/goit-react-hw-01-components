import PropTypes from 'prop-types';

export function Statistics({ stats }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {stats.map(stat => {
          const id = stat.id;
          const label = stat.label;
          const percentage = stat.percentage;

          return (
            <li key={id} class="item">
              <span class="label">{label}</span>
              <span class="percentage">{percentage}</span>
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
