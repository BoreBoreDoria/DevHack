package com.sm.flow.manager.integration;

import com.sm.flow.manager.dto.ClientCartDto;
import com.sm.flow.manager.model.ClientRole;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

/**
 * Адаптер получения данных о клиенте
 */
@Service
@AllArgsConstructor(onConstructor = @__({@Autowired}))
@Slf4j
public class ClientCardAdapter {

    private final RestTemplate restTemplate;

    /**
     * Метод обращается к ФП Авторизации для получения карточки клиента по его идентификатору
     *
     * @param userId идентификатор клиента
     * @return карточка клиента
     */
    public ClientCartDto getClient(String userId) {
        String uri = "http://localhost:8080/auth/client/{user_id}";
        Map<String, String> params = new HashMap<String, String>();
        params.put("user_id", userId);
        ClientCartDto client = restTemplate.getForObject(uri, ClientCartDto.class, params);
        if (client == null) {
            log.debug("Не удалось получить карточку клиента: {}", userId);
        }
        return client;
    }

    /**
     * Mock метод
     */
    public ClientCartDto getClientTest(String userId) {
        return new ClientCartDto(userId, "Andrei", "Serbin",
                "Alekseevitch", "test@mail.ru", ClientRole.VIP);
    }

}
