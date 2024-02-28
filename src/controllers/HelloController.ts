import { Request, Response } from 'express'

const Users = [{
    id: 1,
    name: 'doe',
    firstname: 'john',
    phoneNumber: '1234567890',
    mail: 'john@doe.com',
    role: 'intervenant'
},{
    id: 2,
    name: 'toe',
    firstname: 'jane',
    phoneNumber: '0987654321',
    mail: 'jane@toe.com',
    role: 'intervenant',
},{
    id: 3,
    name: 'bower',
    firstname: 'jack',
    phoneNumber: '6789012345',
    mail: 'jack@bower.com',
    role: 'manager',
}];

export const getHello = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello World!' });
}

export const getCompany = (req: Request, res: Response) => {
    const users = Users.filter(user => user.role === 'intervenant');
    res.status(200).json(users);
}