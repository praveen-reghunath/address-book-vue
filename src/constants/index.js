const CONTACTS = '/contacts';
const CONTACT_DETAILS = '/contacts/:contactId';
const ADDRESSES = '/contacts/:contactId/addresses';
const ADDRESS_DETAILS = '/contacts/:contactId/addresses/:addressId';
const PHONES = '/contacts/:contactId/phones';
const PHONE_DETAILS = '/contacts/:contactId/phones/:phoneId';
const ADDRESS_TYPES = '/addressTypes';
const PHONE_TYPES = '/phoneTypes';

export const URL = Object.freeze({
    CONTACTS,
    CONTACT_DETAILS,
    ADDRESSES,
    ADDRESS_DETAILS,
    PHONES,
    PHONE_DETAILS,
    ADDRESS_TYPES,
    PHONE_TYPES
});