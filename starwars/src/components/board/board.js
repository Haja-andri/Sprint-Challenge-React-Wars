import React from 'react';


export default function Board({name, dob, height, gender, skin, films}){

    return(
    <div className="main-board">
        <div className="char-desc">
        <h2>{name}</h2>
        <div className="gen-desc">
            <span className="first"><b>Height :</b> {height}</span>
            <span><b>Year of birth :</b> {dob}</span>
            <span><b>Gender :</b> {gender}</span>
            <span className="last"><b>Skin Color :</b> {skin}</span>
        </div>
        </div>      
    </div>
    )
}