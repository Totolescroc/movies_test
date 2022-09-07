import { useCallback , useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React from "react";


const LabelizeInput = ({ name, defaultValue, register, dirtyFields, errors, required}) => {
    return (
        <div className="input-form-container">
            <label className={!dirtyFields?.[name] ? "coucou" : "coucou"} ></label>
            <input  defaultValue={defaultValue} {...register(name, {required: required})}  placeholder={name} />
            {errors?.[name] && <span style={{fontSize: 14, color: "red" }}>Le champ {name} est obligatoire</span>}
        </div>
    )
}
console.log("Ici j'ai pu rectifié le focus des inputs mais je dois valider une fois puis changer le mdp et re valider pour accéder à la page movie")
const LoginContainer = () => {
    
    const { register, handleSubmit, formState, setFocus } = useForm();
    const {errors, isDirty, dirtyFields, submitCount, isValid} = formState
    const [incredibleBigWall, setIncredibleBigWall] = useState(true)
    const [visibleModal, setVisibleModal] = useState(false)
    const navigate = useNavigate()



    const onSubmit = data => {
        if (isValid && incredibleBigWall) {
            setVisibleModal(true)
            // console.log("Hum .... Toujours pas!")
            // console.log("Tu dois te rendre sur la page Movie")
            navigate('/movies-list', {replace:true})
            
        }
    };



    useEffect(() => {
        const firstError = Object.keys(errors).reduce((field, a) => { return !!errors[field] ? field : a }, null);
        if (firstError) {
          setFocus(firstError);
        
        }
      }, []);

    const Modal = () => {
        return (
            <div style={{ position: "relative", alignSelf: "center", justifyContent: "center", textAlign: "center", padding: 50, border: "1px solid black", borderRadius: 25}}>
                <div>Ils reagissent bizarrement ces 2 inputs nan ? </div>
                <div>Un peu de css serait le bienvenue je pense :)</div>
                <div style={{ marginTop: 30 }}>Et si tu te sent chaud tu pourrais peut-être régler le problème de focus ?!</div>
                <button style={{ marginTop: 20 }} onClick={() => setVisibleModal(false)}>Avec grand plaisir, j'adore react</button>
            </div>)
    }

   

    return (
        <div style={{ display: "flex", flex: 1, height: "100vh", justifyContent: "center"}}>
            {visibleModal && <Modal/>}
            {!visibleModal && <div className="form-container">
                        <form  onSubmit={handleSubmit(onSubmit)}>
                        <div className="welcome">Bienvenue jeune padawan</div>

                            <LabelizeInput name="email" defaultValue="" register={register} dirtyFields={dirtyFields} isDirty={isDirty} errors={errors} required={true} />
                            <LabelizeInput name="mot de passe" defaultValue="" register={register} dirtyFields={dirtyFields} isDirty={isDirty} errors={errors} required={true}/>
                            <input className="btn-neon" type="submit" value="Accéder à la suite"/>
                        </form>
                    </div>
                }
        </div>
    )
}

export default LoginContainer