package com.sm.flow.manager.flow;

public enum FlowType {
    CREATE_CURRENCY("createCurrencyFlow"),
    GET_HISTORY("getHistory"),
    CREATE_SWIFT("createSwiftFlow"),
    CREATE_NSJ("createNsjFlow");

    private String name;

    FlowType(String name) {
        this.name = name;
    }

    public String getName(){
        return this.name;
    }
}
