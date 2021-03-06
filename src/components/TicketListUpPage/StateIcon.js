import React from 'react';
import './StateIcon.css';
import PropTypes from 'prop-types';
export const StateIcon = ({ label, background, word, ...props }) => {
  return (
    <>
      <div className={'StateIcon'}>
        <div
          className={[
            'StateIcon-circle',
            `StateIcon-background-${background}`
          ].join(' ')}
          {...props}
        ></div>

        <div className={`StateIcon-info-${word}`}>{label}</div>
      </div>
    </>
  );
};
StateIcon.propTypes = {
  label: PropTypes.string.isRequired,
  background: PropTypes.oneOf(['green', 'red', 'blue', 'yellow']),
  word: PropTypes.oneOf(['four', 'five'])
};

StateIcon.defaultProps = {
  label: 'ν°μΌ μν',
  background: 'red',
  word: 'four'
};
