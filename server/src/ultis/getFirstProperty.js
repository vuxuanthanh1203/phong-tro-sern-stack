export const getFirstProperty = (obj) => {
    const newObj = { ...obj };

    const properties = Object.keys(newObj);

    if (properties.length > 0) {
        properties.slice(1).forEach(property => {
            delete newObj[property];
        });
    }

    return newObj;
}