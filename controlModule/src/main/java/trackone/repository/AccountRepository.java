package trackone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import trackone.model.Account;

public interface AccountRepository extends JpaRepository<Account, Long > {
}
