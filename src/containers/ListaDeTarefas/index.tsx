import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Construir meu portfólio',
    descricao: 'Ver anotações para insights',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'Ir para academia',
    descricao: 'Fazer treino A',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => {
  // Aqui você pode implementar a lógica para contar as tarefas com categorias específicas
  const countCategoria = '' // Substitua com a lógica necessária
  const countTermo = '' // Substitua com a lógica necessária

  return (
    <Container>
      <p>{`${countCategoria} tarefas marcadas como: "categoria" "${countTermo}"`}</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
