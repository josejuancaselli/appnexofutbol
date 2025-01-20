import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase/configFirebase";



export const AppContext = createContext(); //creo el contexto dentro de la variable AppContext

export const AppProvider = ({ children }) => {
    const [ligas, setLigas] = useState([]);
    const [equipos, setEquipos] = useState([]);
    const [jugadores, setJugadores] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            try {
                const ligasRef = collection(db, "ligas");
                const equiposRef = collection(db, "equipos");
                const jugadoresRef = collection(db, "jugadores");

                const ligasSnap = await getDocs(ligasRef);
                const equiposSnap = await getDocs(equiposRef);
                const jugadoresSnap = await getDocs(jugadoresRef);

                const ligasData = ligasSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                const equiposData = equiposSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                const jugadoresData = jugadoresSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

                setLigas( ligasData );
                setEquipos(equiposData);
                setJugadores(jugadoresData);
            }
            catch (error) {
                console.log ( "error")
            }
        };

        fetchData()
    }, [])

    const mostrarLigas = () => {
        const ligaRef = collection(db, "ligas");
        getDocs(ligaRef)
            .then((res) => {
                setLigas(
                    res.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                )
            })
    }


    return (
        <AppContext.Provider value={{ ligas,  equipos, setEquipos, jugadores, setJugadores, mostrarLigas }}>
            {children}
        </AppContext.Provider>
    )
}



        // const ligasRef = collection(db, "ligas")
        // const equiposRef = collection(db, "equipos")
        // const jugadoresRef = collection(db, "jugadores")

        // getDocs(ligasRef)
        // .then ((res) =>{
        //     const ligasData = res.docs.map ((doc) => ({ id: doc.id, ...doc.data() }))
        //     setLigas(ligasData)
        // })

        // getDocs( equiposRef )
        // .then ((res) =>{
        //     const equiposData = res.docs.map ((doc) => ({ id: doc.id, ...doc.data() }))
        //     setEquipos(equiposData)
        // })

        // getDocs( jugadoresRef )
        // .then ((res) =>{
        //     const jugadoresData = res.docs.map ((doc) => ({ id: doc.id, ...doc.data() }))
        //     setJugadores(jugadoresData)
        // })