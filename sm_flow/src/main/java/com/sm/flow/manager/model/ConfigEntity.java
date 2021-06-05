package com.sm.flow.manager.model;

import lombok.NonNull;
import lombok.Value;

/**
 * Конфигурация
 */
@Value
public class ConfigEntity {

    /**
     * Название конфига
     */
    @NonNull
    String configName;

    /**
     * Статус
     */
    @NonNull
    boolean enable;
}
