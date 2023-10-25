import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;
    console.log(id);
    return (
        <>
            <h1>Chi tiết sản phẩm: {id}</h1>
            <button
                onClick={() => {
                    navigate(-1);
                }}
            >
                Back
            </button>
        </>
    );
};

export default ProductDetail;
