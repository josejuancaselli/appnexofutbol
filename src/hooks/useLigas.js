import { useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/configFirebase";

const useLigas = () => {
    const [ligas, setLigas] = useState([]);

    // Función para agregar una nueva liga
    const agregarLigas = (nombre_liga) => {
        const ligasRef = collection(db, "ligas");
        addDoc(ligasRef, nombre_liga)
        .then(() => {
            mostrarLigas(); // Actualiza la lista después de agregar
        });
    };

    // Función para mostrar las ligas
    const mostrarLigas = () => {
        const ligasRef = collection(db, "ligas");
        getDocs(ligasRef)
        .then((res) => {
            const ligasData = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setLigas(ligasData);
        });
    };



    return { ligas, mostrarLigas, agregarLigas };
};

export default useLigas;
