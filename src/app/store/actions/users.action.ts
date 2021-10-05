import { Action } from '@ngrx/store';
import { SelectedUser } from '../models/users.model';

export enum UserActionType {
  ADD_ITEM = '[User] Add User',
}
export class AddItemAction implements Action {
  readonly type = UserActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: SelectedUser) {}
}
export type CourseAction = AddItemAction;