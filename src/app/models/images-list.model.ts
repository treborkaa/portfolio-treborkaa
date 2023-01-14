export class Image {
	filename!: string;
	path!: string;
	alt!: string;
	tags!: string[];
	url_original!: string;
}

export const imagesList: Image[] = [
	// {
	// 	filename: 'COUCOU',
	// 	path: 'images/COUCOU.jpg',
	// 	alt: 'Ecureuil',
	// 	tag: ['architecture'],
	// },
	// {
	// 	filename: 'le_vole_bleu',
	// 	path: 'images/le_vole_bleu.jpg',
	// 	alt: 'Le vole bleu',
	// 	tag: ['architecture'],
	// },
	// {
	// 	filename: 'la_mouette_tendue',
	// 	path: 'images/la_mouette_tendue.jpg',
	// 	alt: 'La mouette tendue',
	// 	tag: ['architecture'],
	// },
	// {
	// 	filename: 'le_prof',
	// 	path: 'images/le_prof.jpg',
	// 	alt: 'Le prof',
	// 	tag: ['architecture'],
	// },
	// {
	// 	filename: 'l_emmerdeur',
	// 	path: 'images/l_emmerdeur.jpg',
	// 	alt: "L'emmerdeur",
	// 	tag: ['architecture'],
	// },
	// {
	// 	filename: 'l_arbre_en_foret',
	// 	path: 'https://live.staticflickr.com/65535/51865531476_a1e86fb9a8_h.jpg',
	// 	alt: "L'arbre de la forêt",
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'le_regard',
	// 	path: 'https://live.staticflickr.com/65535/51922807445_91ec53ee16_z.jpg',
	// 	alt: 'Le regard',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'couche_soleil',
	// 	path: 'https://live.staticflickr.com/65535/51910464578_51906f84a3_h.jpg',
	// 	alt: 'Le couché de soleil sur les toits de Paris',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'l_arbre_crochu',
	// 	path: 'https://live.staticflickr.com/65535/51865847509_0007cb3e52_k.jpg',
	// 	alt: "L'arbre crochu",
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'eiffel-tour_by_night',
	// 	path: 'https://live.staticflickr.com/65535/50398034657_524d6aa4c7_k.jpg',
	// 	alt: 'La tour Eiffel de nuit',
	// 	tags: ['architecture'],
	// },
	// // {
	// // 	filename: 'l_emmerdeur',
	// // 	path: 'images/l_emmerdeur.jpg',
	// // 	alt: "L'emmerdeur",
	// // 	tag: ['architecture'],
	// // },
	// {
	// 	filename: 'l_arbre_en_foret',
	// 	path: 'https://live.staticflickr.com/65535/51865531476_a1e86fb9a8_h.jpg',
	// 	alt: "L'arbre de la forêt",
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'le_regard',
	// 	path: 'https://live.staticflickr.com/65535/51922807445_91ec53ee16_z.jpg',
	// 	alt: 'Le regard',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'l_arbre_crochu',
	// 	path: 'https://live.staticflickr.com/65535/51865847509_0007cb3e52_k.jpg',
	// 	alt: "L'arbre crochu",
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'couche_soleil',
	// 	path: 'https://live.staticflickr.com/65535/51910464578_51906f84a3_h.jpg',
	// 	alt: 'Le couché de soleil sur les toits de Paris',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'couche_soleil',
	// 	path: 'https://live.staticflickr.com/65535/51910464578_51906f84a3_h.jpg',
	// 	alt: 'Le couché de soleil sur les toits de Paris',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'l_arbre_crochu',
	// 	path: 'https://live.staticflickr.com/65535/51865847509_0007cb3e52_k.jpg',
	// 	alt: "L'arbre crochu",
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'eiffel-tour_by_night',
	// 	path: 'https://live.staticflickr.com/65535/50398034657_524d6aa4c7_k.jpg',
	// 	alt: 'La tour Eiffel de nuit',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'couche_soleil',
	// 	path: 'https://live.staticflickr.com/65535/51910464578_51906f84a3_h.jpg',
	// 	alt: 'Le couché de soleil sur les toits de Paris',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'l_arbre_crochu',
	// 	path: 'https://live.staticflickr.com/65535/51865847509_0007cb3e52_k.jpg',
	// 	alt: "L'arbre crochu",
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'eiffel-tour_by_night',
	// 	path: 'https://live.staticflickr.com/65535/50398034657_524d6aa4c7_k.jpg',
	// 	alt: 'La tour Eiffel de nuit',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'eiffel-tour_by_night',
	// 	path: 'https://live.staticflickr.com/65535/50398034657_524d6aa4c7_k.jpg',
	// 	alt: 'La tour Eiffel de nuit',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'l_arbre_crochu',
	// 	path: 'https://live.staticflickr.com/65535/51865847509_0007cb3e52_k.jpg',
	// 	alt: "L'arbre crochu",
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'couche_soleil',
	// 	path: 'https://live.staticflickr.com/65535/51910464578_51906f84a3_h.jpg',
	// 	alt: 'Le couché de soleil sur les toits de Paris',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'l_arbre_crochu',
	// 	path: 'https://live.staticflickr.com/65535/51865847509_0007cb3e52_k.jpg',
	// 	alt: "L'arbre crochu",
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'couche_soleil',
	// 	path: 'https://live.staticflickr.com/65535/51910464578_51906f84a3_h.jpg',
	// 	alt: 'Le couché de soleil sur les toits de Paris',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'l_arbre_crochu',
	// 	path: 'https://live.staticflickr.com/65535/51865847509_0007cb3e52_k.jpg',
	// 	alt: "L'arbre crochu",
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'eiffel-tour_by_night',
	// 	path: 'https://live.staticflickr.com/65535/50398034657_524d6aa4c7_k.jpg',
	// 	alt: 'La tour Eiffel de nuit',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'eiffel-tour_by_night',
	// 	path: 'https://live.staticflickr.com/65535/50398034657_524d6aa4c7_k.jpg',
	// 	alt: 'La tour Eiffel de nuit',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'couche_soleil',
	// 	path: 'https://live.staticflickr.com/65535/51910464578_51906f84a3_h.jpg',
	// 	alt: 'Le couché de soleil sur les toits de Paris',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'l_arbre_crochu',
	// 	path: 'https://live.staticflickr.com/65535/51865847509_0007cb3e52_k.jpg',
	// 	alt: "L'arbre crochu",
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'eiffel-tour_by_night',
	// 	path: 'https://live.staticflickr.com/65535/50398034657_524d6aa4c7_k.jpg',
	// 	alt: 'La tour Eiffel de nuit',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'couche_soleil',
	// 	path: 'https://live.staticflickr.com/65535/51910464578_51906f84a3_h.jpg',
	// 	alt: 'Le couché de soleil sur les toits de Paris',
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'l_arbre_crochu',
	// 	path: 'https://live.staticflickr.com/65535/51865847509_0007cb3e52_k.jpg',
	// 	alt: "L'arbre crochu",
	// 	tags: ['architecture'],
	// },
	// {
	// 	filename: 'eiffel-tour_by_night',
	// 	path: 'https://live.staticflickr.com/65535/50398034657_524d6aa4c7_k.jpg',
	// 	alt: 'La tour Eiffel de nuit',
	// 	tags: ['architecture'],
	// },
];
