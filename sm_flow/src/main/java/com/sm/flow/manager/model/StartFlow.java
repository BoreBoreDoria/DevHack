package com.sm.flow.manager.model;

import lombok.Data;

/**
 * Сущность получаемая от UI для перехода на следующий щаг
 */
@Data
public class StartFlow {

    /**
     * Название сценария
     */
    String flowName;

    /**
     * Идентификатор клиента
     */
    String clientId;
}
