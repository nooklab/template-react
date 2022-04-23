/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/15
 */

import React from "react";
import ReactPaginate from 'react-paginate';
import './Pagination.scss'


export const Pagination = props => {
    const {size, total, onChange} = props
    const pageCount = Math.ceil(total / size)
    const handlePageClick = (event) => {
        if (onChange) {
            onChange(event.selected + 1)
        }
    }

    return <>{pageCount > 1 ? <ReactPaginate
        breakLabel="..."
        nextLabel="NEXT"
        onPageChange={handlePageClick}
        pageRangeDisplayed={size}
        pageCount={pageCount}
        previousLabel="PREV"
        renderOnZeroPageCount={null}
        containerClassName={"pagination-container"}

        // pageClassName={'page-btn'}
        pageLinkClassName={'page-link'}

        // activeClassName={"page-active"}
        activeLinkClassName={"page-active-link"}

        // previousClassName={"page-link page-prev"}
        // nextClassName={"page-link page-next"}

        previousLinkClassName={"page-link page-prev"}
        nextLinkClassName={"page-link page-next"}

        disabledLinkClassName={'page-disabled-link'}
    /> : ''}</>
}
