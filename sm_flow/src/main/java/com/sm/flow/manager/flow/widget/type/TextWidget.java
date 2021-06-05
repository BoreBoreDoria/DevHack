package com.sm.flow.manager.flow.widget.type;

import lombok.Builder;
import lombok.Data;

/**
 * Текстовой виджет
 */
@Data
@Builder(toBuilder = true)
public class TextWidget implements WidgetBody {

    /**
     * Паттерн
     */
    String regex;

    /**
     * Вспомогательный текст
     */
    String text;

    /**
     * placeholder для поля ввода
     */
    String hint;

    /**
     * Текст в случаи ошибки
     */
    String error;
}
