import { useAuthStore } from "@/context/authStore";

export default function RestrictedPage() {
    const { authenticated, user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
    };

    if (!authenticated || !user) {
        return null;
    }

    console.log(user, 55555);
    console.log(user.user, 8888)

    return (
        <div>
            <h1>Only for logged in users!! Hoorrayyy</h1>
            <p>Welcome, {user.user.name}!</p>
            <p>Your email: {user.user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
