package projeto.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.transaction.Transactional;
import projeto.data.AlunoData;
import projeto.data.AlunoInfoBasicas;
import projeto.service.AlunoService;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("aluno")
@CrossOrigin("*")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @PostMapping
    @Transactional
    public ResponseEntity registrarAluno(@RequestBody AlunoData alunoData){
        var aluno = alunoService.registrarAluno(alunoData);
        return ResponseEntity.ok(aluno);

    }

    @GetMapping
    public ResponseEntity<List<AlunoInfoBasicas>> alunoInfomacoesBasicas(){
        var page = alunoService.informacoesBasicas();
        return ResponseEntity.ok(page);
    }

    @GetMapping("/{ra}")
    public ResponseEntity info(@PathVariable String ra){
        var aluno = alunoService.info(ra);
        return ResponseEntity.ok(aluno);
    }

    @GetMapping("/{serie}/{turma}")
    public ResponseEntity<List<AlunoInfoBasicas>> turma(@PathVariable int serie,@PathVariable String turma){
        var aluno = alunoService.turma(serie,turma);
        return ResponseEntity.ok(aluno);
    }

    @GetMapping("/certificado/{ra}")
    public ResponseEntity certificado(@PathVariable String ra){
        var aluno = alunoService.certificado(ra);
        return ResponseEntity.ok(aluno);
    }

}
