import styled from "styled-components";
import { FlexContainer, FlexItem } from "./";

const MessagePhoto = ({ imgSrc, caption }) => {
  return (
    <PhotoSection justifyBetween>
      <Photo basis="40%">
        <PhotoImg src={imgSrc} />
      </Photo>

      <Caption basis="50%">
        <p>{caption}</p>
      </Caption>
    </PhotoSection>
  )
}

const PhotoSection = styled(FlexContainer)`
  padding: 120px 0;
`;

const Photo = styled(FlexItem)``;

const PhotoImg = styled.img`
  width: 100%;
  border-radius: 16px;
`;

const Caption = styled(FlexItem)`
  p {
    border-left: 8px solid #54504D;
    padding-left: 16px;
    font-size: 24px;
    line-height: 36px;
  }
`;

export default MessagePhoto;