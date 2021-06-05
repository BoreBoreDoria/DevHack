package com.sm.flow.manager.flow;

import com.sm.flow.manager.flow.widget.InfoData;
import lombok.Builder;
import lombok.Data;
import com.sm.flow.manager.flow.widget.StatusType;

@Data
@Builder(toBuilder = true)
public class FlowEntity {
    String flowName;
    StatusType status;
    String errorMessage;
    InfoData data;
}
