package com.sm.flow.manager.flow.widget.type;

import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class TextWidget implements WidgetBody {
    String regex;
    String text;
    String hint;
    String error;
}
