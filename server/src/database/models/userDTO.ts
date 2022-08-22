import { AuthProviderType } from "./anth";

export type UserDTO = {
    userId: string;
    userName: string;
    email: string;
    providerType: AuthProviderType;
}