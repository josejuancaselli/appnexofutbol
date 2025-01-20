import { useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/configFirebase";

const useEquipos = () => {
    const [equipos, setEquipos] = useState([]);

    // Función para agregar una nueva liga
    const crearEquipos = (info, ligaActual) => {
        const equiposRef = collection(db, "equipos");
        const nombre_equipo = info.nombre_equipo
        const liga= ligaActual
        addDoc(equiposRef, { nombre_equipo, liga })
        .then(() => {
            mostrarEquipos(ligaActual); // Actualiza la lista después de agregar
        });
    };

    // Función para mostrar las ligas
    const mostrarEquipos = (ligaActual) => {
        const equiposRef = collection(db, "equipos");
        getDocs(equiposRef)
        .then((res) => {
            const equiposData = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            const equiposFiltrados = equiposData.filter((equipo) => equipo.liga === ligaActual);
            setEquipos(equiposFiltrados);
        });
    };



    return { equipos, mostrarEquipos, crearEquipos };
};

export default useEquipos;
