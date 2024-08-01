import PropTypes from 'prop-types';
import '../../Css/Skeleton.css'

const SkeletonElement = ({ type }) => {
  const classes = `skeleton ${type}`;

  return (
    <div className={classes}></div>
  );
}

SkeletonElement.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SkeletonElement;
