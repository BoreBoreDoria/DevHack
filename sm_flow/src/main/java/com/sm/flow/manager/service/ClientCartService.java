package com.sm.flow.manager.service;


import com.sm.flow.manager.dto.ClientCartDto;

/**
 * Сервис управления карточкой клиента
 */
public interface ClientCartService {

    /**
     * Получение карточки клиента
     * @param clientId Идентификатор клиента
     * @return Заполенная карточка клиента
     */
    ClientCartDto getCart(String clientId);

}
