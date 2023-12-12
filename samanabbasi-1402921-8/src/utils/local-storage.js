export function readJSON(key) {
    const myTodos = localStorage.getItem(key);
    if (myTodos === "") {
        return myTodos;
    }
    else {
        const parsedData = JSON.parse(myTodos)
        return parsedData;
    }

}


export function writeJSON(key, data) {
    localStorage.removeItem(key);
    localStorage.setItem(key, data);
}
