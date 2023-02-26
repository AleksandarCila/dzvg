import { ServiceType } from "./types";

export type SluzbeObject = {
  opsta_medicina: ServiceType;
  zz_dece_zena_i_dentalna_medicina: ServiceType;
  radiologija_laboratorija_i_specijalisticka_delatnost: ServiceType;
  pravno_ekonomsko_tehnicka: ServiceType;
  [key: string]: ServiceType;
};

export const sluzbe: SluzbeObject = {
  opsta_medicina: {
    key: "opsta_medicina",
    name: "Служба за здравствену заштиту одраслог становништва са хитном медисинком помоћи, кућним лечењем и поливалентном патронажом",
    images: ["/images/sluzbe.jpg", "/images/sluzbe.jpg", "/images/sluzbe.jpg"],
    nacelnik: {
      name: "Др Недељко Васић",
      title: "Специјалиста опште медицине",
    },
    odgovorniTehnicar: {
      name: "Горан Бирташевић",
      title: "Високи струковни техничар",
    },
    phones: [
      {
        number: "194 или 012/662-591",
        type: "Хитно",
      },
      {
        number: "012/7160-705",
        type: "заказивање",
      },
      {
        number: "062/80-92-721",
        type: "заказивање",
      },
    ],
    izabraniLekari: [
      {
        name: "Др Недељко Васић",
        title: "спец. опште медицине",
      },
      {
        name: "Др Ненад Богићевић",
        title: "спец. опште медицине",
      },

      {
        name: "Др Биљана Петровић",
      },

      {
        name: "Др Ивана Вучић",
      },

      {
        name: "Др Марко Стојановић",
      },
      {
        name: "Др Елизабета Стевановић",
      },
      {
        name: "Др Данијела Јенић",
      },
      {
        name: "Др Лазар Милосављевић",
      },

      {
        name: "Др Стефан Животић",
      },

      {
        name: "Др Дејан Радивојевић",
        title: "на специјализацији",
      },

      {
        name: "Др Немања Миленковић",
        title: "на специјализацији",
      },

      {
        name: "Др Ивана Кутлешић",
        title: "привремено одсуство",
      },

      {
        name: "Др Нена Јовановић",
        title: "привремено одсуство",
      },
      {
        name: "Др Катарина Миладиновић",
        title: "привремено одсуство",
      },
    ],
    odeljenja: [],
  },
  zz_dece_zena_i_dentalna_medicina: {
    key: "zz_dece_zena_i_dentalna_medicina",
    name: "Служба за здравствену заштиту деце, школске деце, жена и зз из области денталне медицине",
    nacelnik: { name: "Др Виолета Недић ", title: "Специјалиста педијатрије" },
    odgovorniTehnicar: {
      name: "Слађана Ивковић ",
      title: "Медицински техничар",
    },
    images: ["/images/sluzbe.jpg", "/images/sluzbe.jpg", "/images/sluzbe.jpg"],
    phones: [],
    izabraniLekari: [],
    odeljenja: [
      {
        name: "Oдељење за здравствену заштиту деце и школске деце",
        phones: [
          {
            number: "012/7160-701",
            type: "фиксни ",
          },
          {
            number: "062/80-92-716",
            type: "мобилни",
          },
        ],
        lekari: [
          {
            name: "Др Виолета Недић",
            title: "спец. педијатрије",
          },
          {
            name: "Др Александар Недић",
            title: "спец. педијатрије",
          },

          {
            name: "Др Александра Арсић",
            title: "на специјализацији",
          },
        ],
      },
      {
        name: "Oдсек за здравствену заштиту жена",
        rukovodilac: {
          name: "Др Јелена Штрбац",
          title: "Специјалиста гинекологије и акушерства",
        },
        phones: [
          {
            type: "фиксни",
            number: "012/7160-708",
          },
          {
            type: "мобилни",
            number: "062/80-92-687",
          },
        ],
        lekari: [
          {
            name: "Др Јелена Штрбац",
            title: "спец. гинекологије и акушерства",
          },
          {
            name: "Др Драгана Богојевић",
            title: "спец. гинекологије и акушерства",
          },
        ],
      },
      {
        name: "Oдељење денталне медицине",
        rukovodilac: {name:"Др Миланка Петровић",title:""},
        phones: [
          {
            number: "012/7160-703",
            type: "фиксни",
          },
          {
            number: "062/80-92-659",
            type: "мобилни",
          },
        ],
        lekari: [
          {
            name: "Др Миланка Петровић",
          },
          {
            name: "Др Маријана Динић",
          },
          {
            name: "Др Ивана Петровић",
            title: "спец. дечије превентивне стоматологије",
          },
        ],
      },
    ],
  },

  radiologija_laboratorija_i_specijalisticka_delatnost: {
    key: "radiologija_laboratorija_i_specijalisticka_delatnost",
    name: "Служба за радиолошку и лабораторијску дијагностику и специјалистичко консултативну делатност",
    images: ["/images/sluzbe.jpg", "/images/sluzbe.jpg", "/images/sluzbe.jpg"],
    nacelnik: {name:"",title:""},
    odgovorniTehnicar: {name:"Никола Вуликић",title:"Лабораторијски техничар"},
    phones: [],
    izabraniLekari: [],
    odeljenja: [
      {
        name: "Oдељење лабораторијске дијагностике",
        rukovodilac: {name:"Др Маја Ивановић",title:"Специјалиста клиничке биохемије"},
        phones: [
          {
            type: "фиксни",
            number: "012/7160-702",
          },
          {
            type: "мобилни",
            number: "062/80-92-669",
          },
        ],
        lekari: [
          { name: "Др Маја Ивановић", title: "спец. клиничке биохемије" },
        ],
      },
      {
        name: "Oдељење специјалистичко-консултативне делатности",
        phones: [],
        lekari: [
          {
            name: "Др Љиљана Стевановић",
            title: "спец. ОРЛ",
            phone: "062/80-92-605",
          },
          {
            name: "Др Небојша Христовић",
            title: "спец. офталмологије",
            phone: "062/80-92-610",
          },
          {
            name: "Др Љиљана Ракић",
            title: "спец. физ.мед.",
            phone: "012/7160-711",
          },
          {
            name: "Др Мирослав Мирковић",
            title: "спец. инт.мед.",
            phone: "062/80-92-619 012/7160-706",
          },
          {
            name: "Др Снежана Познановић",
            title: "спец. инт. мед. - суб.спец. кардиологије",
            phone: "062/80-92-682",
          },
        ],
      },
      {
        name: "Oдсек за радиолошку дијагностику",
        rukovodilac: {name:"Др Оливера Радуловић",title:"Специјалиста радиологије"},
        phones: [
          {
            type: "фиксни",
            number: "012/7160-710",
          },
          {
            type: "мобилни",
            number: "062/80-92-668",
          },
        ],
        lekari: [
          {
            name: "Др Оливера Радуловић",
            title: "спец. радиологије",
          },
        ],
      },
    ],
  },
  pravno_ekonomsko_tehnicka: {
    key: "pravno_ekonomsko_tehnicka",
    name: "Служба за правне, економско-финансијске, техничке и друге сличне послове",
    nacelnik: {name:"Милан Баралић",title:""},
    images: ["/images/sluzbe.jpg", "/images/sluzbe.jpg", "/images/sluzbe.jpg"],
    phones: [
      {
        type: "фиксни",
        number: "012/7160-700",
      },
    ],
    izabraniLekari: [],
    odeljenja: [],
  },
};
