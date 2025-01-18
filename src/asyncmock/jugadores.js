const jugadores = [
    {
        id: 1,
        nombre: "Terry Raun",
        goles: 39,
        asistencias: 1,
        edad: 21,
        foto: "https://robohash.org/eosdignissimoset.png?size=50x50&set=set1"
    },
    {
        id: 2,
        nombre: "Hattie Marshfield",
        goles: 2,
        asistencias: 8,
        edad: 34,
        foto: "https://robohash.org/ipsanonexcepturi.png?size=50x50&set=set1"
    },
    {
        id: 3,
        nombre: "Karry Bernardi",
        goles:44,
        asistencias:2,
        edad: 23,
        foto: "https://robohash.org/laudantiumdolorequi.png?size=50x50&set=set1"
    },
    {
        id: 4,
        nombre: "Cosetta Le Brun",
        goles: 10,
        asistencias: 10,
        edad: 29,
        foto: "https://robohash.org/quisculpacumque.png?size=50x50&set=set1"
    },
    {
        id: 5,
        nombre: "Delila Buxy",
        goles: 3,
        asistencias: 2,
        edad: 25,
        foto: "https://robohash.org/omnisquivel.png?size=50x50&set=set1"
    },
    {
        id: 6,
        nombre: "Faythe Basill",
        goles: 45, 
        asistencias: 8,
        edad: 24,
        foto: "https://robohash.org/occaecatideseruntreiciendis.png?size=50x50&set=set1"
    },
    {
        id: 7,
        nombre: "Angel Filpo",
        goles: 34,
        asistencias: 0,
        edad: 33,
        foto: "https://robohash.org/doloreblanditiispossimus.png?size=50x50&set=set1"
    },
    {
        id: 8,
        nombre: "Gerrie Boylund",
        goles: 42,
        asistencias: 29,
        edad: 24,
        foto: "https://robohash.org/rerumsuscipitvoluptatum.png?size=50x50&set=set1"
    },
    {
        id: 9,
        nombre: "Rubina Puttan",
        goles: 49,
        asistencias: 2,
        edad: 26,
        foto: "https://robohash.org/odiovoluptatemullam.png?size=50x50&set=set1"
    },
    {
        id: 10,
        nombre: "Johanna Gell",
        goles: 39,
        asistencias: 7,
        edad: 24,
        foto: "https://robohash.org/quianondebitis.png?size=50x50&set=set1"
    },
    {
        id: 11,
        nombre: "Lind Giroldo",
        goles: 16,
        asistencias: 9,
        edad: 34,
        foto: "https://robohash.org/officiaeteveniet.png?size=50x50&set=set1"
    },
    {
        id: 12,
        nombre: "Cello Naisey",
        goles: 34,
        asistencias: 0,
        edad: 38,
        foto: "https://robohash.org/utpossimusut.png?size=50x50&set=set1"
    },
    {
        id: 13,
        nombre: "Marla Eilhersen",
        goles: 16,
        asistencias: 18,
        edad: 38,
        foto: "https://robohash.org/aliquamsintdoloremque.png?size=50x50&set=set1"
    },
    {
        id: 14,
        nombre: "Hally Dungey",
        goles: 25,
        asistencias: 1,
        edad: 39,
        foto: "https://robohash.org/addelectuset.png?size=50x50&set=set1"
    },
    {
        id: 15,
        nombre: "Wendell Packman",
        goles: 3,
        asistencias: 9,
        edad: 32,
        foto: "https://robohash.org/eablanditiisquod.png?size=50x50&set=set1"
    },
    {
        id: 16,
        nombre: "Ginnifer Warne",
        goles: 43,
        asistencias: 25,
        edad: 23,
        foto: "https://robohash.org/estcumquequi.png?size=50x50&set=set1"
    },
    {
        id: 17,
        nombre: "Hazlett Langhorne",
        goles: 13,
        asistencias: 0,
        edad: 37,
        foto: "https://robohash.org/impeditcorruptieum.png?size=50x50&set=set1"
    },
    {
        id: 18,
        nombre: "Tarrah Oatley",
        goles: 44,
        asistencias: 8,
        edad: 35,
        foto: "https://robohash.org/cupiditatedeseruntquam.png?size=50x50&set=set1"
    },
    {
        id: 19,
        nombre: "Michael Milnthorpe",
        goles: 4,
        asistencias: 15,
        edad: 35,
        foto: "https://robohash.org/autmaximequae.png?size=50x50&set=set1"
    },
    {
        id: 20,
        nombre: "Carlee Hassen",
        goles: 13,
        asistencias: 28,
        edad: 32,
        foto: "https://robohash.org/dictautipsam.png?size=50x50&set=set1"
    },
    {
        id: 21,
        nombre: "Shane Zorzi",
        goles: 29,
        asistencias: 29,
        edad: 22,
        foto: "https://robohash.org/ametaliaset.png?size=50x50&set=set1"
    },
    {
        id: 22,
        nombre: "Nadya Augustin",
        goles: 22,
        asistencias: 30,
        edad: 22,
        foto: "https://robohash.org/quaeratmollitiaasperiores.png?size=50x50&set=set1"
    },
    {
        id: 23,
        nombre: "Lela Cottey",
        goles: 50,
        asistencias: 20,
        edad: 24,
        foto:"https://robohash.org/quiaconsecteturnesciunt.png?size=50x50&set=set1"
    },
    {
        id: 24,
        nombre: "Alida Foye",
        goles: 21,
        asistencias: 2,
        edad: 18,
        foto: "https://robohash.org/omnisdoloresquaerat.png?size=50x50&set=set1"
    },
    {
        id: 25,
        nombre: "Fidelio Runge",
        goles: 16,
        asistencias: 23,
        edad: 20,
        foto: "https://robohash.org/evenietidsimilique.png?size=50x50&set=set1"
    },
    {
        id: 26,
        nombre: "Adrien Sautter",
        goles: 39,
        asistencias: 0,
        edad: 32,
        foto: "https://robohash.org/etcorruptiest.png?size=50x50&set=set1"
    },
    {
        id: 27,
        nombre: "Wilton Eagan",
        goles: 40,
        asistencias: 26, 
        edad: 40,
        foto: "https://robohash.org/porrovoluptasdolore.png?size=50x50&set=set1"
    },
    {
        id: 28,
        nombre: "Blaire Elgie",
        goles: 14,
        asistencias: 15,
        edad: 28,
        foto: "https://robohash.org/voluptatemconsequaturaut.png?size=50x50&set=set1"
    },
    {
        id: 29,
        nombre: "Ambrosius World",
        goles: 2,
        asistencias: 1,
        edad: 31,
        foto: "https://robohash.org/similiquequiamaiores.png?size=50x50&set=set1"
    },
    {
        id: 30,
        nombre: "Anallese Aikett",
        goles: 19,
        asistencias: 16,
        edad: 27,
        foto: "https://robohash.org/idquonihil.png?size=50x50&set=set1"
    }
]

export const getJugadores = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(jugadores)
        },2500)
    })
}