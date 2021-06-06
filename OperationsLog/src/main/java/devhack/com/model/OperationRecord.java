package devhack.com.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Entity
public class OperationRecord {

    @Id
@GeneratedValue
    private long recordId;

    private long userId;
    private long operationId;
    private LocalDateTime timesatmp;
    private String status;
    private String comment;

}
