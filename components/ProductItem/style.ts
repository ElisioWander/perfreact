import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        align-items: center;
        gap: 1rem;

        color: #F3A712;

    strong {
        font-size: 0.9rem;
        color: var(--white);
    }

    button {
        width: 128px;
        height: 24px;

        border: none;
        border-radius: 0.4rem;

        font-weight: bold;
        text-transform: uppercase;

        color: var(--white);
        background-color: var(--pink);

        transition: 200ms;

        &:hover {
            filter: brightness(0.8);
        }
    }
`