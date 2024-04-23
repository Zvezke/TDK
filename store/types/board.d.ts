export interface Board {
  id: string;
  created_at: Date;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  email: string | null;
  street_with_number: string | null;
  postcode_and_city: string | null;
  title: string | null;
}
