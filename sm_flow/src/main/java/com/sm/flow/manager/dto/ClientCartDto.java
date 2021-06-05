package com.sm.flow.manager.dto;

import com.sm.flow.manager.model.ClientRole;
import lombok.Data;
import lombok.ToString;

import java.util.HashMap;

/**
 * Карточка клиента
 */
@Data
@ToString
public class ClientCartDto {
    /**
     * Идентификатор клиента
     */
    Long clientId;

    /**
     * Имя
     */
    String firstName;

    /**
     * Фамилия
     */
    String lastName;

    /**
     * Отчество
     */
    String middleName;

    /**
     * Почта
     */
    String email;

    /**
     * Роль
     */
    ClientRole role;

    /**
     * Конфиги
     */
    HashMap<String, Boolean> config;

    public ClientCartDto(String  clientId, String firstName, String lastName, String middleName, String email, ClientRole role) {
        this.clientId = Long.valueOf(clientId);
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.email = email;
        this.role = role;
    }
}
