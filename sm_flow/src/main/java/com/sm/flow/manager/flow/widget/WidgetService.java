package com.sm.flow.manager.flow.widget;

import com.sm.flow.manager.flow.widget.type.ListWidget;
import com.sm.flow.manager.flow.widget.type.Widget;
import com.sm.flow.manager.flow.widget.type.WidgetType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WidgetService {

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

    public TextInfo getInfo(TextType type, String text) {
        return new TextInfo(type, text);
    }
}
