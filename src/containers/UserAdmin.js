// @flow

import React, { useState } from 'react'
import styled from 'styled-components'

import { getUsers } from '../api/profile'

import { UserList } from '../components/UserList'

import type { Kinja$User } from '../api/profile'

const Loading = () => <p>Loading</p>

const UserListContainer = styled.section`
    width: 500px;
    border: 1px solid #ccc;
    margin: 0 auto;
`

const ListHeader = styled.header`
    background-color: #fafafa;
    color: #333;
    padding: 10px;
    h2 {
        margin: 0;
    }
`

const ListFooter = styled(ListHeader)`
    text-align: center;
`

type State = {
    users: Array<Kinja$User>
}

type Props = {}

export class UserAdmin extends React.Component<Props, State> {
    state = {
        users: []
    }

    constructor(props: Props) {
        super(props)
        getUsers().then(users => this.setState({ ...this.state, users }))
    }

    render() {
        const { users } = this.state

        return (
            <UserListContainer>
                <ListHeader>
                    <h2>Member List</h2>
                </ListHeader>
                {users.length ? <UserList users={users.slice(0, 10)} /> : <Loading />}
                <ListFooter>
                </ListFooter>
            </UserListContainer>
        )
    }
}