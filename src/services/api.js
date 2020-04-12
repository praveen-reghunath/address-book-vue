import { URL } from 'constants/index';

const OPTIONS = {
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
    }
};

async function serverRequest(url, params) {
    const response = await fetch(url, params);
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    else {
    }
}

async function get(url) {
    return serverRequest(url, { ...OPTIONS, method: 'GET' });
}

async function deleteRequest(url) {
    return serverRequest(url, { ...OPTIONS, method: 'DELETE' });
}

async function post(url, data) {
    return serverRequest(url, { ...OPTIONS, method: 'POST', body: JSON.stringify(data) });
}

class ApiClient {

    static async getAllContacts() {
        return {
            contacts: await get(URL.CONTACTS),
            addressTypes: await get(URL.ADDRESS_TYPES),
            phoneTypes: await get(URL.PHONE_TYPES),
        }
    }

    static async saveContact(contactDetails) {
        let { id: contactId, firstName, lastName, addresses, phones } = contactDetails;
        const dirtyContact = { id: contactId, firstName, lastName };

        try {

            const contact = await post(URL.CONTACT_DETAILS.replace(':contactId', contactId), dirtyContact);
            contactId = contact.id;
            contact.addresses = [];

            const addressUrl = URL.ADDRESS_DETAILS.replace(':contactId', contactId);
            for (let dirtyAddress of addresses) {
                const address = await post(addressUrl.replace(':addressId', dirtyAddress.id), dirtyAddress);
                contact.addresses.push(address);
            }

            contact.phones = [];
            const phoneUrl = URL.PHONE_DETAILS.replace(':contactId', contactId);
            for (let dirtyPhone of phones) {
                const phone = await post(phoneUrl.replace(':phoneId', dirtyPhone.id), dirtyPhone);
                contact.phones.push(phone);
            }

            return contact;
        }
        catch (ex) {
            throw ex;
        }
    }

    static async deleteContact(id) {
        deleteRequest(URL.CONTACT_DETAILS.replace(':contactId', id));
    }

    static async getContactDetails(id) {
        return get(URL.CONTACT_DETAILS.replace(':contactId', id));
    }

}

export default ApiClient;