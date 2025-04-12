import { faker } from '@faker-js/faker';

interface User {
    name: string;
    email: string;
    phone: string;
    address: string;
}

export const user: User = {
    name: 'Natalia',
    email: 'mytest.111888@gmail.com',
    phone: '0123456789',
    address: '7101 Georgia Avenue Northwest, Washington, DC, USA',
};

export const randomUser: User = {
    name: faker.person.firstName('female'),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.city() + faker.location.buildingNumber(),
};
