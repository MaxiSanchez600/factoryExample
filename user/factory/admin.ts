import { UserProvider, UserType } from "./provider";

export class AdminHelper extends UserProvider {
  public create(name: string) {
    return {
      name,
      type: UserType.ADMIN,
      description: "This is an admin",
    };
  }
}
