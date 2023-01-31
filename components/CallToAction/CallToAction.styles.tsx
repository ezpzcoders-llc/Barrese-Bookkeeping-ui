import styled from '@emotion/styled'

export const StyledCallToAction = styled.section`
    padding: 6rem 0rem;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;

    img {
        position: absolute;
        top: 25px;
        left: 0px;
        right: 0px;
        margin: auto;
        z-index: 1;
        outline: 10px solid white;
        border-radius: 50%;
        height: 150px;
        width: 150px;
    }

    .content {
        position: relative;
        border: 3px solid var(--Secondary-accent-color);
        width: var(--max-desktop-width);
        padding: 6rem 0rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        color: var(--Primary-brand-color);
        h1 {
            font-size: 60px;
        }

        .subText {
            font-size: 20px;
        }
    }

    button {
        width: 10rem;
        position: absolute;
        bottom: 75px;
        left: 0px;
        right: 0px;
        margin: auto;
        z-index: 1;
        outline: 10px solid white;
        padding: 1rem 2rem;
    }
`
