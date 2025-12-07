- [x] Passar a atualização dos modais para \[dimensao]/\[id]
- [x] Salvar o quill em algum lugar
- [x] atualizar o /dimensoes -> ( adicionar queries para limite e ordem)
- [x] Fazer os filtros funcionarem
  - [x] CardDecks
  - [x] Relações
- [x] Disciplinas -> Cursos (front end)
  -- *Provavelmente terei que criar uma entidade para isso*

> [!NOTE] Eu posso adicionar dentro da dimensão  
Adicionar o campo Editais dentro de Dimensoes como um campo objeto  
Passar esse objeto para o submodal através de modalData  
Retornar o value para Modal  
Salvar Normalmente  
- [x] Modificar os schemas da db como dito na nota
- [x] Criar rota para salvar cursos na db
  - [x] Fazer conexão front -> back end
  - [x] Relacionar Cursos com Disciplinas
- [x] Excluir cursos da db
- [x] Criar rota para salvar os Editais
  - [x] Fazer conexão front -> back end
- [x] Criar rota para salvar os Projetos
  - [x] Fazer conexão front -> back end

- [x] Enviar imagens maiores de 1mb
- [x] Arrumar a rota de upload de imagens

- [x] SubModais (Front end)
  - [x] Disciplinas -> Editais
    - [x] Adicionar
  -- *Para isso tbm (?)*
  - [x] Motores -> Projetos
    - [x] Adicionar

# Mudanças/Correções a Fazer:
- [ ] Alterar os campos das dimensões que deveriam estar aceitando somente números, e estão aceitando uma string[]
> Exemplo:  alunos_matriculados String[] em Disciplinas
- [ ] Corrigir: As relações não são salvas ao salvar uma nova dimensão
  - > Motivo: A api tenta fazer a relação da nova dimensão sem ter o id dela, pois ala inda não foi salva, causando um erro 
- [ ] Quando salvar submodais, Atualizar o modal