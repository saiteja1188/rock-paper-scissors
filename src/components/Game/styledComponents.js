import styled from 'styled-components/macro'

export const GameAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #223a5f;
  align-items: center;
  padding: 10px 0px;
  height: 100vh;
`
export const GameResponseContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  max-width: 550px;

  @media screen and (min-width: 768px) {
    max-width: 1440px;
  }
`
export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 10px;
  width: 90%;
  padding: 10px 20px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: bree serif;
  font-size: 24px;
`
export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 100px;
  height: 120px;
  border-radius: 10px;
`
export const ParagraphScore = styled.p`
  color: #223a5f;
  font-family: Roboto;
  font-size: 24px;
  margin: 0px;
`
export const ScoreCount = styled.p`
  color: #223a5f;
  font-family: Roboto;
  font-size: 36px;
  font-weight: 500;
  margin: 0px;
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const PopUpButton = styled.button`
  background-color: #ffffff;
  padding: 8px 15px;
  color: #223a5f;
  font-family: roboto;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
`
export const RulesImageContainer = styled.div``
export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const CloseLineButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 25px;
`
export const RulesImage = styled.img`
  width: 400px;
  margin-top: 10px;
`
// button Css //

export const ImageItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  height: 50%;
  margin-bottom: 50px;
`
