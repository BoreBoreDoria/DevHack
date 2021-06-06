package trackone.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
public class Client {
    @Id
    @GeneratedValue
    private long clientId;

    private String firstName;
    private String lastName;
    private String patronymic;

    private Long accountId;
}
