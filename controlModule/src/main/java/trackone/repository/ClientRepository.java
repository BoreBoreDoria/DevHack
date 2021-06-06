package trackone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import trackone.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
