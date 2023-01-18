export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: "Male"|"Female";
  nationality: string;
  status: "Single"|"Married";
  homeAddress: string;
  elemSchool: string;
  highSchool: string;
  college?: string;

}
