package com.sm.flow.manager.integration;

import com.sm.flow.manager.model.OrderInfo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;

@Component
@Slf4j
@AllArgsConstructor(onConstructor = @__({@Autowired}))
public class OrderAdapter {

    private final RestTemplate restTemplate;

    public void sendOrder(OrderInfo order) {
        String uri = "http://localhost:8080/order/send/";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        HttpEntity<OrderInfo> request = new HttpEntity<>(order, headers);
        ResponseEntity<OrderInfo> response = restTemplate.postForEntity(uri, request, OrderInfo.class);

        if (response.getStatusCode() == HttpStatus.CREATED) {
            log.debug("Запрос создан:{}", response.getBody());
        } else {
            log.debug("Request Failed: {}", response.getStatusCode());
        }
    }
}
