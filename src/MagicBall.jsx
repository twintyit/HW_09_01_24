import React, { useState } from 'react';

const MagicBall = () => {
    const [prediction, setPrediction] = useState(null);
    const [isShaking, setIsShaking] = useState(false);

    const possiblePredictions = [
        'Так',
        'Ні',
        'Можливо',
        'Не впевнений',
        'Спробуй ще раз пізніше',
        'Нaпевно',
        'Краще не розповідай мені',
        'Зосередься і спитай знову',
    ];

    const handleShake = () => {
        setPrediction('');
        const randomIndex = Math.floor(Math.random() * possiblePredictions.length);
        const randomPrediction = possiblePredictions[randomIndex];

        setIsShaking(true);

        setTimeout(() => {
            setPrediction(randomPrediction);
            setIsShaking(false);
        }, 1000);
    };

    return (
        <div className='magic-ball-container'>
            <div className='info-container'>
                <h2>Магічна куля передбачень</h2>
                <div className={`magic-ball ${isShaking ? 'shake' : ''}`}>
                    <div className="prediction">
                        <h4>{prediction}</h4>
                        {isShaking && (
                            <img width={50} src="https://www.futurelifenow-online.com/wp-content/uploads/2022/12/loading-gif.gif%22" alt="" />)}
                    </div>
                </div>
                <button className='button' onClick={handleShake}>Запитати</button>
            </div>

        </div>

    );
};

export default MagicBall;