import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  // * Estados de TodoCounter
  const [items, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        // * creamos una version del localStorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        // * En caso de que no aya nada en el localStroge
        // * va a crear un array vacio
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }
        // * En caso de que si alla algo lo vamos a convertir a un objeto
        // * guardara ese objeto en parsedTodos --> la cual es la
        else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000)
  },[])

  return [
    items, 
    setItem,
    loading,
    error
  ];
}

export { useLocalStorage };