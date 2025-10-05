export type Language = 'en' | 'de';

export const LanguageMap = {
  en: {
    countryCode: 'ie',
    advertisingPrintMenu: 'Advertising print',
    flyersMenu: 'Flyers & Leaflets',
    bookletsMenu: 'Booklets',
    // FlyersPage
    classicFlyers: 'Classic Flyers',
    ecoFlyers: 'Eco Flyers',
    halfFoldLeaflet: 'Half-Folded Leaflet',
    specialFinishingFlyers: 'Special Finishing Flyers',

    // HalfFoldedLeafletPage
    landscape: 'Landscape',
    mattAppearance: 'Matt Matt',
    doubleSidedFinishing: 'Double-sided Matte lamination',
    addToCart: 'Add to cart',
  },

  de: {
    countryCode: 'de',
    advertisingPrintMenu: 'Werbedruck',
    flyersMenu: 'Flyer',
    bookletsMenu: 'Broschüren',
    businessCardsMenu: '',

    // FlyersPage
    classicFlyers: 'Klassische Flyer',
    ecoFlyers: 'Nachhaltige Flyer',
    halfFoldLeaflet: 'Einbruchfalz (4 Seiten)',
    specialFinishingFlyers: 'Flyer mit exklusiver Veredelung',

    // HalfFoldedLeafletPage
    landscape: 'Landschaft',
    mattAppearance: 'Matt Matt',
    doubleSidedFinishing: 'Beidseitige matte Laminierung',
    addToCart: 'In den Warenkorb legen',
  },

};

