export const store = {
  name: 'Picles Emaús',
  city: 'Vitória da Conquista, BA',
  whatsappNumber: '5577999149698',
}

export const whatsappSetupNeeded = !/^\d{10,15}$/.test(store.whatsappNumber)
