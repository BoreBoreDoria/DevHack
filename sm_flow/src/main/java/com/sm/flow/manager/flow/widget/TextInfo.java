package com.sm.flow.manager.flow.widget;

import lombok.Builder;
import lombok.Data;

/**
 * Информация о тексте
 */
@Data
@Builder(toBuilder = true)
public class TextInfo {

    /**
     * Тип
     */
    TextType textType;

    /**
     * Текст
     */
    String text;
}
