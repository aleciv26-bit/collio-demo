export type Experience = {
  id: string;
  kind: 'Degustazione' | 'Tour';
  name: string;
  price: number;
  description: string;
  image: string;
  highlights: string[];
  duration: string;
};

export const experiences: Experience[] = [
  {
    id: 'degustazione-classica',
    kind: 'Degustazione',
    name: 'Degustazione Classica',
    price: 20,
    description: '3 vini abbinati a un tagliere di prodotti locali.',
    image:
      'https://images.pexels.com/photos/8775391/pexels-photo-8775391.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    highlights: ['3 vini della casa', 'Tagliere di salumi e formaggi', 'Guida introduttiva al degusto'],
    duration: '45 min',
  },
  {
    id: 'riserva-collio',
    kind: 'Degustazione',
    name: 'Riserva Collio',
    price: 35,
    description: '5 vini riserva abbinati a prodotti tipici d’eccellenza.',
    image:
      'https://images.pexels.com/photos/8775200/pexels-photo-8775200.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    highlights: ['5 vini riserva selezionati', 'Abbinamenti tipici d’eccellenza', 'Sommelier dedicato'],
    duration: '1h 30m',
  },
  {
    id: 'tour-filari-cantina',
    kind: 'Tour',
    name: 'Tour Tra i Filari e la Cantina',
    price: 15,
    description: 'Passeggiata guidata tra le vigne e la barricaia con 1 calice finale (1h 15m).',
    image:
      'https://images.pexels.com/photos/9562295/pexels-photo-9562295.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    highlights: ['Passeggiata tra i filari', 'Visita alla barricaia', '1 calice finale incluso'],
    duration: '1h 15m',
  },
  {
    id: 'sommelier-experience',
    kind: 'Tour',
    name: 'Sommelier Experience',
    price: 40,
    description: 'Masterclass esclusiva con il Sommelier, 4 vini riserva e tagliere (2h).',
    image:
      'https://images.pexels.com/photos/4515528/pexels-photo-4515528.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    highlights: ['Masterclass con il Sommelier', '4 vini riserva', 'Tagliere gourmet incluso'],
    duration: '2h',
  },
];
