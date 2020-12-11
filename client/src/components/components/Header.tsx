import * as React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    height: 20vh;
    display: flex;
    justify-content: center;

    .list {
        border-radius:15px;
        background: var(--header-background);
        padding: 1rem;
        text-align: center;
        margin: auto;
        display: grid;
        width: 60%;
        grid-template-columns: repeat(6, 1fr);
        list-style: none;
    }

    .list :nth-child(1) {
        grid-column: 2;
    }
`;

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
    return (
        <Container>
            <ul className="list">
                <li>שלח סיקור</li>
                <li>מפה</li>
                <li>המסננת</li>
                <li>הכל</li>
            </ul>
        </Container>
    );
}
