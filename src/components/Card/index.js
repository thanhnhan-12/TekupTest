import React from 'react'
import { CardItems } from './CardItem'
import * as S from './style'
import { MdKeyboardArrowRight } from 'react-icons/md/'

function Card() {
  return (
    <S.Wrapper>
      <S.Container>
        {CardItems.map((key, item) => {
          return (
            <S.Card>
              <S.CardImg>
                <img src={key.image} alt="" />

                <S.CardBox>
                  <S.CardTitle>
                    <h6>{key.title}</h6> 
                    <MdKeyboardArrowRight/> 
                  </S.CardTitle>
                </S.CardBox>
              </S.CardImg>

            </S.Card>
          )
        })}
      </S.Container>
    </S.Wrapper>
  )
}

export default Card