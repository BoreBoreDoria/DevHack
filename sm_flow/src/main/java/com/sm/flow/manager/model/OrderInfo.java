package com.sm.flow.manager.model;

import lombok.Data;
import lombok.ToString;

import java.util.List;

/**
 * Информация о заказе
 */
@Data
@ToString
public class OrderInfo {

    String clientId;

    /**
     * Название операции
     */
    String flowName;

    /**
     * Идентификатор клиента
     */
    String clientId;

    /**
     * Список параметров
     */
    List<OrderValue> valueList;
}
