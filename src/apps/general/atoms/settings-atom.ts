import { atom } from "@mongez/react-atom";

type Location = {
  lat: number;
  lng: number;
  address: string;
};

type Logo = {
  name: string;
  hash: string;
  mimeType: string;
  extension: string;
  size: number;
  url: string;
  id: string;
  width: number;
  height: number;
};

type General = {
  appName: string;
  description: string;
  logo: Logo;
  footerLogo: Logo;
  favIcon: Logo;
};

type Social = {
  facebook: string;
  twitter: string;
  youtube: string;
  instagram: string;
};

type Settings = {
  state: "initial" | "loading" | "loaded" | "failed";
  contact: {
    address: string;
    workingDays: string;
    phoneNumber: string;
    email: string;
    location: Location;
    locationUrl: string;
  };
  general: General;
  social: Social;
};

// const settingsCacheKey = "settings";

export const settingsAtom = atom<Settings>({
  key: "settings",
  // beforeUpdate(data) {
  //   cache.set(settingsCacheKey, data);
  //   return data;
  // },
  default: {
    state: "initial",
    // ...cache.get(settingsCacheKey, {
    general: {},
    contact: {},
    social: {},
    // }),
  } as Settings,
});
