const equipos = [
    {
        id: 1,
        nombre: "Ale_FC",
        logo: "https://robohash.org/eosdignissimoset.png?size=50x50&set=set1",
        puntos: 0,
        jugadores: [{ id: 1, nombre: "Terry Raun" }, { id: 2, nombre: "Hattie Marshfield", }]
    },
    {
        id: 2,
        nombre: "FC Barcelona",
        logo: "https://robohash.org/ipsanonexcepturi.png?size=50x50&set=set1",
        puntos: 0
    },
    {
        id: 3,
        nombre: "Real Madrid",
        logo: "https://robohash.org/laudantiumdolorequi.png?size=50x50&set=set1",
        puntos: 0
    },
    {
        id: 4,
        nombre: "Manchester United",
        logo: "https://robohash.org/occaecatideseruntreiciendis.png?size=50x50&set=set1",
        puntos: 0
    }
]

export const getEquipos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(equipos)
        }, 500)
    })
}