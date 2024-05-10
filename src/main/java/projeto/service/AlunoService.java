package projeto.service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import projeto.data.AlunoData;
import projeto.data.AlunoInfoBasicas;
import projeto.data.Certificado;
import projeto.entity.AlunoEntity;
import projeto.repository.AlunoRepository;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository alunoRepository;

    @Transactional
    public AlunoEntity registrarAluno(AlunoData data){

        var aluno = new AlunoEntity(data.getRa(),data.getRg(),data.getNome(),data.getSexo(),
        data.getResponsavel_1(),data.getTelefone_1(),data.getResponsavel_2(),data.getTelefone_2(),
        data.getRua(),data.getNumero_residencial(),data.getComplemento(),data.getBairro(),
        data.getStatus(),data.getSerie(),data.getTurma(),data.getData_de_formacao());

        
        return alunoRepository.save(aluno);

    }

    public List<AlunoInfoBasicas> informacoesBasicas(){
        return alunoRepository.findAll().stream()
        .sorted(Comparator.comparing(AlunoEntity::getNome)) 
        .map(AlunoInfoBasicas::new)
        .collect(Collectors.toList());
    }

    public AlunoData info(@PathVariable String ra){
        var aluno = alunoRepository.info(ra);

        return new AlunoData(aluno.getRa(),aluno.getRg(),aluno.getNome(),aluno.getSexo(),aluno.getResponsavel_1(),
        aluno.getTelefone_1(),aluno.getResponsavel_2(),aluno.getTelefone_2(),aluno.getRua(),
        aluno.getNumero_residencial(),aluno.getComplemento(),aluno.getBairro(),aluno.getStatus(),
        aluno.getSerie(),aluno.getTurma(),aluno.getData_de_formacao());
    }

    public List<AlunoInfoBasicas> turma(@PathVariable int serie,@PathVariable String turma){
        return alunoRepository.findAllByTurma(serie,turma).stream()
        .sorted(Comparator.comparing(AlunoEntity::getNome)) 
        .map(AlunoInfoBasicas::new)
        .collect(Collectors.toList());
    }

    public Certificado certificado(@PathVariable String ra){
        var aluno = alunoRepository.info(ra);

        return new Certificado(aluno.getNome());
    }


}
