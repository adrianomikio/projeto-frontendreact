import {
    ProductCartCardSection,
    ProductInformationCart,
    ProductImageCart,
    ProductNameCart,
    ProductPriceCart,
    MinusProductButton,
    ProductAmountCart,
    PlusProductButton,
    ProductAmountSectionCart,
    TotalPrice
} from "../styled-components"

export const ProductCardCart = (props) => {

    const { key, id,
        imageUrl, name, price,
        minusOneProduct, amountInCart, plusOneProduct,
        totalPrice
    } = props

    return (
        <ProductCartCardSection key={key}>
            <ProductImageCart src={imageUrl} alt={name} />
            <ProductInformationCart>
                <ProductNameCart>{name}</ProductNameCart>
                <ProductPriceCart>Preço: R$ {price}</ProductPriceCart>
            </ProductInformationCart>
            <ProductAmountSectionCart>
                <MinusProductButton id={id} onClick={minusOneProduct}>
                    -
                </MinusProductButton>
                <ProductAmountCart>Quantidade: {`${amountInCart}`}
                </ProductAmountCart>
                <PlusProductButton id={id} onClick={plusOneProduct}>
                    +
                </PlusProductButton>
            </ProductAmountSectionCart>
            <TotalPrice >Preço total do produto: R${totalPrice}</TotalPrice>
        </ProductCartCardSection>
    )
}