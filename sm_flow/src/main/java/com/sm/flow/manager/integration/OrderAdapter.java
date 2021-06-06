package com.sm.flow.manager.integration;

import com.sm.flow.manager.model.OrderInfo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import reactor.core.publisher.Flux;

import java.util.Collections;
import java.util.Date;

@Component
@Slf4j
@AllArgsConstructor(onConstructor = @__({@Autowired}))
public class OrderAdapter {

    private final RestTemplate restTemplate;

    @Autowired
    KafkaTemplate<String, OrderInfo> KafkaJsontemplate;
    String TOPIC_NAME = "log-request";
    String TOPIC_NAME_CHANGE = "change-request";


    public void sendOrder(OrderInfo order) {

        //send to logging topic for journal service
        KafkaJsontemplate.send(TOPIC_NAME,order);
        //send to control panel topic for making changes
        KafkaJsontemplate.send(TOPIC_NAME_CHANGE,order);


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
