import { FooterContacts } from "./FooterContacts"
import { FooterForUse } from "./FooterForUs"
import { FooterForm} from "./FooterForm"

export const Footer = () => {

    return (
        <section className="footer">
            <footer className="footer-menu">
                <FooterContacts />
                <FooterForUse />
                <FooterForm />
            </footer>
            <marquee className="copyright" behavior="scroll" direction="left" scrollamount="5">© 2020 - 2030 Copyright:
        Ресторант Приятели ©</marquee>
        </section >
    )
}