package com.sm.flow.manager.flow.widget.type;

import lombok.Builder;
import lombok.Data;

/**
 * Информация о виджете
 */
@Data
@Builder(toBuilder = true)
public class Widget {

    /**
     * Тип виджета
     */
    WidgetType widgetType;

    /**
     * Тело виджета
     */
    WidgetBody widgetBody;
}
