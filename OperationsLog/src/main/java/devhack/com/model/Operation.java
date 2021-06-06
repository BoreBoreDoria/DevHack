package devhack.com.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
public class Operation {
    @Id
    @GeneratedValue
    private String oppId;
    private String oppName;
}
