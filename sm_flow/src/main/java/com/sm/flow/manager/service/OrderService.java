package com.sm.flow.manager.service;

import com.sm.flow.manager.model.OrderInfo;

/**
 * Сервис отправки сформированых заказов
 */
public interface OrderService {

    /**
     * Отправка заказа
     * @param order информация о заказе
     */
    void sendOrder(OrderInfo order);
}
