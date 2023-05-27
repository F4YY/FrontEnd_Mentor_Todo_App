import React, { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import { Container } from './styled/container.styled';
import { Attribution, AttributionA, BottomStatus, CloseIcon, Header, Hstack, List, ListItems, SearchBar, StyledTodo, ThemeIcon } from './styled/todo.styled';
import sun from './images/icon-sun.svg';
import moon from './images/icon-moon.svg';

export const ToDo = () => {
    const [toDos, setToDos] = React.useState([
        {
            id: uuidv4(),
            task: 'Complete online JavaScript course',
            completed: true
        },
        {
            id: uuidv4(),
            task: 'Jog around the park 3x',
            completed: false
        },
        {
            id: uuidv4(),
            task: '10 minutes meditation',
            completed: false
        },
        {
            id: uuidv4(),
            task: 'Read for 1 hour',
            completed: false
        },
        {
            id: uuidv4(),
            task: 'Pick up groceries',
            completed: false
        },
        {
            id: uuidv4(),
            task: 'Complete Todo App on Frontend Mentor',
            completed: false
        }
    ]);
    const [newTodo, setNewTodo] = React.useState('');
    const [filter, setFilter] = React.useState('all');
    const [theme, setTheme] = React.useState('light');
    const [itemLeft, setItemLeft] = React.useState(0);

    useEffect(() => {
        setItemLeft(toDos.filter(todo => !todo.completed).length);
    }, [toDos]);

    const addTodo = (e) => {
        e.preventDefault();
        if (newTodo === '') return;
        let updatedToDos = [...toDos];
        updatedToDos.push({
            id: uuidv4(),
            task: newTodo,
            completed: false
        });
        setToDos(updatedToDos);
        setNewTodo('');
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo(e);
        }
    }

    const handleComplete = (id) => {
        const updatedToDos = toDos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        });
        setToDos(updatedToDos);
    }

    const deleteTodo = (id) => {
        const updatedToDos = toDos.filter(todo => todo.id !== id);
        setToDos(updatedToDos);
    }

    const filteredTodos = toDos.filter(todo => {
        if (filter === 'all') {
            return todo;
        } else if (filter === 'active') {
            return !todo.completed;
        } else if (filter === 'completed') {
            return todo.completed;
        }
        return todo;
    });

    const clearCompleted = () => {
        const updatedToDos = toDos.filter(todo => !todo.completed);
        setToDos(updatedToDos);
    }

    const handleDragStart = (e, id) => {
        e.dataTransfer.setData('text/plain', id);
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e, id) => {
        e.preventDefault();
        const droppedId = e.dataTransfer.getData('text/plain');
        const draggedIndex = toDos.findIndex(todo => todo.id === droppedId);
        const targetIndex = toDos.findIndex(todo => todo.id === id);
        const updatedToDos = [...toDos];
        updatedToDos.splice(targetIndex, 0, updatedToDos.splice(draggedIndex, 1)[0]);
        setToDos(updatedToDos);
    }

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

  return (
    <Container
        theme={theme}
    >
        <Header theme={theme}/>
        <StyledTodo
            theme={theme}
        >
            <Hstack className='logoicon'>
                <h1>TODO</h1>
                <ThemeIcon
                    src={theme === 'light' ? moon : sun}
                    alt="theme"
                    onClick={handleTheme}
                />
            </Hstack>
            <SearchBar theme={theme}>
                <form onSubmit={addTodo}>
                    <input type="checkbox" />
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        value={newTodo}
                        onChange={(e) => setNewTodo (e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </form>
            </SearchBar>
            <List theme={theme}>
            {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
                <ListItems
                    theme={theme}
                    key={todo.id}
                    className={todo.completed && 'completed'}
                    draggable
                    onDragStart={(e) => handleDragStart(e, todo.id)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, todo.id)}
                >
                    <Hstack className='aligner'>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleComplete(todo.id)}
                        />
                        <p className={todo.completed ? 'completed-text' : ''}>
                            {todo.task}
                        </p>
                    </Hstack>
                    <CloseIcon
                        theme={theme}
                        className="delete-icon"
                        src={require('./images/icon-cross.svg').default}
                        alt='delete'
                        onClick={() => deleteTodo(todo.id)}
                    />
                </ListItems>
            ))
            ) : (
                <ListItems className='no_activity'></ListItems>
            )}
                <BottomStatus theme={theme}>
                    <span>{itemLeft} items left</span>
                    <Hstack className='status_spreader'>
                        <p className={filter === 'all' ? 'selected' : ''} onClick={() => setFilter('all')}>All</p>
                        <p className={filter === 'active' ? 'selected' : ''} onClick={() => setFilter('active')}>Active</p>
                        <p className={filter === 'completed' ? 'selected' : ''} onClick={() => setFilter('completed')}>Completed</p>
                    </Hstack>
                    <p onClick={clearCompleted}>Clear Completed</p>
                </BottomStatus>
            </List>
            <BottomStatus className='mobile_status_spreader' theme={theme}>
                <p className={filter === 'all' ? 'selected' : ''} onClick={() => setFilter('all')}>All</p>
                <p className={filter === 'active' ? 'selected' : ''} onClick={() => setFilter('active')}>Active</p>
                <p className={filter === 'completed' ? 'selected' : ''} onClick={() => setFilter('completed')}>Completed</p>
            </BottomStatus>
            <p className='drag_drop'>
                Drag and drop to reorder list
            </p>
        </StyledTodo>
        <footer>
          <Attribution>
              <AttributionA>
                <p><i>Challenge by</i><a href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Todo app.</a></p>
              </AttributionA>
              <AttributionA>
                <p>&nbsp;&nbsp;<i>Coded by</i><a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
              </AttributionA>
          </Attribution>
        </footer>
    </Container>
  )
}
