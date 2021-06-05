package com.sm.flow.manager.service;


import com.sm.flow.manager.model.ClientRole;

import java.util.HashMap;

/**
 * Сервис работы с конфигурацией клиента
 */
public interface ClientConfigService {

    /**
     * Метод получения конфигов клиента
     * @param role Роль клиента
     * @return Мапа в виде <>Название-значение</>
     */
    HashMap<String, Boolean> getConfig(ClientRole role);
}
