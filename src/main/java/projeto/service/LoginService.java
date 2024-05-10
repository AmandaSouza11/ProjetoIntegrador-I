package projeto.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.entity.LoginEntity;
import projeto.repository.LoginRepository;


@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public boolean authenticate(String email, String senha) {
        LoginEntity login = loginRepository.findByEmail(email);
        return login != null && login.getSenha().equals(senha);
    }
}
