import { read } from 'fs';
import { createUserByUuid , readUsers} from '../services/UserService';
import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {
    const body = req.body;

    const uuid = body.uuid;

    const newUser = await createUserByUuid(uuid);

    res.status(200).json(newUser);
};
export const getUsers = async (req: Request, res: Response) => {
    const users = await readUsers();
    res.status(200).json(users);
};