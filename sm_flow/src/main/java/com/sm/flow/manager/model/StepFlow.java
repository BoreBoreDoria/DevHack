package com.sm.flow.manager.model;

import lombok.Data;

/**
 * Сущность получаемая от UI для перехода на следующий щаг
 */
@Data
public class StepFlow {
    /**
     * Название сценария
     */
    String flowName;

    /**
     *  Шаг
     */
    Long step;

    /**
     * Значение заполенное клиентом
     */
    String value;

}
