export const readJSON = (key) => {
    const jsonData = localStorage.getItem(key);
    if (jsonData) {
        return JSON.parse(jsonData);
    }
    return null;
};

export const writeJSON = (key, data) => {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
};