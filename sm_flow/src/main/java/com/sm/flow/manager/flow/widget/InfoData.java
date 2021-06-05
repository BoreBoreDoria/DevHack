package com.sm.flow.manager.flow.widget;

import com.sm.flow.manager.flow.widget.type.Widget;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class InfoData {
    Section section;
    Widget widget;
}
