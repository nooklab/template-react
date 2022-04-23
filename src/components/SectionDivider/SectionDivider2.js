/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/04/10
 */


export const SectionDivider2 = (props) => {
    const {h, r, color, className} = props
    return <div className={className} style={{height:h, borderRadius: r, border: `1px solid ${color}`}}/>
}
