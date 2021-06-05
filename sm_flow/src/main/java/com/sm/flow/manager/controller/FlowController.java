package com.sm.flow.manager.controller;

import com.sm.flow.manager.flow.FlowEntity;
import com.sm.flow.manager.flow.FlowService;
import com.sm.flow.manager.model.OrderInfo;
import com.sm.flow.manager.model.StartFlow;
import com.sm.flow.manager.model.StepFlow;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/flow")
@AllArgsConstructor(onConstructor = @__({@Autowired}))
public class FlowController {

    private final FlowService flowService;

    @PostMapping(value = "/startFlow")
    public FlowEntity startFlow(@RequestBody StartFlow flow) {
        return flowService.startFlow(flow.getFlowName(), flow.getClientId());
    }

    @PostMapping(value = "/stepFlow")
    public FlowEntity stepFlow(@RequestBody StepFlow flow) {
        return flowService.stepFlow(flow);
    }

    @PostMapping(value = "/createOrder")
    public FlowEntity createOrder(@RequestBody OrderInfo orderInfo) {
        return flowService.createOrder(orderInfo);
    }
}
