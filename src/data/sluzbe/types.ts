export type ServiceType = {
    key: string;
    name: string;
    images: string[];
    nacelnik: string;
    odgovorniTehnicar?: string;
    phones: { type: string; number: string }[];
    izabraniLekari: {
      name: string;
      title?: string;
    }[];
    odeljenja: {
      name: string;
      rukovodilac?: string;
      phones: { type: string; number: string }[];
      lekari: {
        name: string;
        title?: string;
        phone?:string,
      }[];
    }[];
  };