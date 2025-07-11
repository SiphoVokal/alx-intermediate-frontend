// src/main.ts

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


