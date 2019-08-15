// @flow

import { users } from '../data/users'

export type MembershipRole = 'freelancer' | 'author' | 'admin'

export type Kinja$User = {
    name: string,
    role: MembershipRole,
    email: string,
    verified: boolean
}

export function getUsers(): Promise<Array<Kinja$User>> {
    return Promise.resolve(users)
}