import endpoint from "shared/endpoint";

export function editProfile(data: any) {
  return endpoint.put("/me", data);
}

/**
 * Change password
 */
export function changePassword(data: any) {
  return endpoint.patch("/change-password", data);
}
