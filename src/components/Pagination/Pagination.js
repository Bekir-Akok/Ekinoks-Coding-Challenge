import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.scss';

const Pagination = ({ pageCount, handlePageClick }) => {
    return (
        <div className="pagination-container">
            <ReactPaginate
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                nextLabel=""
                pageClassName="page-item"
                pageLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                breakLabel="..."
            />
        </div>
    )
}

export default Pagination
