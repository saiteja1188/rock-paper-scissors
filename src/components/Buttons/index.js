import {ButtonListContainer, ButtonImage, ImageItem} from './styledComponents'

const Buttons = props => {
  const {buttonDetails, onGetButton} = props
  const {id, imageUrl} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetButton(id, imageUrl)
  }

  return (
    <ButtonListContainer>
      <ButtonImage
        type="button"
        data-testid={` ${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <ImageItem src={imageUrl} alt={id} />
      </ButtonImage>
    </ButtonListContainer>
  )
}

export default Buttons
