package projeto.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;
import projeto.entity.AlunoEntity;

public interface AlunoRepository extends JpaRepository<AlunoEntity, Long>{

    List<AlunoEntity> findAll();

    @Query(value = "SELECT * FROM aluno WHERE ra = :ra", nativeQuery = true)
    AlunoEntity info(@PathVariable String ra);

    @Query(value = "SELECT * FROM aluno WHERE serie = :serie AND turma = :turma", nativeQuery = true)
    List<AlunoEntity> findAllByTurma(@PathVariable int serie, String turma);
}