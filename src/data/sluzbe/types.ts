export type ServiceType = {
    key: string;
    name: string;
    images: string[];
    nacelnik: {name:string, title:string};
    odgovorniTehnicar?: {name:string, title:string};
    phones: { type: string; number: string }[];
    izabraniLekari: {
      name: string;
      title?: string;
    }[];
    odeljenja: {
      name: string;
      rukovodilac?: {name:string, title:string};
      phones: { type: string; number: string }[];
      lekari: {
        name: string;
        title?: string;
        phone?:string,
      }[];
    }[];
  };