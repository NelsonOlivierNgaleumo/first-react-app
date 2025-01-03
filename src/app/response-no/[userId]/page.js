import React from 'react';
import FactCard from '@/components/Card';
import PropTypes from 'prop-types';

export default async function ResponseNoPage({ params }) {
  const response = await fetch(`https://first-react-app-a3388-default-rtdb.firebaseio.com/responseNo.json?orderBy="userId"&equalTo="${params.userId}"`, { cache: 'no-store' });
  const facts = await response.json();

  // console.log(Object.values(facts)); this console log will return results in vscode terminal only instead of the dev tools because it is a server component

  return (
    <div>
      {Object.values(facts).map((fact, i) => (
        <FactCard key={i.text} fact={fact.text} />
      ))}
    </div>
  );
}

ResponseNoPage.propTypes = {
  params: PropTypes.string.isRequired,
};
