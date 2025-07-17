// This file demonstrates ESLint errors when using 'any'
// Uncomment the lines below to see the errors

// const badFunction = (param: any): any => {
//   return param.someProperty;
// };

// const badVariable: any = "this will cause an error";

// const badArray: any[] = [1, 2, 3];

// const badObject: { [key: string]: any } = {};

// This is the correct way:
interface ProperType {
  id: number;
  name: string;
}

const goodFunction = (param: ProperType): string => {
  return param.name;
};

export { goodFunction }; 