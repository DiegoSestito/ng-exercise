import { UserList } from './user-list.model';

export class UserDetails extends UserList {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;

  constructor(data: {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
    email: string;
  }) {
    super(data);
    this.avatar = data.avatar;
    this.email = data.email;
  }
}
