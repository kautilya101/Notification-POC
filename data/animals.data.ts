import { IAnimals } from "@/types/animals.types";

const animals: IAnimals[] = [
  {
    id: '1',
    name: 'Luna',
    type: 'Dog',
    breed: 'Golden Retriever',
    owner: 'Happy Paws Shelter',
    ownerId: 'shelter001',
    description: 'Luna is a gentle and loving Golden Retriever who adores children and other pets. She enjoys long walks, playing fetch, and cuddling on the couch. Luna is house-trained, knows basic commands, and would make a perfect family companion.',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Whiskers',
    type: 'Cat',
    breed: 'Maine Coon',
    owner: 'Feline Friends Rescue',
    ownerId: 'shelter002',
    description: 'Whiskers is a majestic Maine Coon with a calm and affectionate personality. He loves being brushed, enjoys window watching, and gets along well with other cats. This gentle giant is looking for a quiet home where he can be loved and pampered.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Buddy',
    type: 'Dog',
    breed: 'Labrador Mix',
    owner: 'Second Chance Animal Sanctuary',
    ownerId: 'shelter003',
    description: 'Buddy is an energetic young pup who loves to play and learn new tricks. He\'s great with kids and has a friendly disposition towards everyone he meets. Buddy would thrive in an active household that can provide him with plenty of exercise and mental stimulation.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    name: 'Mittens',
    type: 'Cat',
    breed: 'Domestic Shorthair',
    owner: 'City Animal Shelter',
    ownerId: 'shelter004',
    description: 'Mittens is a sweet senior lady who enjoys the simple pleasures in life - sunny windowsills, gentle pets, and cozy naps. She\'s perfect for someone looking for a calm, low-maintenance companion who will provide years of quiet love and companionship.',
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop'
  },
  {
    id: '5',
    name: 'Charlie',
    type: 'Rabbit',
    breed: 'Holland Lop',
    owner: 'Small Animal Rescue Network',
    ownerId: 'shelter005',
    description: 'Charlie is an adorable Holland Lop bunny with soft, floppy ears and a playful personality. He enjoys hopping around, nibbling on fresh vegetables, and being gently petted. Charlie needs an indoor home with plenty of space to explore and a family who understands rabbit care.',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop'
  }
];

export default animals;