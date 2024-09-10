export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  address: {
    suite: string;
    street: string;
    city: string;
    zipcode: string;
  };
}
