export interface FullName {
  first: string,
  last: string,
}

export interface Transaction {
  _id: string,
  amount: string,
  type: string,
  name: FullName,
  company: string,
  email: string,
  phone: string,
  address: string,
}

export interface ListItem {
  name: string;
  acount: string;
}
