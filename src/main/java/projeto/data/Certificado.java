package projeto.data;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Getter
@Setter
public class Certificado {

    private String nome;
    
    public Certificado(String nome){
        this.nome = nome;
    }
}
