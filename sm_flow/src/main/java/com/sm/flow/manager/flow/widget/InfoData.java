package com.sm.flow.manager.flow.widget;

import com.sm.flow.manager.flow.widget.type.Widget;
import lombok.Builder;
import lombok.Data;

/**
 * Основной блок Flow
 */
@Data
@Builder(toBuilder = true)
public class InfoData {
    Section section;
    Widget widget;
}
