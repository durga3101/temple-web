export const filterCategories = [
  { id: 'all', label: 'All' },
  { id: 'sita-rama', label: 'Sri Sita Rama' },
  { id: 'shiva', label: 'Lord Shiva' },
  { id: 'hanuman', label: 'Lord Hanuman' },
  { id: 'ganesha', label: 'Lord Ganesha' },
  { id: 'goddess', label: 'Goddess' },
  { id: 'grahas', label: 'Nava Grahas' },
]


const poojaDetailData = {
  id: 1,
  title: 'Rudrabhishekam - Sacred Shiva Worship',
  description: 'Experience the divine grace of Lord Shiva through this powerful Abhishekam ritual performed with sacred offerings and Vedic mantras.',
  
  // Info cards section
  schedule: {
    icon: '📅',
    title: 'Schedule',
    subtitle: 'Daily Pooja',
    detail: 'Every Day, 7:00 AM'
  },
  location: {
    icon: '📍',
    title: 'Location',
    subtitle: 'Kakatiya Nagar, Ramachandrapuram',
    detail: 'Sangareddya District'
  },
  pricing: {
    icon: '💰',
    title: 'Pooja Contribution',
    subtitle: '516/-',
    detail: 'Includes all offerings & Prasadam'
  },
  
  // Main content
  mainTitle: '🔱 Rudrabhishekam - Divine Bathing Ceremony of Lord Shiva 🔱',
  highlightText: 'Rudrabhishekam is one of the most sacred and powerful rituals dedicated to Lord Shiva. This divine ceremony involves bathing the Shiva Lingam with various sacred offerings while chanting the powerful Rudra mantras.',
  introText: 'According to ancient scriptures, performing Rudrabhishekam on Mondays, especially during the early morning hours, brings immense spiritual benefits. It helps devotees overcome negativity, removes obstacles, and invokes divine blessings for health, wealth, prosperity, and spiritual growth.',
  
  // Procedure sections
  procedures: [
    {
      title: '🪔 Preparation & Invocation',
      items: [
        { label: 'Sankalpa', description: 'Taking the sacred vow with your name, gotra, and specific wishes' },
        { label: 'Ganapati Pooja', description: 'Initial prayers to Lord Ganesha for removing obstacles' },
        { label: 'Kalasha Sthapana', description: 'Establishment of sacred water pot with holy items' }
      ]
    },
    {
      title: '🔱 Abhishekam Offerings',
      items: [
        { label: 'Water Abhishekam', description: 'Sacred Ganga water or purified water with Rudra mantra chanting' },
        { label: 'Milk Abhishekam', description: 'Pure cow\'s milk representing purity and prosperity' },
        { label: 'Curd Abhishekam', description: 'Fresh yogurt for fulfillment of desires' },
        { label: 'Ghee Abhishekam', description: 'Clarified butter for spiritual illumination' },
        { label: 'Honey Abhishekam', description: 'Pure honey for sweetness in life' },
        { label: 'Sugar/Jaggery Water', description: 'For removing bitterness and negativity' },
        { label: 'Panchamrit Abhishekam', description: 'Sacred mixture of five nectars' },
        { label: 'Coconut Water', description: 'For cooling and purification' },
        { label: 'Fruit Juice', description: 'Representing nature\'s bounty' },
        { label: 'Final Water Abhishekam', description: 'Purification with sacred water' }
      ]
    },
    {
      title: '🌺 Alankaram & Archana',
      items: [
        { label: 'Bilva Patra Archana', description: 'Offering sacred Bilva leaves to Lord Shiva' },
        { label: 'Flowers Decoration', description: 'Adorning with fresh flowers' },
        { label: 'Rudra Namam Archana', description: 'Chanting 108 names of Lord Shiva' },
        { label: 'Sacred Ash Application', description: 'Applying Vibhuti (sacred ash)' }
      ]
    },
    {
      title: '🔥 Completion Rituals',
      items: [
        { label: 'Arati', description: 'Waving of sacred lamps with devotional songs' },
        { label: 'Mantra Pushpam', description: 'Vedic hymns and flower offerings' },
        { label: 'Pradakshina', description: 'Circumambulation of the deity' },
        { label: 'Prasadam Distribution', description: 'Blessed food offerings to devotees' }
      ]
    }
  ],
  
  // Images
  images: {
    local: '/assets/photos/siva.jpeg',
    fallback: 'https://images.unsplash.com/photo-1582632208099-e0fff18f7d0d?auto=format&fit=crop&w=1200&q=80'
  },
  
  // Benefits
  benefits: [
    { title: 'Spiritual Growth', description: 'Enhances meditation, concentration, and spiritual awareness' },
    { title: 'Health & Healing', description: 'Promotes physical and mental well-being, reduces stress' },
    { title: 'Prosperity', description: 'Removes financial obstacles and brings material abundance' },
    { title: 'Peace of Mind', description: 'Calms the mind and removes negative emotions' },
    { title: 'Protection', description: 'Shields from negative energies and evil influences' },
    { title: 'Karma Cleansing', description: 'Helps resolve past karma and ancestral issues' },
    { title: 'Relationship Harmony', description: 'Brings peace and understanding in family relationships' },
    { title: 'Success', description: 'Removes obstacles in career and personal endeavors' }
  ],
  
  // Packages
  packages: [
    { name: 'Regular Rudrabhishekam', price: 1116, description: 'Single devotee/family' },
    { name: 'Maha Rudrabhishekam', price: 2116, description: '11 Brahmins chanting Rudram' },
    { name: 'Ati Rudrabhishekam', price: 5116, description: 'Special ceremony with multiple rounds' },
    { name: 'Laghu Rudram', price: 501, description: 'Simplified version for regular practice' }
  ],
  
  // Important notes
  importantNotes: [
    'Please arrive 15 minutes before the scheduled time',
    'Traditional attire is preferred (dhoti for men, saree for women)',
    'Observe fasting or light diet before the pooja if possible',
    'Bring flowers, fruits, or special offerings if desired (optional)',
    'Prasadam will be provided to all participants',
    'Photography during main rituals is not permitted'
  ],
  
  // Booking info
  bookingInfo: {
    text: 'You can book your Rudrabhishekam in advance by clicking the "Book Now" button below. Please provide your details including name, gotra (if known), and any specific sankalpa (wishes). Our priests will perform the ritual on your behalf at the sacred time.',
    closingText: 'Jai Shri Ram 🚩 Om Namah Shivaya 🔱'
  },
  
  // Sidebar data
  contact: {
    title: 'Contact Information',
    description: 'For booking and more details, please contact the temple office.',
    email: 'sitaramachandradevalayam@gmail.com'
  },
  mantra: {
    title: '🕉️ Mantra',
    sanskrit: 'ॐ नमः शिवाय',
    transliteration: 'Om Namah Shivaya',
    meaning: 'This five-syllable mantra is the most powerful Shiva mantra for meditation and peace.'
  },
  bestDays: {
    title: 'Best Days for Rudrabhishekam',
    days: [
      'Every Monday (Regular)',
      'Pradosh days (Special)',
      'Maha Shivaratri (Most Auspicious)',
      'Solar/Lunar Eclipse days',
      'Shravan month Mondays'
    ]
  }
}