package com.sm.flow.manager.flow.widget.type;

import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Widget {
    WidgetType widgetType;
    WidgetBody widgetBody;
}
