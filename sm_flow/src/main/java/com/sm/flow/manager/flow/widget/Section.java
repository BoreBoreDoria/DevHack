package com.sm.flow.manager.flow.widget;

import lombok.Builder;
import lombok.Data;

/**
 * Секция информации о шаге
 */
@Data
@Builder(toBuilder = true)
public class Section {

    /**
     * Название шага
     */
    String title;

    /**
     * Вспомогательный текст
     */
    TextInfo textInfo;
}
