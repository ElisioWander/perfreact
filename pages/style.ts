import styled from 'styled-components'

export const Container = styled.div`
    width: 720px;

    padding: 2rem;

    border-radius: 2rem;

    background-color: var(--background);

    h1 {
        font-size: 2rem;

        margin: 1rem 0 1rem 0;

        color: var(--white);
    }

    input {
        width: 150px;
        height: 24px;

        padding: 0.5rem;

        border: none;
        border-radius: 0.5rem;

        margin: 0 0.5rem 0.5rem 0;

        color: white;
        background-color: #444;
    }
`

export const SearchButton = styled.button`
    width: 82px;
    height: 24px;

    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;

    border: none;
    border-radius: 0.4rem;

    color: var(--white);
    background-color: var(--yellow);

    transition: 200ms;

    &:hover {
        filter: brightness(0.8);
    }
`