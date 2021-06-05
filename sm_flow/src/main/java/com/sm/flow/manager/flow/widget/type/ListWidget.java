package com.sm.flow.manager.flow.widget.type;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder(toBuilder = true)
public class ListWidget implements WidgetBody {
    List<String> text;
    List<String > subText;
}
