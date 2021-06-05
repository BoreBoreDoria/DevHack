export enum HistoryEventStatuses {
  Success = 'success',
  Pending = 'pending',
  Reject = 'reject'
}

export enum HistoryEventTypes {
  Income = 'income',
  Cashout = 'cashout'
}

export interface HistoryEvent {
  date: string;
  state: HistoryEventStatuses;
  type: HistoryEventTypes;
  title: string;
  value: string;
}
