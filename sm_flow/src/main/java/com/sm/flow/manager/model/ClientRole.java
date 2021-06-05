package com.sm.flow.manager.model;

/**
 * Роли клиента
 */
public enum ClientRole {
    MASS("Массовый сегмент"),
    PREMIER("Premier сегмент"),
    VIP("VIP сегмент");

    ClientRole(String name) {
    }

    public String getName() {
        return this.name();
    }
}
