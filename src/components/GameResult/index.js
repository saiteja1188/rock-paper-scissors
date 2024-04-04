import {
  GameResultContainer,
  GameResultImageContainer,
  GameTextImageContainer,
  ResultText,
  ResultImage,
  ResultButtonContainer,
  ResultButton,
} from './styledComponents'

const GameResult = props => {
  const {myChoice, apponentChoice, resultMsg, playAgain} = props
  const {imageUrl} = apponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <GameResultContainer>
      <GameResultImageContainer>
        <GameTextImageContainer>
          <ResultText>YOU</ResultText>
          <ResultImage src={myChoice[1]} alt="your choice" />
        </GameTextImageContainer>
        <GameTextImageContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImage src={imageUrl} alt="opponent choice" />
        </GameTextImageContainer>
      </GameResultImageContainer>
      <ResultText>{resultMsg}</ResultText>
      <ResultButtonContainer>
        <ResultButton type="button" onClick={onClickPlayAgainButton}>
          Play Again
        </ResultButton>
      </ResultButtonContainer>
    </GameResultContainer>
  )
}

export default GameResult
