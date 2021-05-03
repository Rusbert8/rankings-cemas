import React, { useState } from 'react'

const ItemBoletin = ({ estudiante }) => {
    const [active] = useState('')

    return (

            <article>
                <b className="nombre">{estudiante.nombre_estudiante}<b className="numero">{estudiante.numero_estudiante}</b></b>
                <ul><b>
                    <li>Asignaturas: {estudiante.asignaturas.map(asignatura => {asignatura.codigo_asignatura} )}</li>
                    <li>Modulos: {estudiante.modulos.map(modulo => {modulo.codigo_asignatura} )}</li>
                    <li>{`Promedio Academico : ${estudiante.idx_academico}`}</li>
                    <li>{`Promedio Tecnico : ${estudiante.idx_tecnico}`}</li>
                    <li>{`Promedio General : ${estudiante.idx_general}`}</li>
                </b></ul>
            </article>


    )
}

export default ItemBoletin;
