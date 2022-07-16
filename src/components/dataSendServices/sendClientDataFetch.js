import { sendPurchase } from './sendPurchase'

export const sendClientDataFetch = (data) => {

    fetch("https://parseapi.back4app.com/classes/clientData", {
        method: 'POST',
        headers: {
            "X-Parse-Application-Id": "H6D4cPNXrQlE6Td0u98vAHT4d36CcYbQG9rooOHV",
            "X-Parse-REST-API-Key": "MZnFsyXwYEOVhe4sIiPdn611hVpgTQtuV68Thldj",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "firstName": data.firstName,
            "lastName": data.lastName,
            "tel": data.tel,
            "address": data.address,
            "addressNumber": data.addressNumber,
            "purchase": data.purchase,
            "total": data.totalSum
        }),
        redirect: 'follow',
    })
        .then(response => {
            if (response.ok) {
                sendPurchase(data)
            } else {
                throw new Error()
            }
        })
        .catch(error => alert(error))
}
