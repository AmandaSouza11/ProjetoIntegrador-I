package projeto.data;

import lombok.Data;
import projeto.entity.AlunoEntity;

@Data
public class AlunoInfoBasicas {

    private String ra;
    private String nome;
    private String status; 
    private int serie;
    private String turma;
 
    public AlunoInfoBasicas(AlunoEntity alunoEntity){
        this.ra = alunoEntity.getRa();
        this.nome = alunoEntity.getNome();
        this.status = alunoEntity.getStatus();
        this.serie = alunoEntity.getSerie();
        this.turma = alunoEntity.getTurma();
    }
    
}
