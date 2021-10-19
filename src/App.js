import React, { useState, useEffect } from "react";
import axios from "axios";
import { groupsEndpoint, usersEndpoint } from "./constants/endpoints";
import { Container, Tabs, Tab, Alert } from "react-bootstrap";
import "./App.css";
import { Users } from "./components/Users";
import { ModalForm } from "./components/ModalForm";
import Groups from "./components/Groups";

function App() {
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    const [modal, setModal] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
        setTimeout(() => setError(""), 2000);
    }, [error]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(groupsEndpoint.get());
            setGroups(result.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(usersEndpoint.get());
            setUsers(result.data);
        };
        fetchData();
    }, []);

    const handleModalClose = () => setModal({ isShow: false });

    return (
        <Container>
            <Tabs
                defaultActiveKey="users"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="users" title="Users">
                    <Users
                        users={users}
                        setUsers={setUsers}
                        groups={groups}
                        setModal={setModal}
                        setError={setError}
                    />
                </Tab>
                <Tab eventKey="groups" title="Groups">
                    <Groups
                        groups={groups}
                        setGroups={setGroups}
                        setModal={setModal}
                        setError={setError}
                    />
                </Tab>
            </Tabs>
            <ModalForm onClose={handleModalClose} {...modal} />
            <Alert
                className={`error ${error ? "" : "hidden"}`}
                variant="danger"
            >
                {error}
            </Alert>
        </Container>
    );
}

export default App;
