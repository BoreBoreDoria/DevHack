package com.sm.flow.manager.flow;

import com.sm.flow.manager.flow.widget.InfoData;
import lombok.Builder;
import lombok.Data;
import com.sm.flow.manager.flow.widget.StatusType;

/**
 * Flow для отображения UI
 */
@Data
@Builder(toBuilder = true)
public class FlowEntity {

    /**
     * Название сценария
     */
    String flowName;

    /**
     * Статус
     */
    StatusType status;

    /**
     * Сообщение при ошибке
     */
    String errorMessage;

    /**
     * Данные отображения на UI
     */
    InfoData data;
}
