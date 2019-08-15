// @flow
import * as React from 'react'
import styled from 'styled-components'

import type { Kinja$User } from '../api/profile'

const UserContainer = styled.details`
    border-bottom: 1px solid #fafafa;
    padding: 10px;
`

type Props = Kinja$User

export function UserItem({ name, email, role }: Props) {
    return (
        <UserContainer key={name}>
            <summary>{name}</summary>
            <ul>
                <li>email: {email}</li>
                <li>role: {role}</li>
            </ul>
        </UserContainer>
    )
}