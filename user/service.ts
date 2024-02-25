import { userFactory } from "./factory/factory";
import { User, UserType } from "./factory/provider";

export class UserService {
  public create(name: string, type: UserType): User {
    return userFactory.create(name, type);
  }
}
