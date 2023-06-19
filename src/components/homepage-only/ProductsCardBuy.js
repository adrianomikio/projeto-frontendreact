import { ProductInfoSection, ProductImage, ProductDescription, ProductBuyButton } from "../styled-components"

export const ProductCardBuy = (props) => {
    let {
        id, imageUrl, name, description, price,
        amountToBuy,
        addToCart, onChangeInput
    } = props
    
    return (
        <ProductInfoSection key={id}>
            <ProductImage src={imageUrl} alt={name} />
            <ProductDescription>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>R${price}</p>
                <p>Quantidade:
                    <input
                        id={id}
                        value={amountToBuy}
                        onChange={onChangeInput} /></p>
                <ProductBuyButton
                    id={id}
                    onClick={addToCart}>Adicionar</ProductBuyButton>
            </ProductDescription>
        </ProductInfoSection>
    )
}