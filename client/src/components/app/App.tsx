import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.main`
    display: grid;
    background: var(--app-background);
    height:100vh;
`;

function App() {
    return (
        <Container className="App">
            <Header />
        </Container>
    );
}

export default App;
