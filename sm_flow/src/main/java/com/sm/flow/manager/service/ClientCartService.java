package com.sm.flow.manager.service;


import com.sm.flow.manager.dto.ClientCartDto;

public interface ClientCartService {

    ClientCartDto getCart(String clientId);

}
