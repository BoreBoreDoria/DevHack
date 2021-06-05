package com.sm.flow.manager.integration;

import com.sm.flow.manager.dto.ClientCartDto;
import com.sm.flow.manager.model.ClientRole;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
@AllArgsConstructor(onConstructor=@__({@Autowired}))
public class ClientCardAdapter {

    private final RestTemplate restTemplate;

 public ClientCartDto getClient(String userId){
     final String uri = "http://localhost:8080/auth/client/{user_id}";
     Map<String, String> params = new HashMap<String, String>();
     params.put("user_id", userId);
     ClientCartDto client = restTemplate.getForObject(uri, ClientCartDto.class, params);
     if (client == null) {
         throw new RuntimeException(String.format("Не найден клиент по client_id:%s ",userId));
     }
     return client;
 }

 public ClientCartDto getClientTest(String userId) {
    return new ClientCartDto(userId,"Andrei","Serbin",
            "Alekseevitch","test@mail.ru", ClientRole.MASS);
 }

}
