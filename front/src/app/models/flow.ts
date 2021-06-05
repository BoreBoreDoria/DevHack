export enum FlowNameTypes {
  CreateCurrency = 'createCurrencyFlow',
  CreateSwift = 'createSwiftFlow',
  CreateNsj = 'createNsjFlow'
}

export enum FlowNameStatuses {
  Init = 'INIT',
  Success = 'SUCCESS'
}

export enum FlowTextTypes {
  Info = 'INFO'
}

export enum FlowWidgetTypes {
  List = 'LIST',
  FloatNumber = 'FloatNumber'
}

export interface Flow {
  flowName: FlowNameTypes;
  status: FlowNameStatuses;
  errorMessage: null;
  data: {
    section: {
      title: string;
      textInfo: {
        textType: FlowTextTypes;
        text: string;
      }
    },
    widget: {
      widgetType: FlowWidgetTypes;
      widgetBody: {
        text?: string[];
        subText?: string[];
        min?: number,
        max?: number,
        hint?: string,
        error?: string
      };
    };
  };
}
