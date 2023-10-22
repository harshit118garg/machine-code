import { Employee } from "./employee-record-types";



export let dummyObj: Employee = {
  name: "John Snow",
  age: "20",
  phone: "9876543210",
  dob: "01.01.1950",
  id: crypto.randomUUID(),
};

export let emptyObj: Employee = {
  name: "",
  age: "",
  phone: "",
  dob: "",
  id: "",
};
