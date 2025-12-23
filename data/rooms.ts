
import { Room } from '../types';

export const rooms: Room[] = [
  {
    id: 'balmer',
    slug: 'balmer',
    title: 'Chambre Balmer',
    subtitle: 'Lumière et sérénité',
    price: 50000,
    size: '25 m²',
    capacity: '2 Personnes',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07ded898-aa0d-4eca-8708-2142bb7f6177_1600w.png',
    gallery: [
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07ded898-aa0d-4eca-8708-2142bb7f6177_1600w.png',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a7c6f1f-3b40-45d9-a951-4fb02ecf361a_800w.jpg'
    ],
    description: "Baignée de lumière naturelle, la Chambre Balmer offre un refuge apaisant avec ses tons clairs et ses matériaux nobles. Idéale pour un séjour d'affaires ou une escapade en couple, elle dispose d'un espace de travail ergonomique et d'une salle de bain moderne avec douche à l'italienne. La décoration minimaliste met en valeur l'artisanat local avec subtilité.",
    amenities: [
      'Lit king-size',
      'Climatisation',
      'Télévision à écran plat',
      'Wi-Fi',
      'Douche à l’italienne',
      'Plateau café / thé',
      'Rangements',
      'Balcon',
      'Terrasse'
    ],
    features: [
      { icon: 'Waves', label: 'Vue Jardin' },
      { icon: 'Monitor', label: 'Espace Bureau' }
    ],
    details: {
      installations: [
        'Parking intérieur',
        'Sécurité 24h/24',
        'Vue sur la piscine'
      ],
      options: [
        'Petit-déjeuner',
        'Location de véhicule',
        'Location d’espace'
      ],
      important: [
        'Arrivée : 14h',
        'Départ : 11h',
        'Chambres non-fumeur',
        'Animaux non autorisés',
        'Horaires de la piscine : 08h00 – 20h00 (réservée aux clients)',
        'Accès à la plage : env. 10 min à pied ou 3 min en voiture',
        'Aéroport le plus proche : env. 10 min en voiture'
      ]
    }
  },
  {
    id: 'mangrove',
    slug: 'mangrove',
    title: 'Chambre Mangrove',
    subtitle: 'Évasion Tropicale',
    price: 50000,
    size: '28 m²',
    capacity: '2 Personnes',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fca79aba-8e11-42bb-a18d-abe0260c7c92_1600w.jpg',
    gallery: [
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fca79aba-8e11-42bb-a18d-abe0260c7c92_1600w.jpg'
    ],
    description: "Inspirée par la végétation luxuriante de San Pedro, la Chambre Mangrove s'ouvre sur une vue imprenable du jardin tropical. Les teintes vertes et boisées créent une atmosphère de sérénité absolue. Profitez d'un confort supérieur avec une literie King Size et un coin lecture cosy pour vos moments de détente après une journée à la plage.",
    amenities: [
      'Lit king-size',
      'Climatisation',
      'Télévision à écran plat',
      'Wi-Fi',
      'Douche à l’italienne',
      'Plateau café / thé',
      'Rangements',
      'Balcon',
      'Terrasse'
    ],
    features: [
      { icon: 'Trees', label: 'Côté Jardin' },
      { icon: 'Wind', label: 'Calme Absolu' }
    ],
    details: {
      installations: [
        'Parking intérieur',
        'Sécurité 24h/24',
        'Vue sur la piscine'
      ],
      options: [
        'Petit-déjeuner',
        'Location de véhicule',
        'Location d’espace pour événements'
      ],
      important: [
        'Arrivée (check-in) : 14h',
        'Départ (check-out) : 11h',
        'Chambres non-fumeurs',
        'Animaux non autorisés',
        'Horaires de la piscine : 08h00 – 20h00 (réservée aux clients)',
        'Accès à la plage : environ 10 min à pied ou 3 min en voiture',
        'Aéroport le plus proche : environ 10 min en voiture'
      ]
    }
  },
  {
    id: 'kroumen',
    slug: 'kroumen',
    title: 'Chambre Kroumen',
    subtitle: 'Héritage Culturel',
    price: 60000,
    size: '25 m²',
    capacity: '2 Personnes',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/951efe50-9424-4c9d-bb26-8f9c71f7af77_1600w.jpg',
    gallery: [
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/951efe50-9424-4c9d-bb26-8f9c71f7af77_1600w.jpg',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53a55ec7-2852-4749-8083-f36894c264cc.png',
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/404d5573-0495-46f3-a75d-6c17f7d1fdf8.png'
    ],
    description: "Hommage à la culture locale, la Chambre Kroumen se distingue par sa décoration authentique intégrant des motifs traditionnels et des bois précieux. Chaleureuse et accueillante, elle offre tout le confort moderne tout en vous plongeant dans l'âme de la région. Un choix parfait pour les voyageurs en quête d'authenticité.",
    amenities: [
      'Lit king-size',
      'Climatisation',
      'Télévision à écran plat',
      'Wi-Fi',
      'Douche à l’italienne',
      'Plateau café / thé',
      'Espace de rangement / placard',
      'Balcon',
      'Terrasse'
    ],
    features: [
      { icon: 'Shield', label: 'Authentique' },
      { icon: 'Sun', label: 'Lumineuse' }
    ],
    details: {
      installations: [
        'Parking intérieur',
        'Sécurité 24h/24 et 7j/7',
        'Vue sur la piscine'
      ],
      options: [
        'Petit-déjeuner',
        'Location de véhicule',
        'Location d’espace pour événements'
      ],
      important: [
        'Check-in : 14h',
        'Check-out : 11h',
        'Chambres non-fumeurs',
        'Animaux non autorisés',
        'Horaires de la piscine : 08h00 – 20h00 (réservée aux clients)',
        'Accès à la plage : environ 10 minutes à pied ou 3 minutes en voiture',
        'Aéroport le plus proche : environ 10 minutes en voiture'
      ]
    }
  },
  {
    id: 'ebene',
    slug: 'ebene',
    title: 'Chambre Ébène',
    subtitle: 'Élégance Intemporelle',
    price: 50000,
    size: '30 m²',
    capacity: '2 Personnes',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89d51d40-a72d-438c-a5a1-24a776b16f61_800w.jpg',
    gallery: [
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89d51d40-a72d-438c-a5a1-24a776b16f61_800w.jpg'
    ],
    description: "L'élégance à l'état pur. La Chambre Ébène joue sur les contrastes with un mobilier en bois sombre et des textiles clairs de haute qualité. Plus spacieuse, elle offre une ambiance feutrée et sophistiquée, idéale pour se ressourcer. La salle de bain spacieuse est équipée de produits d'accueil premium.",
    amenities: [
      'Lit KING SIZE',
      'Climatisation',
      'Télévision écran plat',
      'Wi-Fi',
      'Douche à l’italienne',
      'Plateau café/thé',
      'Rangements',
      'Balcon',
      'Terrasse'
    ],
    features: [
      { icon: 'Crown', label: 'Prestige' },
      { icon: 'Maximize', label: 'Plus spacieuse' }
    ],
    details: {
      installations: [
        'Parking intérieur',
        'Sécurité 24 h/24',
        'Vue sur la piscine'
      ],
      options: [
        'Petit-déjeuner',
        'Location de véhicule',
        'Location d’espace'
      ],
      important: [
        'Arrivée : 14 h',
        'Départ : 11 h',
        'Chambres non-fumeur',
        'Animaux non autorisés',
        'Horaires de la piscine : 08 h00 – 20 h00 (réservée à la clientèle)',
        'Accès à la plage : environ 10 min à pied ou 3 min en voiture',
        'Aéroport le plus proche : environ 10 min en voiture'
      ]
    }
  },
  {
    id: 'suite',
    slug: 'suite',
    title: 'Suite Junior',
    subtitle: 'Le Luxe d\'Espace',
    price: 70000,
    size: '45 m²',
    capacity: '2-3 Personnes',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f844aa6f-6087-4155-b5be-7a1ca79c0c56_1600w.jpg',
    gallery: [
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f844aa6f-6087-4155-b5be-7a1ca79c0c56_1600w.jpg'
    ],
    description: "Cette suite offre tout le confort et l’équipement des chambres doubles, avec en plus un espace salon et une cuisine américaine, ce qui la rend adaptée à un séjour autonome et plus confortable.",
    amenities: [
      'Lit KING SIZE',
      'Climatisation',
      'Télévision à écran plat',
      'Wi-Fi',
      'Douche à l’italienne',
      'Plateau café/thé',
      'Rangements',
      'Balcon',
      'Sièges de balcon',
      'Petit salon',
      'Petite cuisine',
      'Réfrigérateur'
    ],
    features: [
      { icon: 'Layout', label: 'Salon Séparé' },
      { icon: 'ShoppingBag', label: 'Cuisine équipée' }
    ],
    details: {
      installations: [
        'Parking intérieur',
        'Sécurité 24 h/24',
        'Vue sur la piscine'
      ],
      options: [
        'Petit-déjeuner',
        'Location de véhicule',
        'Location d’espace'
      ],
      important: [
        'Arrivée : 14 h',
        'Départ : 11 h',
        'Chambres non-fumeur',
        'Animaux non autorisés',
        'Horaires de la piscine : 08 h00 – 20 h00 (réservée à la clientèle)',
        'Accès à la plage : environ 10 min à pied ou 3 min en voiture',
        'Aéroport le plus proche : environ 10 min en voiture'
      ]
    }
  },
  {
    id: 'bungalow',
    slug: 'bungalow',
    title: 'Bungalow Privatif',
    subtitle: 'Sanctuaire d\'Exclusivité',
    price: 120000,
    size: '60 m²',
    capacity: '2-4 Personnes',
    image: '/assets/bungalow/bungalow-1.jpg',
    gallery: [
      '/assets/bungalow/bungalow-1.jpg',
      '/assets/bungalow/bungalow-2.png',
      '/assets/bungalow/bungalow-3.png',
      '/assets/bungalow/bungalow-4.png',
      '/assets/bungalow/bungalow-5.png',
      '/assets/bungalow/bungalow-6.jpg',
      '/assets/bungalow/bungalow-7.jpg',
      '/assets/bungalow/bungalow-8.jpg'
    ],
    description: "Le bungalow privatif est pensé comme une petite maison indépendante au sein de la guesthouse, idéale pour des séjours en famille ou entre amis avec plus d’intimité et d’espace.",
    amenities: [
      'Lit KING SIZE',
      'Deux canapés-lits',
      'Télévision à écran plat',
      'Wi-Fi',
      'Climatisation',
      'Douche à l’italienne',
      'Rangements',
      'Armoire ou penderie',
      'Plateau café/thé',
      'Cuisine équipée',
      'Électroménager',
      'Balcon/Terrasse',
      'Mobilier extérieur',
      'Coin repas',
      'Petit jardin'
    ],
    features: [
      { icon: 'Home', label: 'Indépendant' },
      { icon: 'Trees', label: 'Jardin Privatif' }
    ],
    details: {
      installations: [
        'Parking intérieur',
        'Sécurité 24 h/24',
        'Vue sur la piscine'
      ],
      options: [
        'Petit-déjeuner',
        'Location de véhicule',
        'Location d’espace'
      ],
      important: [
        'Arrivée : 14 h',
        'Départ : 11 h',
        'Non-fumeur',
        'Animaux non autorisés',
        'Horaires de la piscine : 08 h00 – 20 h00 (réservée à la clientèle)',
        'Accès à la plage : environ 10 min à pied ou 3 min en voiture',
        'Aéroport le plus proche : environ 10 min en voiture'
      ]
    }
  }
];
