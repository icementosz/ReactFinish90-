import { useState, useEffect } from 'react';

export function useSomeState(someParam) {
  const [someState, setSomeState] = useState([]);

  useEffect(() => {
    // do some state logic here if you want
  });

  return { someState, setSomeState };
}