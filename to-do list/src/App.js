import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";
function App() {
    const mtodo = [
        {
            text: "Купить Бананы",
            favorite: false
        },
        {
            text: "Купить Машину",
            favorite: false
        },
        {
            text: "Купить Дом",
            favorite: false
        },
    ];
    const [text, setText] = useState("");
    const [todo, setTodo] = useState(mtodo)
    const deleteText = (indexOfRemovingItem) => {
        const filtered = todo.filter((item, index) => {
            if(index===indexOfRemovingItem){
                return false
            }
            return true
        })
        setTodo(filtered)
    }
    const favorite = (i) => {
        const newTodos = todo.map((item, index) => {
            if (i === index){
                return {
                    ...item,
                    favorite: !item.favorite
                }
            }
            return item 
        })
        setTodo(newTodos)
    }
    const todosMap = todo.map((item, index) => {
        return ( 
        <div className={`todo ${item.favorite ? "selected" : "" }`}>
            <div className="todoLeftdiv">  
                 <button onClick={()=>favorite(index)}>★</button>
            </div>
            <div className="text">{item.text}</div>
            <div className="todoRightDiv">
                <button onClick={() => deleteText(index)}>x</button>
            </div>
        </div>
    )});
    const addArrey = () => {
            setTodo(
                [
                    {text: text,
                    favorite: false},
                    ...todo
                ]
            )
            setText("")    
    }
    return (
      <div>
        <Header />
        <Form text={text} addArrey={addArrey} setText={setText}/>
        <Todos todosMap={todosMap} />
      </div>
  );
}

export default App;
