import React from 'react';
import Header from '../../components/Header/Header';
import './Inicial.css';
import Timer from '../../components/Timer/Timer';
import Menu from '../../components/Menu/Menu';

function Inicial(params) {
    return (
        <>
            <div className="Inic">
                <h1>PÁGINA INICIAL</h1>
                <p>
                    Aqui estamos na página inícial.
                </p>
                <Timer/>
            </div>
        </>
    );
}

export default Inicial;