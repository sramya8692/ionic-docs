export interface Link {
  text: string;
  href: string;
}

export interface ReferenceKeys {
  Head: (item: any) => any;
  [key: string]: (item: any) => any;
}

export interface MenuItems {
  [key: string]: string | MenuItems;
}
