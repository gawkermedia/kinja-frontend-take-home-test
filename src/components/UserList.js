// @flow
import * as React from 'react'
import styled from 'styled-components'

import type { Kinja$User } from '../api/profile'

import { UserItem } from './User'

type Props = {
    users: Array<Kinja$User>
}

export function UserList({ users }: Props): Array<React$Element<typeof UserItem>> {
    return users.map(user => <UserItem {...user} />)
}