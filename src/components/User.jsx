import { useState } from 'react';
//Usamos el componente que instalamos de react hook
import { useForm } from 'react-hook-form';

//Todos los metodos van antes del return
export default function User() {
    //Constante para registrar un arreglo y que muestre errores y handlesubmit para una acción con un click y todo se guardará en register
    const { register, formState: { errors }, handleSubmit } = useForm();
    //El arreglo useState funciona como un arreglo para guardar toda la información que se pide y el input funciona para digitar
    const [inputs, setInputs] = useState([]);
    // Metodo para realizar las validaciones cuando se haga click en enviar, onSubmit para enviar y tiene dos parametros data y e, data recoge toda la info del formulario
    // e es event 
    //los input se recogen y se asocia con data
    //e.target.reset se usa para borrar los datos
    const onSubmit = (data, e) => {
        console.log(data);
        setInputs([
            ...inputs,
            data
        ])
        // limpiar campos
        // alert("Datos correctos ...");
        // e.target.reset();
    }
    return (
        <div className="container">
            <h1>Formulario React con Validaciones</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombres</label>
                <input
                    //apunta al nombre con sus caracteristicas 
                    {...register('name',
                        { //Reglas de validación para este input, la etiqueta pattern es para expresiones regulares, hay expresiones regulares para correos, contraseñas etc... 
                            required: true,
                            maxLength: 50,
                            minLength: 3,
                            pattern: /^[A-Za-zÑñáéíóúÁÉÍÓÚ ]+$/i
                        })}
                    // Acá el nombre debe ser igual al register de arriba
                    // Abajo vemos el manejo de errores para el input name
                    //Luego vienen otros inputs como apellido con otras reglas y errores similar al de name
                    name="name"
                    className="form-control my-2"
                    placeholder="Ingrese Nombre"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors.name?.type === 'required' && "Nombre es obligatorio"}
                    {errors.name?.type === 'maxLength' && "Debe ser inferior o igual a 50 chars"}
                    {errors.name?.type === 'minLength' && "Debe ser superior a 3 chars"}
                    {errors.name?.type === 'pattern' && "Solo letras y/o espacios"}
                </span>
                <label>Apellidos</label>
                <input
                    {...register('lastname',
                        {
                            required: true,
                            maxLength: 50,
                            minLength: 3,
                            pattern: /^[A-Za-z ]+$/i
                        })}
                    name="lastname"
                    className="form-control my-2"
                    placeholder="Ingrese Apellidos"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors.lastname?.type === 'required' && "Apellidos es obligatorio"}
                    {errors.lastname?.type === 'maxLength' && "Debe ser inferior o igual a 50 chars"}
                    {errors.lastname?.type === 'minLength' && "Debe ser superior a 3 chars"}
                    {errors.lastname?.type === 'pattern' && "Solo letras y/o espacios"}
                </span>
                <label>Correo Electrónico</label>
                <input
                    {...register('email',
                        {
                            required: true,
                            maxLength: 100,
                            minLength: 10,
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                    name="email"
                    className="form-control my-2"
                    placeholder="Ingrese Email"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors.email?.type === 'required' && "Email es obligatorio"}
                    {errors.email?.type === 'maxLength' && "Debe ser inferior o igual a 100 chars"}
                    {errors.email?.type === 'minLength' && "Debe ser superior a 10 chars"}
                    {errors.email?.type === 'pattern' && "Email Inválido"}
                </span>
                <label>Edad</label>
                <input
                    //apunta al nombre con sus caracteristicas 
                    {...register('age',
                        { //Reglas de validación para este input, la etiqueta pattern es para expresiones regulares, hay expresiones regulares para correos, contraseñas etc... 
                            required: true,
                            pattern: /^[0-9]+$/i,
                            min: 18,
                            max: 35
                        })}
                    // Acá el nombre debe ser igual al register de arriba
                    // Abajo vemos el manejo de errores para el input Edad
                    name="age"
                    className="form-control my-2"
                    placeholder="Ingrese la Edad"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors.age?.type === 'required' && "Se requiere edad"}
                    {errors.age?.type === 'pattern' && "solo números"}
                    {errors.age?.type === 'min' && "Edad minima 18"}
                    {errors.age?.type === 'max' && "Edad maxima 35"}

                </span>
                <label>Contraseña</label>
                <input
                    //apunta al nombre con sus caracteristicas 
                    {...register('password',
                        { //Reglas de validación para este input, la etiqueta pattern es para expresiones regulares, hay expresiones regulares para correos, contraseñas etc... 
                            required: true,
                            maxLength:15,
                            minLength:8,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/i
                        })}
                    // Acá el nombre debe ser igual al register de arriba
                    // Abajo vemos el manejo de errores para el input password
                    //Luego vienen otros inputs como apellido con otras reglas y errores similar al de name
                    type="password"
                    name="password"
                    className="form-control my-2"
                    placeholder="Ingrese Contraseña"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors.password?.type === 'required' && "se requiere contraseña"}
                    {errors.password?.type === 'minLength' && "Mínimo 8 letras, números o simbolos"}
                    {errors.password?.type === 'maxLength' && "Mínimo 15 letras, números o simbolos"}

                </span>              
                <button
                    type="submit"
                    className="btn btn-primary my-2"
                >
                    Agregar
                </button>
            </form>
            {/* <ul className="mt-2">
            {
                inputs.map((item, index) =>
                    <li key={index}>
                        {item.name} - {item.lastname}
                    </li>
                )
            }
        </ul> */}
        </div>
    );
}