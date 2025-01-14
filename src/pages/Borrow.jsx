import { useState } from "react";
import SingleStatCard from "../components/SingleStateCard";
// import ToggleButton from "../components/ToggleButton";
import CollateralInput from "../components/CollateralInput";
import SwapButton from "../components/SwapButton";
import Navbar from "../components/Navbar";

const Borrow = () => {
    const [selectedCollateral, setSelectedCollateral] = useState("ckUSDC");
    const [amount, setAmount] = useState(0);

    const handleDeposit = () => {
        alert("Borrow ckUSDC!");
    };

    return (
        <>
            <Navbar />
            <div className="md:h-screen h-auto p-4 md:px-20">
                {/* <ToggleButton /> */}
                <div className="flex justify-between">
                    <SingleStatCard title="Total Value Locked" value="$2.5M" />
                    <SingleStatCard title="Total Borrowed" value="$1.625M" />
                </div>
                <CollateralInput selectedCollateral={selectedCollateral} amount={amount} onAmountChange={setAmount} title="Borrow ckUSDC" />
                <SwapButton label="Borrow ckUSDC" onClick={handleDeposit} />
            </div>
        </>

    );
};

export default Borrow;
