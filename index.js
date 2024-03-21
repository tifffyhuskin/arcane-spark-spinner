import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';

/**
 * ArcaneSparkSpinner component displays a customizable spinner while content is loading.
 */
const ArcaneSparkSpinner = ({ loading, text, spinnerColor, spinnerSize }) => {
  return (
    <div>
      <Loader loaded={!loading} color={spinnerColor} scale={spinnerSize}>
        <div>{text}</div>
      </Loader>
    </div>
  );
};

ArcaneSparkSpinner.propTypes = {
  /** Boolean value indicating whether the spinner should be displayed or not */
  loading: PropTypes.bool.isRequired,
  /** Text to display alongside the spinner */
  text: PropTypes.string,
  /** Color of the spinner */
  spinnerColor: PropTypes.string,
  /** Size of the spinner */
  spinnerSize: PropTypes.number,
};

ArcaneSparkSpinner.defaultProps = {
  text: 'Loading...',
  spinnerColor: '#000000',
  spinnerSize: 1,
};

export default ArcaneSparkSpinner;
