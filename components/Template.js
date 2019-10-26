import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Template = (props) => {
    return (
        <div>
            <Header />
                { props.children }
            <Footer />
        </div>
    )
}

export default Template