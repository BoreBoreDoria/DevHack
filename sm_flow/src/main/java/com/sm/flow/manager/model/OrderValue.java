package com.sm.flow.manager.model;

import lombok.Data;

/**
 * Данные параметра
 */
@Data
public class OrderValue {

    /**
     * Название параметра
     */
    String paramName;

    /**
     * Значение
     */
    String value;
}
