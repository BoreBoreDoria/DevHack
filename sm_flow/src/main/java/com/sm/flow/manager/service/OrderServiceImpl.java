package com.sm.flow.manager.service;

import com.sm.flow.manager.integration.OrderAdapter;
import com.sm.flow.manager.model.OrderInfo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor(onConstructor = @__({@Autowired}))
public class OrderServiceImpl implements OrderService {

    private final OrderAdapter orderAdapter;

    @Override
    public void sendOrder(OrderInfo order) {
        orderAdapter.sendOrder(order);
    }
}
