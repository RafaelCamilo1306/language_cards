import { useState } from "react";
import CardContent from "../Components/Card";

function Dashboard(){
    const[showDailyWord, setShowCard] = useState(true);

    return(
    <>
        <h1> Dashboard</h1>

        {showDailyWord && <CardContent onclose={() => setShowCard(false)}/>}
    </>);
}

export default Dashboard;