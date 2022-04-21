import styled from 'styled-components';
import folder from '../icons/folder.svg';

export const Directory = ({ dir, handleOpen }) => {
  const { id, name } = dir;

  const handleClick = () => {
    handleOpen(dir);
  };
  return (
    <>
      <StyledDir key={id} onClick={handleClick}>
        <StyledImg src={folder} />
        {name}
      </StyledDir>
    </>
  );
};

const StyledDir = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: white;

  align-items: center;
  width: 12vw;
  height: 15vh;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    color: black;
  }
  /* border: 1px solid red; */
`;

const StyledImg = styled.img`
  width: 4vw;
`;
