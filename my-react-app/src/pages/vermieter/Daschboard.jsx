export default function Dashboard() {
    return (
        <div className="vermieter-dashboard">
            <h1>Vermieter Dashboard</h1>

            <ul>
                <li><a href="/vermieter/inserat-erstellen">Neues Inserat erstellen</a></li>
                <li><a href="/vermieter/inserate">Meine Inserate</a></li>
                <li><a href="/vermieter/buchungen">Buchungen</a></li>
            </ul>
        </div>
    );
}