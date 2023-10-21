import { ProductInfoSection, ProductImage, ProductInformation, ProductBuyButton, ProductDescription } from "../styled-components"

export const ProductCardBuy = (props) => {

    let {
        id, imageUrl, name, description, price,
        addProductToCart
    } = props

    return (
        <ProductInfoSection key={id}>
            <ProductImage src={imageUrl} alt={name} />
            <ProductInformation>
                <h3>{name}</h3>
                <ProductDescription>{description}</ProductDescription   >
                <p>R${price}</p>
                <ProductBuyButton
                    id={id}
                    onClick={(e) => addProductToCart(e)}>Adicionar</ProductBuyButton>
            </ProductInformation>
        </ProductInfoSection>
    )
}