import React from 'react';
import * as S from './ButtonMobile.styles';
import Button from '../Button/index'
const ButtonMobile = (props) => {
    const { setStatePage, statePage } = props;

    return (
        <S.ButtonPagesStyle>
            <div className='buttonMobile'>
                <Button background={'#f4d700'}
                    onClick={() => setStatePage(statePage >= 0 ? parseInt(statePage) - parseInt(1) : 0)}
                > Anterior
            </Button>

                <Button background={'#f4d700'}
                    onClick={() => setStatePage(statePage >= 0 ? parseInt(statePage) + parseInt(1) : 0)}
                > Próxima
            </Button>
            </div>
        </S.ButtonPagesStyle>
    );
}
export default ButtonMobile;
