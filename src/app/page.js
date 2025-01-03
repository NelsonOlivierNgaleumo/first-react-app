'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

import { useAuth } from '@/utils/context/authContext';
import { useEffect, useState } from 'react';

const dbUrl = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

function Home() {
  const [uselessFact, setUselessFact] = useState({});
  // we use this because we want the user to interact with the fact (If they knew the fact or not, if they knew, the function will be used to get a new fact, as it will keep track of the fact and make it possible to change the fact as well), the {} in the useState will return an object from the API. So technically, the entire function const [uselessFact, setUselessFact] = useState({}); is important as it's going to maintain whatever the value received from the API, and if that value changes the component (const fetchFact) is going to re-render, reason why we use useState.
  // uselessFact is a variable, and we are setting the value for that variable with setUselessFact, and that value is on-load of the component fetchFact. whatever the default value of useState({}) is, that is the first value it will have

  const { user } = useAuth();

  const fetchFact = async () => {
    // this async implies the function is a promise
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
    const fact = await response.json(); // this will convert the response from the fetch to a json format

    // console.log(fact);
    // when the component fetchFact runs goes out, fetches the response from the API, and that response is converted to a json format,fact. Now we are going to use this response (fact) we got back, to set the value for uselessFact using the setUselessFact
    setUselessFact(fact);
  };

  // fetchFact(); by using this, it going to keep looping and calling non-stop from the API, so we need to use useEffect which has a dependency array [] which will stop the looping from happening, because if anything is in that array [], it will watch it effect changed first before it re-renders the fetch component
  // useEffect accepts two arguments, the first argument is a function we want to run as side effect to return what we want "fetchFact();" and the second argument is a dependecy array [] that specifies the dependencies of the effect.
  // we also need to create a fxn selectResponse, that whenever we click on a button YES/NO, it creates an object and we want that object to contain (userid, factid and response), another response from the API

  const selectResponse = async (boolean) => {
    const val = boolean ? 'Yes' : 'No';
    const obj = {
      userId: user.uid,
      text: uselessFact.text,
    };

    await fetch(`${dbUrl}/response${val}.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    // console.log(boolean, obj);
    // with the above function only one response remains on the dom even after clicking button yes/no several times, in order to get other responses we need to call fetchFact as below
    fetchFact();
    // console.log(boolean, obj);
    return obj;
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    // <>This is a div</>
    // lets test this on the dom to see if fact is rendered there by calling text from fact using uselessFact.text
    <>
      <h2>{uselessFact.text}</h2>

      <h4>Did you know this fact?</h4>
      <button className="btn btn-success" type="button" onClick={() => selectResponse(true)}>
        YES
      </button>
      <button className="btn btn-danger" type="button" onClick={() => selectResponse(false)}>
        NO
      </button>
    </>
  );
}

export default Home;
