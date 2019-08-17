// @flow
import * as React from 'react'
import styled from 'styled-components'

import type { Kinja$User } from '../api/profile'

const UserContainer = styled.details`
    border-bottom: 1px solid #ccc;

    summary {
        padding: 15px;
        outline: none;

        :hover {
            background-color: #f1f1f1;
        }
    }
`

const DataGrid = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-gap: 15px;
    padding: 0 15px 15px;
`

const DataGridLabel = styled.div`
    color: #666;
`

type Props = Kinja$User

export function UserItem({ name, email, role }: Props) {
    return (
        <UserContainer key={name}>
            <summary>{name}</summary>
            <DataGrid>
                <DataGridLabel>E-mail:</DataGridLabel><div>{email}</div>
                <DataGridLabel>Role:</DataGridLabel><div>{role}</div>
            </DataGrid>
        </UserContainer>
    )
}
