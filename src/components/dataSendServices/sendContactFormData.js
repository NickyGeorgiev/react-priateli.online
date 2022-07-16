export const sendContactFormData = (data) =>{

    data.append('service_id', 'service_oelubx2');
    data.append('template_id', 'template_1xefs0a');
    data.append('user_id', 'xQ5PcMNu0l7_KcNZK');
    data.append('Content-Type', 'multipart/form-data');

    fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        body: data,
        contentType: false,
        processData: false
    })
    .then(response => {
        if (response.ok) {
            alert('Вашето съобщение е изпратено успешно!')
        } else {
            throw new Error()
        }
    })
    .catch(error => alert('Упс... Възникна грешка... Моля опитайте отново по-късно!'))
}