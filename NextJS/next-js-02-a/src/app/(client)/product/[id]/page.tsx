
const ProductDetail = (props : any) => {

    // console.log(props)
    // console.log(props.searchParams.page)

    return (
        <div>
            <h1> Chi tiết sản phẩm: {props.params.id}</h1>
            <h1> page: {props.searchParams.page}</h1>
        </div>
    );
};

export default ProductDetail;