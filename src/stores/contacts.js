import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { URL } from '@/constants';

export const useContactStore = defineStore('contacts', () => {
  // state
  const contacts = ref(null)
  const contactDetails = ref(null);

  // Getters
  const doubleCount = computed(() => count.value * 2)
  
  // Actions
  async function getContacts() {
    const response = await fetch(URL.CONTACTS);
    contacts.value = await response.json();
  }

  async function getContactDetails(contactId) {    
    const response = await fetch(URL.CONTACT_DETAILS.replace(":contactId",contactId));
    contactDetails.value = await response.json();
  }

  return { contacts, contactDetails, doubleCount, getContacts, getContactDetails }
})
