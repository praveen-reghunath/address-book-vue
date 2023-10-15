const CONTACTS = '/api/contacts';
const CONTACT_DETAILS = '/api/contacts/:contactId';
const ADDRESSES = '/api/contacts/:contactId/addresses';
const ADDRESS_DETAILS = '/api/contacts/:contactId/addresses/:addressId';
const PHONES = '/api/contacts/:contactId/phones';
const PHONE_DETAILS = '/api/contacts/:contactId/phones/:phoneId';
const ADDRESS_TYPES = '/api/addressTypes';
const PHONE_TYPES = '/api/phoneTypes';

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