export const sendPurchase = (data) => {

    let params = {
        firstName: data.firstName,
        lastName: data.lastName,
        tel: data.tel,
        address: data.address,
        addressNumber: data.addressNumber,
        purchase: data.purchase,
        total: data.totalSum
    }

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "service_id" : 'service_syyanqm',
            "template_id" : 'template_w9lnl65',
            "user_id" : 'xQ5PcMNu0l7_KcNZK',
            "template_params" : params,
        }),
        redirect: 'follow',
        contentType: false,
        processData: false
    })
        .then(response => {
            if (response.ok) {
                alert('Вашата поръчка беше направена успешно!')
            } else {
                throw new Error()
            }
        })
        .catch(error => {
            alert('Упс... Възникна грешка... Моля опитайте отново по-късно!')
        })
}    