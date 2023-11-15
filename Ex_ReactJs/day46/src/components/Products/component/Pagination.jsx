import React from 'react';
import ReactPaginate from 'react-paginate';
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

const Pagination = () => {
    const totalPage = useSelector((state) => state.products.totalPage)
    const navigate = useNavigate();
    const params = useParams()
    // console.log(params)
    const handlePageChange = (selectedPage) => {
        navigate(`/home/${selectedPage.selected + 1}`)
    };
    const initialPage = (+params.page ?? 1) - 1;
    // console.log(initialPage)
    return (<ReactPaginate
            className={'pagination  d-flex gap-2 '}
            pageClassName={'btn btn-primary '}
            activeClassName={'btn-warning'}
            previousLinkClassName={'btn btn-success text-light'}
            nextLinkClassName={'btn btn-success text-light'}
            previousLabel={'< previous'}
            nextLabel={'next >'}
            breakLabel={'...'}
            pageCount={totalPage}
            marginPagesDisplayed={2}
            initialPage={initialPage}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
        />);
};

export default Pagination;
