import { User } from 'kinvey-html5-sdk';
import { Role } from './role.enum';

export class VUser extends User {
  role: Role;
}
