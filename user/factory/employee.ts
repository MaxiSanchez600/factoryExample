import { UserProvider, UserType } from "./provider";

export class EmployeeHelper extends UserProvider {
  public create(name: string) {
    return {
      name,
      type: UserType.EMPLOYEE,
      description: "This is an employee",
    };
  }
}
