﻿import React from "react";
import Image from 'next/image'

const InfoCanais = ({nome,conteudo,tema,img,link}:{nome :string,conteudo:string,tema:string,img:string,link:string} ) => {
    return (
        <div className='flex'>
            <div className='w-1/2'>
                <img className='rounded-3xl' src={img} alt="" />
            </div>
            <div className='w-1/2'>
                <h1>Nome: {nome}</h1>
                <h2>Conteúdo: {conteudo}</h2>
                <h3>Tema: {tema}</h3>
                <a href={link} target="_blank">Canal</a>
            </div>

        </div>
    );
};

export default InfoCanais; 