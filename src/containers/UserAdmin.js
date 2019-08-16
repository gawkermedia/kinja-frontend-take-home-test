// @flow

import React, { useState } from 'react'
import styled from 'styled-components'

import logo from '../assets/keki.png'

import { getUsers } from '../api/profile'

import { UserList } from '../components/UserList'

import type { Kinja$User } from '../api/profile'

const Loading = () => <p>Loading</p>


const UserListContainer = styled.section`
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 30px;
`

const ListHeader = styled.header`
    color: #222;
    padding: 30px 15px 15px;
    h2 {
        margin: 0;
    }
`

const AdminHeader = styled.header`
    margin: 0;
    height: 67px;
    padding: 10px;
    background: url('${logo}') left 10px center no-repeat #222;
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
            <>
                <AdminHeader />
                <UserListContainer>
                    <ListHeader>
                        <h2>Users</h2>
                    </ListHeader>
                    {users.length ? <UserList users={users.slice(0, 10)} /> : <Loading />}
                    <ListFooter>
                    </ListFooter>
                </UserListContainer>
            </>
        )
    }
}
