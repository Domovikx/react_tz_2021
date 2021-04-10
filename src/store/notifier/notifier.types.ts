export type Message = string | null;

export type Variant =
  | 'warning'
  | 'success'
  | 'default'
  | 'error'
  | 'info'
  | undefined;

export interface NotifierState {
  variant: Variant;
  message: Message;
}

export enum NOTIFIER {
  CREATE = 'NOTIFIER.CREATE',
}

export type NotifierAction = {
  type: NOTIFIER.CREATE;
  payload: {
    variant: Variant;
    message: Message;
  };
};
