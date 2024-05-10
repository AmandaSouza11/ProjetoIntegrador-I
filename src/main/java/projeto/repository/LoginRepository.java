package projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.entity.LoginEntity;

public interface LoginRepository extends JpaRepository<LoginEntity, Long>{

    LoginEntity findByEmail(String email);
    
}
