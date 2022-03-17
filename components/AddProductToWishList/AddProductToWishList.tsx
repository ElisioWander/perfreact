import { Container } from "./style";

export interface AddProductToWishListProps {
    onAddToWishList: () => void;
    onRequestClose: () => void; 
}

export function AddProductToWishList({
    onAddToWishList,
    onRequestClose,
  }: AddProductToWishListProps) {
    return (
        <Container>
            Do you wish to add to wishlist?
            <button onClick={onAddToWishList} >Sim</button>
            <button onClick={onRequestClose} >Não</button>
        </Container>
    )
}