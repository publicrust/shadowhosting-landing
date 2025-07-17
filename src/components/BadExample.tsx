import React from 'react';

// This file demonstrates ESLint errors when using 'any'
// Uncomment the lines below to see the errors

// const badFunction = (param: any): any => {
//   return param.someProperty;
// };

// const badComponent = (props: any): JSX.Element => {
//   return <div>{props.anything}</div>;
// };

// const badArray: any[] = [1, 2, 3];

const GoodExample: React.FC = () => {
  return (
    <div>
      <h3>This component follows proper TypeScript practices</h3>
      <p>No 'any' types used here!</p>
    </div>
  );
};

export default GoodExample; 