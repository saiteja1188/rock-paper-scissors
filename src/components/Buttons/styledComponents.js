import styled from 'styled-components/macro'

export const ButtonListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
`
export const ButtonImage = styled.button`
  margin-right: 20px;
  margin-bottom: 30px;
  background-color: transparent;
  border: none;
`
export const ImageItem = styled.img`
  width: 100px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
