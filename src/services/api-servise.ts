 export const getTodo = async ()=>{
    return await fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json())
}