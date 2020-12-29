import {Button } from "@material-ui/core";
import React from 'react'
import { styles } from '../../pages/register/Register.style';

function AddToBasket(props) {
    const signupStyles = styles();
    return (
        <div>
            <Button className={signupStyles.button}
                type="Submit"
                variant="contained"
                size="medium"
                onClick={()=>props.onClick()}
                >
                    Add to Basket
            </Button>
        </div>
    )
}

export default AddToBasket



// onClick={() => consumer.addToBasket(consumer?.productData?._id)}