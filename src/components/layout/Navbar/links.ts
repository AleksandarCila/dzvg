import { sluzbe } from "@/data";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  parent?: boolean;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Насловна",
    href: "/",
  },
  {
    label: "Службе",
    children: [
      {
        label: sluzbe.opsta_medicina.name,
        href: `/sluzbe/${sluzbe.opsta_medicina.key}`,
      },
      {
        label: sluzbe.zz_dece_zena_i_dentalna_medicina.name,
        href: `/sluzbe/${sluzbe.zz_dece_zena_i_dentalna_medicina.key}`,
      },
      {
        label: sluzbe.radiologija_laboratorija_i_specijalisticka_delatnost.name,
        href: `/sluzbe/${sluzbe.radiologija_laboratorija_i_specijalisticka_delatnost.key}`,
      },
      {
        label: sluzbe.pravno_ekonomsko_tehnicka.name,
        href: `/sluzbe/${sluzbe.pravno_ekonomsko_tehnicka.key}`,
      },
    ],
  },
  {
    label: "О нама",
    href: "/o_nama",
  },
  { label: "Огласна табла", href: "/oglasna_tabla", parent: true },
  {
    label: "Остало",
    children: [
      {
        label: "Телефонски именик",
        href: "/telefonski_imenik",
      },
      {
        label: "Радно време",
        href: "/radno_vreme",
      },
      {
        label: "Провера изабраног лекара",
        href: "/izabrani_lekar",
      },
      {
        label: "Календар здравља",
        href: "/kalendar_zdravlja",
      },
      {
        label: "Документи",
        href: "/dokumenti",
      },
      {
        label: "Информације",
        href: "/informacije",
      },
    ],
  },
];
