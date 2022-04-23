import React from "react";

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/18
 */


export const AccordionItem = props => {
    const {title, id, parent, children, headerButton = true} = props
    const heading = `heading_${id}`
    const collapse = `collapse_${id}`
    const collapseTarget = `#collapse_${id}`
    const parentTarget = `#${parent}`
    return <div className="accordion-item ">
        <h2 className="accordion-header" id={heading}>
            <button disabled={!headerButton}
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={collapseTarget}
                    aria-expanded="true"
                    aria-controls={collapse}>
                <div className={"typo-16"}>{title}</div>
            </button>
        </h2>
        <div id={collapse} className="accordion-collapse collapse show" aria-labelledby={heading}
             data-bs-parent={parentTarget}>
            <div className="accordion-body">
                {children}
            </div>
        </div>
    </div>
    // return <div className="accordion-item">
    //     <h2 className="accordion-header" id="headingOne">
    //         <button className="accordion-button" type="button" data-bs-toggle="collapse"
    //                 data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    //             Accordion Item #1
    //         </button>
    //     </h2>
    //     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
    //          data-bs-parent={`#${parent}`}>
    //         <div className="accordion-body">
    //             <strong>This is the first item's accordion body.</strong> It is shown by default, until the
    //             collapse plugin adds the appropriate classes that we use to style each element. These
    //             classes control the overall appearance, as well as the showing and hiding via CSS
    //             transitions. You can modify any of this with custom CSS or overriding our default variables.
    //             It's also worth noting that just about any HTML can go within
    //             the <code>.accordion-body</code>, though the transition does limit overflow.
    //         </div>
    //     </div>
    // </div>
}
