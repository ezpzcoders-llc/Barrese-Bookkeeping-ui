import HeroImage from '@/components/HeroHeader'
import Logo from '../../../assets/images/BarreseBookkeeping.svg'
import { StyledPageContainer } from '../PageContainer.styles'
import { StyledContact } from './Contact.styles'
import { InlineWidget, useCalendlyEventListener } from 'react-calendly'

const ContactPage = () => {
    const onEventScheduled = (e: any) => {
        console.log('eventUrl', e.data.payload.event.uri)
        console.log('inviteeUri ', e.data.payload.invitee.uri)
    }

    useCalendlyEventListener({
        onEventScheduled: onEventScheduled
    })

    return (
        <StyledPageContainer>
            <HeroImage url="https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80" />
            <div className="container">
                <StyledContact>
                    <div className="content">
                        <div className="logo-container">
                            <img
                                className="logo"
                                src={Logo.src}
                                alt="Barrese Bookkeeping"
                            />
                            <h2>Schedule a meeting today!</h2>
                        </div>
                        <InlineWidget url="https://calendly.com/barresebookkeeping" />
                    </div>
                </StyledContact>
            </div>
        </StyledPageContainer>
    )
}

export default ContactPage
