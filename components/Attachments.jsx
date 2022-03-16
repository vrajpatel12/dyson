import React from 'react'

const Attachments = () => {
  return (
    <div className='attachments'>
        <h2>Styling attachments</h2>
        <div className='wrapper-attachments'>
            <div className="container">
                <div className="attach-image">
                    <img src="/attach-01.jpeg" alt="image" />
                </div>
                <div className="attach-content">
                    <h3>Flyaway attachment</h3>
                    <p>The ideal finishing tool for sleek, straight styles. Hides flyaways under longer hair to give you a smooth, shiny finish. With just air.</p>
                </div>
            </div>
            <div className="container even">
                <div className="attach-content">
                    <h3>Styling concentrator</h3>
                    <p>The wider, thinner design3 of the re-engineered Styling concentrator creates a high-velocity blade of air that's perfect for styling. And because the air is focused, you can style one section at a time – without disturbing the rest.</p>
                </div>
                <div className="attach-image">
                    <img src="/attach-02.jpeg" alt="image" />
                </div>
            </div>
            <div className="container">
                <div className="attach-image">
                    <img src="/attach-03.jpeg" alt="image" />
                </div>
                <div className="attach-content">
                    <h3>Diffuser</h3>
                    <p>Re-engineered to disperse air more evenly around your curls, the Diffuser simulates natural drying, helping to reduce frizz and define curls and waves. Longer prongs allow you to style more hair with greater control – and reach deeper into the hair.</p>
                </div>
            </div>
            <div className="container even">
                <div className="attach-content">
                    <h3>Gentle air attachment</h3>
                    <p>Engineered to be kinder to fine hair and sensitive scalps, the new Gentle air attachment diffuses the air, creating a gentle, cooler airflow - while still drying hair fast.</p>
                </div>
                <div className="attach-image">
                    <img src="/attach-04.jpeg" alt="image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Attachments