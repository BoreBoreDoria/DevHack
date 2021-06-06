package com.sm.flow.manager.flow.script;

import com.sm.flow.manager.flow.FlowEntity;
import com.sm.flow.manager.flow.FlowType;
import com.sm.flow.manager.flow.widget.*;
import com.sm.flow.manager.flow.widget.type.NumberWidget;
import com.sm.flow.manager.flow.widget.type.Widget;
import com.sm.flow.manager.flow.widget.type.WidgetType;
import com.sm.flow.manager.model.CurrencyType;
import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class CurrencyScript {

    String id;

    private final WidgetService widgetService;

    public CurrencyScript(WidgetService widgetService) {
        this.widgetService = widgetService;
    }

    public FlowEntity startFlow(String clientId) {
        id = clientId;

        InfoData infoData = InfoData.builder()
                .section(Section.builder()
                        .title("1 шаг: Выберите валюту")
                        .textInfo(TextInfo.builder()
                                .text("Выберите списываемую валюту")
                                .textType(TextType.INFO)
                                .build())
                        .build())
                .widget(widgetService.getList(CurrencyType.getName(), CurrencyType.getSubName()))
                .build();

        return FlowEntity.builder()
                .flowName(FlowType.CREATE_CURRENCY.getName())
                .data(infoData)
                .status(StatusType.SUCCESS)
                .build();

    }

    public FlowEntity stepFlow(Long step, String value) {
        if (step == 1L) {
            return currencyTo();
        } else if (step == 2L) {
            return sumStep();
        }
        return null;
    }

    private FlowEntity sumStep() {
        InfoData infoData = InfoData.builder()
                .section(Section.builder()
                        .title("3 шаг: Сумма")
                        .textInfo(TextInfo.builder()
                                .text("Введите сколько валюты вы хотите купить")
                                .textType(TextType.INFO)
                                .build())
                        .build())
                .widget(Widget.builder()
                        .widgetType(WidgetType.NUMBER_FLOAT)
                        .widgetBody(NumberWidget.builder()
                                .min(1)
                                .max(5000)
                                .hint("Введите сумму")
                                .error("Вы должны ввести сумму от 1 до 5000")
                                .text("Введите сумму от 1 до 5000")
                                .build())
                        .build())
                .build();

        return FlowEntity.builder()
                .flowName(FlowType.CREATE_CURRENCY.getName())
                .data(infoData)
                .status(StatusType.END)
                .build();
    }

    public FlowEntity currencyTo() {
        InfoData infoData = InfoData.builder()
                .section(Section.builder()
                        .title("2 шаг: Выберите валюту")
                        .textInfo(TextInfo.builder()
                                .text("Выберитю валюту зачисления")
                                .textType(TextType.INFO)
                                .build())
                        .build())
                .widget(widgetService.getList(CurrencyType.getName(), CurrencyType.getSubName()))
                .build();

        return FlowEntity.builder()
                .flowName(FlowType.CREATE_CURRENCY.getName())
                .data(infoData)
                .status(StatusType.SUCCESS)
                .build();
    }

}
