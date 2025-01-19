import {useForm} from "react-hook-form";

const Crud = () => {
    const {register, handleSubmit} = useForm();


    return (
        <div>
            <form onSubmit={handleSubmit()}>
                <label> Nombre de la liga:</label>
                <input type="text" />
            </form>
        </div>
    )
}

export default Crud