import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.scss';

const Pagination = ({ pageCount, handlePageClick }) => {
    return (
        <div className="pagination-container">
            <ReactPaginate
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                pageClassName="page-item"
                pageLinkClassName="page-link"
                containerClassName="pagination"
                breakLabel="..."
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Pagination
