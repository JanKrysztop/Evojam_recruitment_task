import styled from 'styled-components';
import files from '../icons/files.svg';
import image from '../icons/image.svg';

export const File = ({ file }) => {
  return (
    <StyledFile>
      {file.name.slice(-3) === 'jpg' ? (
        <StyledImg src={image} />
      ) : (
        <StyledImg src={files} />
      )}
      {file.name.length >= 11 ? file.name.slice(0, 8) + '...' : file.name}
    </StyledFile>
  );
};

const StyledFile = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: white;
  align-items: center;
  width: 12vw;
  height: 15vh;
`;

const StyledImg = styled.img`
  width: 4vw;
`;