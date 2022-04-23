/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/06
 */



export const FlexRow = props => {
    const {children, className = 'col-4'} = props
    return <div className="row">
        {Array.isArray(children)
            ? children.map((child, index) => (<div key={index} className={className}>{child}</div>))
            : <div className={className}>{children}</div>
        }
    </div>
}


export const FlexRowStart = props => {
    const {children, col = 'col-4'} = props
    return <div className="row justify-content-start">
        {Array.isArray(children)
            ? children.map((child, index) => (<div key={index} className={col}>{child}</div>))
            : <div className={col}>{children}</div>
        }
    </div>
}
