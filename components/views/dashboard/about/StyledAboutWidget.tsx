import styled from '@emotion/styled'

import CardStyles from '@/styles/components/StyledCard'

export const StyledAboutForm = styled.form`
    display: grid;
    grid-template-columns: 20rem 1fr;
    grid-template-rows: 1fr 4rem;
    grid-gap: 1rem;
`

export const StyledAboutFields = styled.div`
    ${CardStyles}
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
