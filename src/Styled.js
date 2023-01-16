import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
from {
    transform: rotate(0deg);
} 
to {
    transform: rotate(360deg)
}
`;

export const Container = styled("div")`
  display: flex;
  background-color: coral;
  color: black;
  padding: 10px;
`;
const common = css`
  color: black;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-weight: 400;
  padding: 10px;
  border: 3px dashed purple;
  height: fit-content;
  font-size: 20px;
`;

export const Title = styled.h1`
  ${common}
`;
export const Desc = styled.h1`
  ${common}
  font-size: 15px;
  color: ${({ left }) => (left ? "red" : "green")};
`;

const getSize = (props) => {
  switch (props.type) {
    case "X-large":
      return "200px";
    case "X-medium":
      return "150px";
    case "X-small":
      return "100px";
    default:
      return "150px";
  }
};

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: ${(props) => props.bg};
  /* width: ${(props) => (props.type === "large" ? "200px" : "150px")};
  height: ${(props) => (props.type === "large" ? "200px" : "150px")}; */
  width: ${getSize};
  height: ${getSize};
  border: 3px solid purple;
  border-radius: 30px 0px 30px 0px;
  margin: 12px;
  transition: all 0.6s ease-in-out;
  :hover {
    border-radius: 0px 30px 0px 30px;
    cursor: pointer;
  }
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  background: #ddd;
  border-radius: 8px;
  margin-left: 15px;
  /* transition: all 0.6s ease-in-out; */
  cursor: pointer;
  :active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;

export const ActiveBtn = styled(Btn)`
  height: 60px;
  margin-top: 10px;
`;

export const Rotate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100px;
  height: 100px;
  border: 2px solid #ddd;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
  color: #fff;
`;
