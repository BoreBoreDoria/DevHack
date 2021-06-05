package com.sm.flow.manager.flow.widget.type;

import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class NumberWidget implements WidgetBody {
    float min;
    float max;
    String text;
    String hint;
    String error;
}
