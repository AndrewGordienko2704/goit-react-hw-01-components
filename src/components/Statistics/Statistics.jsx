import PropTypes from 'prop-types';
import { CardStatistics, Title, StatList, Percentage, Item, Label } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <CardStatistics>
            <Title>{title}</Title>
            <StatList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <Item key={id}>
                            <Label>{label}</Label>
                            <Percentage>{percentage}%</Percentage>
                        </Item>
                    );
                })}
            </StatList>
        </CardStatistics>
    );       
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};