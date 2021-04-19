const ICON_NAMES = [
    'jack o lantern',
    'sign',
    'tree',
    'moon',
    'candles',
    'castle',
    'cauldron',
    'cauldron',
    'broom',
    'deathschyte',
    'cat mask',
    'frankenstein mask',
    'dracula mask',
    'demon mask',
    'skull mask',
    'moustache',
    'dracula',
    'skull glasses',
    'bat glasses',
    'cat eye',
    'witch hat',
    'party hat',
    'garland',
    'balloon',
    'flute',
    'teeth',
    'bandana',
    'trident',
    'knife',
    'coffin',
    'muffins',
    'pie',
    'pie',
    'bucket',
    'noodles',
    'wine',
    'potion',
    'eye jar',
    'cocktails',
    'cocktails',
    'magic book',
    'fireworks',
    'calendar',
    'calendar',
    'poster',
    'spider web',
    'candle',
    'tombstone',
    'tombstone',
    'crystal ball'
];

export const ICONS: Icon[] = ICON_NAMES.map((name, index) => ({
    id: ++index,
    url: './assets/lineal-color/' + index + '-' + name + '.svg',
    clicked: false
}));

export interface Icon {
    id: number;
    url: string;
    clicked: boolean;
}
