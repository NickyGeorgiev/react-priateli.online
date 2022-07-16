import { sendContactFormData } from "../dataSendServices/sendContactFormData";

export const FooterForm = () => {

    const contactFormSubmit = (e) =>{
        e.preventDefault();

        let contactForm = new FormData(e.target)

        let contactFormData = {
            name: contactForm.get('name'),
            tel: contactForm.get('tel'),
            text: contactForm.get('text')
        }

        if(contactFormData.name !='' && contactFormData.email != '' && contactFormData.text !=''){
            sendContactFormData(contactForm)
        }
        e.target.reset()
    }

    return (
        <div className="contact-form">
            <h2>Пишете ни</h2>
            <form className="input-group" name="contactForm" onSubmit={contactFormSubmit}>
                <input className="input-group-field" type="text" name="name" placeholder="Име" />
                <input className="input-group-field" type="text" name="tel" placeholder="Телефон" />
                <textarea type="textarea" name="text" placeholder="Съобщение"></textarea>
            <button className="send" type='submit' href="#">Изпрати</button>
            </form>
        </div>
    )
}