import React from "react";
import {
    Link,
    Navigate,
    Outlet,
    Route,
    Routes,
    useParams
} from "react-router-dom";

const users = [0, 1, 2, 3, 4];

function HomePage() {
    return (
        <>
            <h2>Home Page</h2>
        </>
    );
}

function UsersLayout() {
    return (
        <>
            <h2>Users Layout</h2>
            <p>
                <Link to="/">Home Page</Link>
            </p>
            <Outlet />
        </>
    );
}

function UsersList() {
    return (
        <>
            <h2>User List Page</h2>
            <ul>
                {users.map((uid) => (
                    <li key={uid}>
                        <Link to={`/users/${uid}`}>{`User ${uid}`}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

function UserProfilePage() {
    const { userId } = useParams();

    return (
        <>
            <h2>User Page</h2>
            <ul>
                <li>
                    <Link to="/users">Users List Page</Link>
                </li>
                <li>
                    <Link to={`/users/${userId}/edit`}>Edit this user</Link>
                </li>
            </ul>
            <p>{`userId: ${userId}`}</p>
        </>
    );
}

function UserEditPage() {
    const { userId } = useParams();

    return (
        <>
            <h2>Edit User Page</h2>
            <ul>
                <li>
                    <Link to={`/users/${userId}`}>User profile Page</Link>
                </li>
                <li>
                    <Link to={`/users/${Number(userId) + 1}`}>
                        Another User Page
                    </Link>
                </li>
                <li>
                    <Link to="/users">Users List Page</Link>
                </li>
            </ul>
        </>
    );
}

function App() {
    return (
        <>
            <h1>App Layout v6</h1>
            <Link to="/users">Users list Page</Link>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/users" element={<UsersLayout />}>
                    <Route index element={<UsersList />} />
                    <Route path=":userId">
                        <Route index element={<Navigate to={"profile"} />} />
                        <Route path="profile" element={<UserProfilePage />} />
                        <Route path="edit" element={<UserEditPage />} />
                        <Route path="*" element={<Navigate to={"profile"} />} />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App;
