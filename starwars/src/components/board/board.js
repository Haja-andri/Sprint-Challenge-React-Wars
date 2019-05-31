import React from 'react';


export default function Board({name, dob, height, gender, skin}){

    return(
    <div className="main-board">
        <div className="char-desc">
        <div><h2>{name}y</h2></div>
        <div className="gen-desc">
            <span><b>Height :</b> {height}</span>
            <span><b>Year of birth :</b> {dob}</span>
            <span><b>Gender :</b> {gender}</span>
            <span><b>Skin Color :</b> {skin}</span>
        </div>
        </div>      
    </div>
    )
}