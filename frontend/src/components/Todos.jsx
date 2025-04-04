export function Todos({todos}){
    return <div>
        {todos.map(function (todo){
            return <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h1>{todo.description}</h1>
                <button>{todo.completed == true ? "completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}