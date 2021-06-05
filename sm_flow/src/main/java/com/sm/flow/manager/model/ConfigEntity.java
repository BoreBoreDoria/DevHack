package com.sm.flow.manager.model;

import lombok.NonNull;
import lombok.Value;

@Value
public class ConfigEntity {
    @NonNull
    String configName;
    @NonNull
    boolean enable;
}
