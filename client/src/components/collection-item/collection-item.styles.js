import styled from 'styled-components'
import { CustomButton } from '../custom-button'

export const AddToCartButton = styled(CustomButton)`
    position: absolute;
    width: 80%;
    bottom: 20px;
    opacity: 0.7;
    display: none;
`

export const CartImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`

export const CollectionFooter = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
`

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 350px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    &:hover {
        ${CartImage} {
            opacity: 0.9;

            ${AddToCartButton} {
                display: block;
            }
        }
    }
`

export const Name = styled.span`
    font-weight: normal;
`

export const Price = styled.span`
    font-weight: bold;
`
