package com.sm.flow.manager.flow.widget.type;

import lombok.Builder;
import lombok.Data;

import java.util.List;

/**
 * Виджет листа
 */
@Data
@Builder(toBuilder = true)
public class ListWidget implements WidgetBody {

    /**
     * Основной текст
     */
    List<String> text;

    /**
     * Вспомогательный текст
     */
    List<String > subText;
}
