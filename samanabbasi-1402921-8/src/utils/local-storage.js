export const readJSON = (key) => {
    const jsonData = localStorage.getItem(key);
    if (jsonData) {
        return JSON.parse(jsonData);
    }
    else {
        localStorage.setItem(key, "");
        return null;
    }
};

export const writeJSON = (key, data) => {
    const jsonData = JSON.stringify(data);
    localStorage.removeItem(key);
    localStorage.setItem(key, jsonData);
};