import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import * as C from "./components/styles/AppStyle";
import Global from "./styleglobal/Global";

function App() {
  const generateId = () => Math.round(Math.random() * 1000);
  const [desc, setDesc] = useState("");
  const [listToDo, setListToDo] = useState([]);

  const [editToDo, setEditToDo] = useState(null);
  const [editDesc, setEditDesc] = useState("");

  useEffect(()=>{
    const storage = localStorage.getItem("tarefas")
    const loadStorage = JSON.parse(storage)
    if(loadStorage){
      setListToDo(loadStorage)
    }
  },[])

  useEffect(() =>{
    localStorage.setItem("tarefas",JSON.stringify(listToDo))
  },[listToDo])


  const handleSave = (e) => {
    e.preventDefault()
   ;

    const list = {
      id: generateId(),
      todo: desc,
    };
    setListToDo([...listToDo].concat(list))
    setDesc("");
  };

  const OnDelete = (ID) => {
    const newarray = listToDo.filter((todo) => todo.id != ID);
    setListToDo(newarray);
  };
  const editar = (id) => {
    const updatelist = [...listToDo].map((todo) => {
      if (todo.id === id) {
        todo.todo = editDesc;
      }
      return todo
    });
    setListToDo(updatelist)
    setEditToDo(null);
    setEditDesc("");
  };


  return (
    <>
      <C.Conteiner onSubmit={handleSave} >
        <C.form>
          <C.title>Qual a programação para hoje?</C.title>
          <C.input
            id="input"
            placeholder="Add To do"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></C.input>
          <C.button type="submit" id="button">
            Adicionar
          </C.button>
        </C.form>
        <C.formconteiner>
          <C.Table>
            {listToDo.map((todo) => (
              <C.Tr key={todo.id}>
                                {editToDo === todo.id ? (
                  <C.Input
                    type="text"
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                  ></C.Input>
                ) : (
                  <C.Td>
                    <span className="text">{todo.todo}</span>
                  </C.Td>
                )}
                <C.Td>
                </C.Td>
                <C.Input type="checkbox" />
                <C.Td icon>
                  <FaTrash onClick={()=>OnDelete(todo.id)} />
                </C.Td>
                {editToDo === todo.id ? (<C.Button onClick={()=>editar(todo.id)}>Editar</C.Button>) : (<C.Td icon>
                  <AiFillEdit onClick={()=> setEditToDo(todo.id)}/>
                </C.Td>)}
                

              </C.Tr>
            ))}
          </C.Table>
        </C.formconteiner>
      </C.Conteiner>
      <Global />
    </>
  );
}

export default App;
