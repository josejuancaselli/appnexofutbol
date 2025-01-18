const fechas = [
    {
        id: 1,
        cancha: "",
        dia: "",
        hora: "",
    },
    {
        id: 2,
        cancha: "",
        dia: "",
        hora: "",
    }
]

export const getFechas = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(fechas)
        },2500)
    })
}