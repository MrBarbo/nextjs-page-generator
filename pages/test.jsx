import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const TestPage = () => {
  const router = useRouter();
  const { name, description, mission, vission, objectives } = router.query;

  // Use the values in your component or perform any other logic
  useEffect(() => {
    console.log('Name:', name);
    console.log('Description:', description);
    console.log('Mission:', mission);
    console.log('Vission:', vission);
    console.log('Objectives:', objectives);
  }, [name, description, mission, vission, objectives]);

  return (
    <div>
      {/* Your component logic here */}
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Mission: {mission}</p>
      <p>Vission: {vission}</p>
      <p>Objectives: {objectives}</p>
    </div>
  );
};

export default TestPage;