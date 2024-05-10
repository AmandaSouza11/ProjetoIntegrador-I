package projeto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projeto.data.LoginData;
import projeto.service.LoginService;

@RestController
@RequestMapping("login")
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping()
    public boolean login(@RequestBody LoginData loginRequest) {
        String email = loginRequest.getEmail();
        String senha = loginRequest.getSenha();

        if (loginService.authenticate(email, senha)) {
            return true;
        } else {
            return false;
        }
    }

}
