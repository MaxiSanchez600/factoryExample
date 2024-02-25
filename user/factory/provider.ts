// Este provider es la interfaz que tienen que respetar el resto de Providers. Ademas, cuenta con funciones que no tienen que ser implementadas
// Por los providers que lo extienden, por Ej, getName, esta funcion es unica para todos los providers, y al usarla, la usan de aca, ya que la extienden,
// En cambio el create, debe ser implementado en cada provider, y si por alguna razon llega a caer aca, rompe.

export enum UserType {
  EMPLOYEE,
  ADMIN,
}

export interface User {
  name: string;
  type: UserType;
  description: string;
}

export class UserProvider {
  public create(name: string): User {
    throw new Error("Not implemented, provider not found");
  }

  public getName(user: User) {
    return user.name;
  }
}
