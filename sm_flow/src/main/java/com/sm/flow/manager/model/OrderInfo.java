package com.sm.flow.manager.model;

import lombok.Data;

import java.util.List;

/**
 * Информация о заказе
 */
@Data
public class OrderInfo {

    /**
     *  Название операции
     */
    String flowName;

    /**
     * Список параметров
     */
    List<OrderValue> valueList;
}
