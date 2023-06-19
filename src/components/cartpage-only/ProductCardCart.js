import {
    ProductInfoSection,
    ProductImage,
    ProductDescription,
    ProductBuyButton
} from "../styled-components"

export const ProductCardCart = (props) => {
    return (
        <ProductInfoSection key={props.key} id={props.id}>
            <ProductImage src={props.imageUrl} alt={props.name} />
            <ProductDescription>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p>R$ {props.price}</p>
                <p>Quantidade:
                    <input
                        type="number"
                        value={props.amountToBuy}
                        onChange={() => props.setAmountToBuy} /></p>
                <ProductBuyButton
                    onClick={(e) => props.addToCart()}
                    id={props.buttonId}>Adicionar</ProductBuyButton>
            </ProductDescription>
        </ProductInfoSection>
    )
}