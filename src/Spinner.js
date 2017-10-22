import React from 'react'
import Halogen from 'halogen'

const Spinner = ({
    loading,
    type = 'PulseLoader',
    message = ''
}) => {
    const Loader = Halogen[type], color = '#4DAF7C'

    /* Moving spinner style to App.css messes the alignement */
    const style = loading
        ? {
            display: '-webkit-flex',
            WebkitFlex: '0 1 auto',
            flex: '0 1 auto',
            WebkitFlexDirection: 'column',
            flexDirection: 'column',
            WebkitFlexGrow: 1,
            flexGrow: 1,
            WebkitFlexShrink: 0,
            flexShrink: 0,
            WebkitFlexBasis: '25%',
            flexBasis: '25%',
            maxWidth: '100%',
            height: '200px',
            WebkitAlignItems: 'center',
            alignItems: 'center',
            WebkitJustifyContent: 'center',
            justifyContent: 'center'
        }
        : {
            display: 'none'
        }

    return (
        <div style={style}>
            <div>{message}</div>
            <Loader color={color}/>
        </div>
    )
}
export default Spinner