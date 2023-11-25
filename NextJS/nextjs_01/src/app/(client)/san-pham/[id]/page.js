
// export  const metadata = {
//     title : "san pham chi tiet",
// }


export const generateMetadata  = ({params}) => {
    return {
        title : "san pham-" + params.id
    }
}

const ProductDetail = ({params}) => {
    console.log(params)
    return (
        <div>
            <h1>Chi tiet san pham {params.id}</h1>
        </div>
    );
};

export default ProductDetail ;