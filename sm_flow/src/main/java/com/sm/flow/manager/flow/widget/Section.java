package com.sm.flow.manager.flow.widget;

import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Section {

    String title;
    TextInfo textInfo;
}
