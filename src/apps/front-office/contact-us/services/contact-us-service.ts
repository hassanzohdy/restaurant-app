import endpoint from "shared/endpoint";

export type Body = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function sendContactUsMessage(body: Body) {
  return endpoint.post("/contact-us", body);
}
