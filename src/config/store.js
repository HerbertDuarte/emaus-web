export const store = {
  name: 'Picles Emaús',
  city: 'Vitória da Conquista, BA',
  whatsappNumber: '',
}

export const whatsappSetupNeeded = !/^\d{10,15}$/.test(store.whatsappNumber)
