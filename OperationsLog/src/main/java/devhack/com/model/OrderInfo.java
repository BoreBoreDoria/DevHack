package devhack.com.model;

import lombok.Data;
import lombok.ToString;

import java.util.List;

@Data
@ToString
public class OrderInfo {

    String clientId;

    /**
     * Название операции
     */
    String flowName;

    /**
     * Список параметров
     */
    List<OrderValue> valueList;
}
