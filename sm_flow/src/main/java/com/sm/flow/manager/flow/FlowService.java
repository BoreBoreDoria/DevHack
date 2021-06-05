package com.sm.flow.manager.flow;

import com.sm.flow.manager.flow.script.CurrencyScript;
import com.sm.flow.manager.flow.widget.*;
import com.sm.flow.manager.model.OrderInfo;
import com.sm.flow.manager.model.StepFlow;
import com.sm.flow.manager.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor(onConstructor = @__({@Autowired}))
public class FlowService {

    private final CurrencyScript currencyScript;
    private final OrderService orderService;

    public FlowEntity startFlow(String flowName, String clientId) {

        if (FlowType.CREATE_CURRENCY.getName().equals(flowName)) {
            return currencyScript.startFlow(clientId);
        }
        return null;
    }

    public FlowEntity stepFlow(StepFlow flow) {
        if (FlowType.CREATE_CURRENCY.getName().equals(flow.getFlowName())) {
            return currencyScript.stepFlow(flow.getStep(), flow.getValue());
        }
        return null;
    }

    public FlowEntity createOrder(OrderInfo orderInfo) {
        orderService.sendOrder(orderInfo);
        InfoData infoData = InfoData.builder()
                .section(Section.builder()
                        .title("Заявка на покупку оформлена")
                        .textInfo(TextInfo.builder()
                                .text("Заявка на покупку валюты оформлена." +
                                        " Вы можете просмотреть её статус в истории платежей")
                                .textType(TextType.INFO)
                                .build())
                        .build())
                .build();

        return FlowEntity.builder()
                .flowName(orderInfo.getFlowName())
                .data(infoData)
                .status(StatusType.ORDER)
                .build();
    }

}
