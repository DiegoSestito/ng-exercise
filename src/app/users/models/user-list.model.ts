export class UserList {
  id: number;
  firstName: string;
  lastName: string;

  constructor(data: { id: number; first_name: string; last_name: string }) {
    this.id = data.id;
    this.firstName = data.first_name;
    this.lastName = data.last_name;
  }
}
