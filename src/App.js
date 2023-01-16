import { Component } from "react";
import "./App.css";
import { Container, Box, Title, Desc, Btn, ActiveBtn, Rotate } from "./Styled";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.cl};
}`;

class App extends Component {
  state = {
    light: true,
  };
  render() {
    const theme = {
      bg: this.state.light ? "white" : "black",
      cl: this.state.light ? "white" : "black",
    };
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <button onClick={() => this.setState({ light: !this.state.light })}>
          {" "}
          Change theme
        </button>
        <>
          {/* <Box type="large">Large</Box>
      <Box type="medium">Medium</Box>
    <Box type="small">Small</Box> */}
          <Box bg="purple" type="X-large">
            X-Large
          </Box>
          <Box bg="yellow" type="X-medium">
            X-Medium
          </Box>
          <Box bg="green" type="X-small">
            X-Small
          </Box>
          <Box bg="tomato" type="default">
            Default
          </Box>
          <Title>Hey Title</Title>
          <Desc left>Description 1</Desc>
          <Desc>Description 2</Desc>
          <Btn>Click me</Btn>
          <ActiveBtn>Active Btn</ActiveBtn>
          <>
            <Rotate>Rotate</Rotate>
          </>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
