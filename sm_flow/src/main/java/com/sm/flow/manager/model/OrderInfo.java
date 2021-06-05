package com.sm.flow.manager.model;

import com.sm.flow.manager.model.OrderValue;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
public class OrderInfo {
    String flowName;
    List<OrderValue> valueList;
}
