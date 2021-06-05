package com.sm.flow.manager.model;

import lombok.Builder;
import lombok.Value;

import java.util.ArrayList;
import java.util.List;

@Value
@Builder(toBuilder = true)
public class ConfigEnabler {
    ConfigEntity createCurrency;
    ConfigEntity getHistory;
    ConfigEntity createSwift;
    ConfigEntity createNsj;

    public List<ConfigEntity> getConfig(){
        List<ConfigEntity> list = new ArrayList<>();
        list.add(createCurrency);
        list.add(getHistory);
        list.add(createSwift);
        list.add(createNsj);
        return list;
    }
}
