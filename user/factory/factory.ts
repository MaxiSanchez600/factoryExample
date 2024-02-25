import { AdminHelper } from "./admin";
import { EmployeeHelper } from "./employee";
import { User, UserProvider, UserType } from "./provider";

export class UserFactory {
  private userProviderMap = {
    [UserType.ADMIN]: new AdminHelper(),
    [UserType.EMPLOYEE]: new EmployeeHelper(),
  };

  public getProvider = (type: UserType): UserProvider => {
    return this.userProviderMap[type];
  };

  public create = (name: string, type: UserType): User => {
    const provider = this.getProvider(type);
    return provider.create(name);
  };

  public getName = (user: User): string => {
    const provider = this.getProvider(user.type);
    return provider.getName(user);
  };
}

export const userFactory = new UserFactory();
