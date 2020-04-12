import express from 'express';
import faker from 'faker';

import { URL } from '../src/constants/index';

const ADDRESS_TYPES = require('./data/addressTypes.json');
const PHONE_TYPES = require('./data/phoneTypes.json');

const router = express.Router();

function getRandomType(types) {
    const type = faker.helpers.randomize(types);
    return type;
}

function getPhone(id, phoneType, phoneNumber) {
    faker.locale = "en";
    phoneType = phoneType || getRandomType(PHONE_TYPES);
    phoneNumber = phoneNumber || faker.phone.phoneNumber('(###) ###-####');
    return {
        id,
        phoneType,
        phoneNumber
    };
}

function getPhones() {
    const result = [];
    let count = faker.random.number({ min: 1, max: 3 });
    for (let index = 1; index <= count; index++) {
        const phone = getPhone(index);
        result.push(phone);
    }

    return result;
}

function getAddress(id, addressType, street, city, state, postalCode) {
    addressType = addressType || getRandomType(ADDRESS_TYPES);
    street = street || faker.address.streetName();
    city = city || faker.address.city();
    state = state || faker.address.state();
    postalCode = postalCode || faker.address.zipCode('#####');

    return {
        id,
        addressType,
        street,
        city,
        state,
        postalCode
    };
}

function getAddresses() {
    const result = [];
    let count = faker.random.number({ min: 1, max: 3 });
    for (let index = 1; index <= count; index++) {
        const address = getAddress(index);
        result.push(address);
    }
    return result;
}

function getContact(id, firstName, lastName) {
    firstName = firstName || faker.name.firstName();
    lastName = lastName || faker.name.lastName();
    return {
        id,
        firstName,
        lastName
    };
}

function buildContacts() {

    const contacts = [];

    for (let index = 1; index <= 5; index++) {
        const contact = getContact(index);
        contact.addresses = getAddresses();
        contact.phones = getPhones();
        contacts.push(contact);
    }

    return contacts;
}

class ContactFactory {
    constructor() {
        this.contacts = buildContacts();
    }

    get router() {
        router.get(URL.CONTACTS, this.handleContactsGet.bind(this));

        router.get(URL.CONTACT_DETAILS, this.handleContactDetailsGet.bind(this));
        router.post(URL.CONTACT_DETAILS, this.handleContactDetailsPost.bind(this));
        router.delete(URL.CONTACT_DETAILS, this.handleContactDelete.bind(this));

        router.get(URL.ADDRESSES, this.handleAddressesGet.bind(this));
        router.post(URL.ADDRESS_DETAILS, this.handleAddressDetailsPost.bind(this));

        router.get(URL.PHONES, this.handlePhonesGet.bind(this));
        router.post(URL.PHONE_DETAILS, this.handlePhoneDetailsPost.bind(this));

        router.get(URL.ADDRESS_TYPES, this.handleAddressTypesGet.bind(this));
        router.get(URL.PHONE_TYPES, this.handlePhoneTypesGet.bind(this));

        return router;
    }

    handleContactsGet(request, response) {
        const contacts = this.contacts.map(contact => getContact(contact.id, contact.firstName, contact.lastName))
        response.json(contacts);
    }

    handleContactDetailsGet(request, response) {
        const contactId = request.params.contactId;
        const contact = this.contacts.find(contact => contact.id == contactId);

        if (contact) {
            response.json(contact);
        }
        else {
            response.status(404);
            response.end();
        }

    }

    handleContactDetailsPost(request, response) {
        let contactId = request.params.contactId;
        const { firstName, lastName } = request.body;
        let index = -1;
        let contactDetails;
        if (contactId == -1) {
            contactId = this.contacts.length + 1;
            index = this.contacts.length;
        }
        else {
            index = this.contacts.findIndex(item => item.id == contactId);
        }

        const contact = getContact(contactId, firstName, lastName);
        contactDetails = this.contacts[index];

        if (contactDetails) {
            contactDetails = { ...contactDetails, firstName, lastName };
        }
        else {
            contactDetails = { ...contact, addresses: [], phones: [] };
        }

        this.contacts[index] = contactDetails;

        response.json(contact);

    }

    handleContactDelete(request, response) {
        const contactId = request.params.contactId;
        const index = this.contacts.findIndex(item => item.id == contactId);

        if (index === -1) {
            response.json({ status: 'Failure' });
        }
        else {
            this.contacts.splice(index, 1);
            response.json({ status: 'Success' });
        }

    }

    handleAddressesGet(request, response) {
        const contactId = request.params.contactId;
        const contact = this.contacts.find(contact => contact.id == contactId);
        if (contact) {
            const { addresses = [] } = contact;
            response.json(addresses);
        }
        else {
            response.status(404);
            response.end();
        }
    }

    handleAddressDetailsPost(request, response) {
        let { contactId, addressId } = request.params;
        const contact = this.contacts.find(contact => contact.id == contactId);
        let index;
        const { addressType, street, city, state, postalCode } = request.body;

        if (contact) {
            const { addresses = [] } = contact;
            if (addressId == -1) {
                addressId = addresses.length + 1;
                index = addresses.length;
            }
            else {
                index = addresses.findIndex(addr => addr.id == addressId);
            }

            let address = getAddress(addressId, addressType, street, city, state, postalCode);

            if (!Array.isArray(contact.addresses)) {
                contact.addresses = [];
            }
            contact.addresses[index] = address;

            response.json(address);
        }
        else {
            response.status(404);
            response.end();
        }
    }

    handlePhonesGet(request, response) {
        const contactId = request.params.contactId;
        const contact = this.contacts.find(contact => contact.id == contactId);
        if (contact) {
            const { phones = [] } = contact;
            response.json(phones);
        }
        else {
            response.status(404);
            response.end();
        }
    }

    handlePhoneDetailsPost(request, response) {
        let { contactId, phoneId } = request.params;
        const contact = this.contacts.find(contact => contact.id == contactId);
        let index;
        const { phoneType, phoneNumber } = request.body;

        if (contact) {
            const { phones = [] } = contact;
            if (phoneId == -1) {
                phoneId = phones.length + 1;
                index = phones.length;
            }
            else {
                index = phones.findIndex(ph => ph.id == phoneId);
            }

            let phone = getPhone(phoneId, phoneType, phoneNumber);
            contact.phones[index] = phone;

            response.json(phone);
        }
        else {
            response.status(404);
            response.end();
        }
    }

    handleAddressTypesGet(request, response) {
        response.json(ADDRESS_TYPES);
    }

    handlePhoneTypesGet(request, response) {
        response.json(PHONE_TYPES);
    }

}

export default new ContactFactory();