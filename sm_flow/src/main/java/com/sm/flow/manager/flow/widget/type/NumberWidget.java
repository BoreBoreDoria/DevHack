package com.sm.flow.manager.flow.widget.type;

import lombok.Builder;
import lombok.Data;

/**
 * Виджет ввода чисел
 */
@Data
@Builder(toBuilder = true)
public class NumberWidget implements WidgetBody {

    /**
     * Минимальное значение
     */
    float min;

    /**
     * Максимальное значение
     */
    float max;

    /**
     * Текст подсказка
     */
    String text;

    /**
     * Placeholder поля ввода
     */
    String hint;

    /**
     * Текст в случаи ошибки
     */
    String error;
}
