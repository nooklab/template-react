

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/06/25
 */

import React from "react";


export const FileLabel = (props) => {
    const {name, buttonText, onClick, index} = props
    return <div className="input-group mb-3">
        <span className="input-group-text"><i className="fa fa-paperclip" aria-hidden="true"/></span>
        <input type="text" disabled className="form-control" value={name}
               aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        <button className="btn btn-outline-dark" data-index={index} type="button"
                onClick={onClick}>{buttonText}
        </button>
    </div>
}
