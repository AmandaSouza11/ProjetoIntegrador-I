package projeto.data;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Getter
@Setter
public class AlunoData {

    private String ra;
    private String rg;
    private String nome;
    private String sexo;
    private String responsavel_1;
    private String telefone_1;
    private String responsavel_2;
    private String telefone_2;
    private String rua;
    private String numero_residencial;
    private String complemento;
    private String bairro;
    private String status; 
    private int serie;
    private String turma;
    private String data_de_formacao;

    public AlunoData(String ra,String rg,String nome,String sexo,String responsavel_1,String telefone_1,
    String responsavel_2,String telefone_2,String rua,String numero_residencial,String complemento,
    String bairro,String status,int serie,String turma,String data_de_formacao)
    {
        this.ra = ra;
        this.rg = rg;
        this.nome = nome;
        this.sexo = sexo;
        this.responsavel_1 = responsavel_1;
        this.telefone_1 = telefone_1;
        this.responsavel_2 = responsavel_2;
        this.telefone_2 = telefone_2;
        this.rua = rua;
        this.numero_residencial = numero_residencial;
        this.complemento = complemento;
        this.bairro = bairro;
        this.status = status;
        this.serie = serie;
        this.turma = turma;
        this.data_de_formacao = data_de_formacao;
    }
    
}