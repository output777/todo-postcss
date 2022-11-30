import {useEffect, useRef, useState} from 'react';
import './App.css';
import Container from './components/Container';
import Input from './components/Input';
import Lists from './components/Lists';
import Menu from './components/Menu';
import Nav from './components/Nav';

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState({
    content: '',
    id: 0,
    done: false,
  });
  const [filter, setFilter] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const idRef = useRef(0);
  const inputRef = useRef();

  const onChangeText = (e) => {
    const {value} = e.target;
    if (list.length === 0) {
      setText((prev) => ({...prev, content: value}));
    } else {
      idRef.current = list[list.length - 1].id + 1;
      setText((prev) => ({...prev, content: value, id: idRef.current}));
    }
  };

  const onClickAddText = () => {
    if (text.content === '') return;
    const newList = [...list, text];
    localStorage.setItem('todo', JSON.stringify(newList));
    setList(newList);
    setText((prev) => ({...prev, content: ''}));
    inputRef.current.focus();
  };

  const onRemove = (item) => {
    const newList = list.filter((data) => data.id !== item);
    localStorage.setItem('todo', JSON.stringify(newList));
    setList(newList);
  };

  const onCheckd = (id) => {
    const updateList = list.map((data) => {
      if (data.id === id) {
        data.done = !data.done;
      }
      return data;
    });
    localStorage.setItem('todo', JSON.stringify(updateList));
    setList(updateList);
  };

  const onFilter = (num) => {
    setFilter(num);
  };

  const onDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('todo'));
    if (data) {
      setList(data);
    }
  }, []);

  return (
    <section>
      <Container darkMode={darkMode}>
        <Nav darkMode={darkMode}>
          <Menu onFilter={onFilter} darkMode={darkMode} onDarkMode={onDarkMode} />
        </Nav>
        <Lists
          list={list}
          darkMode={darkMode}
          onRemove={onRemove}
          onCheckd={onCheckd}
          filter={filter}
        />
        <Nav>
          <Input
            text={text}
            inputRef={inputRef}
            onChangeText={onChangeText}
            onClickAddText={onClickAddText}
          />
        </Nav>
      </Container>
    </section>
  );
}

export default App;
