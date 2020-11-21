import React from 'react'
import Header from 'components/Header'
import ContentsWrapper from 'components/ContentsWrapper'
import { 
    ReactChildren
} from 'types'

const Layout = (props : ReactChildren) =>{
    return(
        <section className="Layout">
            <Header></Header>
            <ContentsWrapper>
                {props.children}
            </ContentsWrapper>
        </section>
    )
}

export default Layout