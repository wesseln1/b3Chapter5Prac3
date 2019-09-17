let customerContact = [];

customers.forEach(customer => {
    for(let i = 0; i < customer.contacts.email.length; i++){
        let customerEmail = customer.contacts.email[i]
        customerContact.push(customerEmail)
    }
})
console.log(customerContact)