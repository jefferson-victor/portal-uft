/**
 * CampusView view component.
 * @module components/View/CampusView
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * CampusView view component class.
 * @function CampusView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const CampusView = (props) => {
  const { content } = props;

  return (
    <div id="page-document" className="ui container viewwrapper person-view">
      <header>
        <h1 className="documentFirstHeading">{content.title}</h1>
      </header>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
CampusView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.object,
    email: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired,
  }).isRequired,
};

export default CampusView;
