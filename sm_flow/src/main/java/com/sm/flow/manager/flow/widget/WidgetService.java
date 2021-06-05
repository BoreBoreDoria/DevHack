package com.sm.flow.manager.flow.widget;

import com.sm.flow.manager.flow.widget.type.ListWidget;
import com.sm.flow.manager.flow.widget.type.Widget;
import com.sm.flow.manager.flow.widget.type.WidgetType;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Сервис создания виджетов
 */
@Service
public class WidgetService {

    /**
     * Создание виджета типа LIST
     * @param text основной текст
     * @param subText дополнительный
     * @return ListWidget
     */
    public Widget getList(List<String > text, List<String > subText) {
        ListWidget listWidget = ListWidget.builder()
                .text(text)
                .subText(subText)
                .build();

       return Widget.builder()
               .widgetType(WidgetType.LIST)
               .widgetBody(listWidget)
               .build();
    }
}
