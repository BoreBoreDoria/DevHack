package trackone.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@Entity
public class Account {

    @Id
    @GeneratedValue
    private long accountId;

    private long userId;
    private String valute;

    private LocalDate regDate;
}
