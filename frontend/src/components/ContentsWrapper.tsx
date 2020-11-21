import React from 'react';
import {
    ReactChildren
} from 'types'

const ContentsWrapper = (props : ReactChildren) => {
    return(
        <section className="ContentsWrppaer">
            {props.children}
        </section>
    )
}

export default ContentsWrapper