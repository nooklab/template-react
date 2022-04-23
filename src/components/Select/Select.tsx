/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/18
 */

import {Form} from 'react-bootstrap'

export const Select = props => {
    const {placeHolder, choices, onSelect, className} = props
    function handleChange(ev) {
        if (onSelect) {
            const {value} = ev.target
            // eslint-disable-next-line eqeqeq
            const selected = choices.find(c => c.value == value)
            onSelect(selected ? [selected] : null)
        }
    }
    return <Form.Select aria-label="선택" onChange={handleChange} className={className}>
        <option>{placeHolder ? placeHolder : '선택'}</option>
        {choices.map(item => <option value={item.value}>{item.name}</option>)}
    </Form.Select>
}
