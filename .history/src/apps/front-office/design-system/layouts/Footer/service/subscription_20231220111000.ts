import endpoint from "shared/endpoint";

export default function subscription(email: string) {
  return endpoint.post("/newsletter/subscribeToNewsletter", email);
}
