

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; 
}

// Example usage:
const teacher1: Teacher = {
  firstName: "Jane",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Durban",
  contract: false,
};

const teacher2: Teacher = {
  firstName: "Thabo",
  lastName: "Mokoena",
  fullTimeEmployee: false,
  yearsOfExperience: 10,
  location: "Pretoria",
  remote: true,
  specialization: "Mathematics"
};

interface Directors {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;   
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
  };

  console.log(printTeacher("John", "Doe"));

  // Interface describing the class structure
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Sipho", "Hlatshwayo");
console.log(student.displayName());     // Output: Sipho
console.log(student.workOnHomework());  // Output: Currently working
