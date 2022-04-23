/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/18
 */



export const Spacer2 = (props) => {
    const {pt, className} = props
    return pt >= 0 ? <div className={className} style={{paddingTop:pt}}/> : <div className={className} style={{marginTop:pt}}/>
}
