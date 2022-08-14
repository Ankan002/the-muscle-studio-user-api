export interface AdminSchema {
	name: string;
	email: string;
	password: string;
	emailConfirmed: boolean;
	role: "admin" | "trainer";
}
