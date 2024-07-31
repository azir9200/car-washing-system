// src/interfaces/IService.ts
export type TService = {
    name: string;
    description: string;
    price: number;
    duration: number; // Duration in minutes
    isDeleted: boolean;
}
