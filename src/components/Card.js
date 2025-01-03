'use client';

import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function FactCard({ fact }) {
  return (
    <Card>
      <Card.Body>{fact}</Card.Body>
    </Card>
  );
}

FactCard.propTypes = {
  fact: PropTypes.string.isRequired,
};

export default FactCard;
