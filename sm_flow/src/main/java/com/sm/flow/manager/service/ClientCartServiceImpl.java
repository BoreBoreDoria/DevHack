package com.sm.flow.manager.service;

import com.sm.flow.manager.dto.ClientCartDto;
import com.sm.flow.manager.integration.ClientCardAdapter;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor(onConstructor=@__({@Autowired}))
public class ClientCartServiceImpl implements ClientCartService {

    private final ClientConfigService  clientConfigService;
    private final ClientCardAdapter clientCardAdapter;

    @Override
    public ClientCartDto getCart(String clientId) {
        ClientCartDto client = clientCardAdapter.getClientTest(clientId);
        client.setConfig(clientConfigService.getConfig(client.getRole()));
        return client;
    }
}
