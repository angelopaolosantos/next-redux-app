import React from 'react'
import Template from '../components/Template'

const index = () => {
    return (
        <div className="container">
            <img src="img/trovegeek-logo2.png" width="250" />
            <span className="msg">Soon to Open!</span>
        <style jsx>{`
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 100vh;
        }
        .msg {
            font-size: 36px;
            font-family: Calibri, Helvetica, sans-serif; 
            color: gray;
            font-weight: bold;
            margin: 15px;
        }
        `}
        </style>
        </div>
    )
}

export default index