import { client } from '@/sanity/lib/client';

type Product = {
    id: string;
    imagePath: string;
    name: string;
    price: number;
    description: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category: string;
};

type Props = {
    params: {
        productId: string;
    };
};

const page = async (props: Props) => {
    console.log(props)
    // Fetch all products or a specific product based on ID
    const fetchData = await client.fetch(
        `*[_type == 'data' && id == $productId][0]{
            imagePath,
            id,
            stockLevel,
            name,
            price,
            description,
            category,
            discountPercentage,
            isFeaturedProduct
        }`,
        { productId: props.params.productId }
    );

    if (!fetchData) {
        return <div>Product not found</div>;
    }

    const {
        imagePath,
        name,
        price,
        description,
        discountPercentage,
        stockLevel,
        category,
    }: Product = fetchData;

    return (
        <div>
            <div>
                <img src={imagePath} alt={name} style={{ maxWidth: '300px' }} />
            </div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Category: {category}</p>
            <p>
                Price: ${price.toFixed(2)}{' '}
                {discountPercentage > 0 && (
                    <span style={{ color: 'red' }}>
                        ({discountPercentage}% off)
                    </span>
                )}
            </p>
            <p>Stock Level: {stockLevel > 0 ? 'In Stock' : 'Out of Stock'}</p>
        </div>
    );
};

export default page;
