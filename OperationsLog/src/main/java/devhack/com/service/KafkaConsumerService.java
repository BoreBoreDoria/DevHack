package devhack.com.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;

public class KafkaConsumerService {
    private final Logger logger
            = LoggerFactory.getLogger(KafkaConsumerService.class);
    private static final String TOPIC_NAME = "log-request";
    private static final String TOPIC_NAME_CHANGE = "change-request";

    @KafkaListener(topics = TOPIC_NAME)
    public void consume(String message) {
        logger.info(String.format("Message recieved -> %s", message));
    }

}