package com.sm.flow.manager.model;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public enum CurrencyType {
    RUB("Рубли"),
    EUR("Евро"),
    USD("Доллары");

    private String value;

    CurrencyType(String value) {
        this.value = value;
    }

    public String getValue(){
        return this.value;
    }

    public static List<String> getName(){
        return Arrays.stream(CurrencyType.values()).map(v -> v.toString()).collect(Collectors.toList());
    }

    public static List<String> getSubName(){
        return Arrays.stream(CurrencyType.values()).map(v -> v.getValue()).collect(Collectors.toList());
    }
}
