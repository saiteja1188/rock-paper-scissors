import {Component} from 'react'
import PopUp from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import Buttons from '../Buttons'
import GameResult from '../GameResult'

import {
  GameAppContainer,
  GameResponseContainer,
  TopContent,
  Heading,
  ScoreCardContainer,
  ParagraphScore,
  ScoreCount,
  // button list //
  ImageItemsContainer,
  // PopUp css line //
  PopUpContainer,
  PopUpButton,
  RulesImageContainer,
  CloseLineContainer,
  CloseLineButton,
  RulesImage,
} from './styledComponents'

class Game extends Component {
  state = {
    score: 0,
    showResult: false,
    myChoice: {},
    apponentChoice: {},
    resultMsg: '',
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {myChoice, apponentChoice, resultMsg} = this.state

    return (
      <GameResult
        myChoice={myChoice}
        apponentChoice={apponentChoice}
        resultMsg={resultMsg}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonView = (id, imageUrl) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)

    if (id === 'ROCK' && choicesList[number].id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMsg: 'YOU WON',
      }))
    } else if (id === 'ROCK' && choicesList[number].id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMsg: 'YOU LOSE',
      }))
    }
    if (id === 'PAPER' && choicesList[number].id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMsg: 'YOU WON',
      }))
    } else if (id === 'PAPER' && choicesList[number].id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMsg: 'YOU LOSE',
      }))
    }
    if (id === 'SCISSORS' && choicesList[number].id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMsg: 'YOU WON',
      }))
    } else if (id === 'SCISSORS' && choicesList[number].id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMsg: 'YOU LOSE',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        resultMsg: 'IT IS DRAW',
      })
    }
  }

  onGetImages = () => {
    const {choicesList} = this.props

    return (
      <ImageItemsContainer>
        {choicesList.map(eachItem => (
          <Buttons
            key={eachItem.key}
            buttonDetails={eachItem}
            onGetButton={this.onGetButtonView}
          />
        ))}
      </ImageItemsContainer>
    )
  }

  render() {
    const {score, showResult} = this.state
    return (
      <GameAppContainer>
        <GameResponseContainer>
          <TopContent>
            <Heading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
            <ScoreCardContainer>
              <ParagraphScore>Score</ParagraphScore>
              <ScoreCount>{score}</ScoreCount>
            </ScoreCardContainer>
          </TopContent>
        </GameResponseContainer>
        {showResult ? this.onGetResult() : this.onGetImages()}
        <PopUpContainer>
          <PopUp model trigger={<PopUpButton type="button">Rules</PopUpButton>}>
            {close => (
              <RulesImageContainer>
                <CloseLineContainer>
                  <CloseLineButton type="button" onClick={() => close()}>
                    <RiCloseLine size={20} />
                  </CloseLineButton>
                </CloseLineContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImageContainer>
            )}
          </PopUp>
        </PopUpContainer>
      </GameAppContainer>
    )
  }
}

export default Game
