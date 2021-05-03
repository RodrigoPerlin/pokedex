import React from 'react';
import * as S from './ButtonDesktop.styles';
import  Button from  '../Button/index'

const ButtonDesktop = (props) => {
    const { setStatePage, statePage } = props;

    return (
        <S.ButtonPagesStyle>
            <div className='buttonDestp'>
                {Array(56).fill('').map((_, index) => {
                    return (

                        <Button background={'#0000cd'} fontWeight={'600'}
                            key={index+1}
                            onClick={() => setStatePage(index + 1)}
                            disabled={index === statePage - 1}
                        >   {index + 1}
                        </Button>
                        )
                })}
            </div>
        </S.ButtonPagesStyle>
    );
}
export default ButtonDesktop;
