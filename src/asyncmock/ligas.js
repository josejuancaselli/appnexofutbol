const ligas = [
    {
        id: 1,
        nombre: "empresarial"
    },
    {
        id: 2,
        nombre: "montevideo futbol"
    }
]

export const getLigas = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ligas)
        }, 500)
    })
}