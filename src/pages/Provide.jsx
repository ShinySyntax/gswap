import { useState } from "react";
import SingleStatCard from "../components/SingleStateCard";
// import ToggleButton from "../components/ToggleButton";
import Navbar from "../components/Navbar";

const Provide = () => {
    const [amount, setAmount] = useState("");

    const handleProvideLiquidity = () => {
        alert(`Providing liquidity: ${amount}`);
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
                <div className="bg-[#146f68] p-6 rounded-xl shadow-md w-full mt-5">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-white text-lg font-semibold">Provide Liquidity (ckUSDC)</h2>
                        <span className="text-white text-sm">Pool Utilization: 65%</span>
                    </div>

                    {/* Current APY and Position */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-[#11504c] p-4 rounded-xl">
                            <span className="block text-white text-sm">Current APY</span>
                            <span className="block text-white text-xl font-bold">8.2%</span>
                        </div>
                        <div className="bg-[#11504c] p-4 rounded-xl">
                            <span className="block text-white text-sm">Your Position</span>
                            <span className="block text-white text-xl font-bold">$0.00</span>
                        </div>
                    </div>

                    {/* Input Field */}
                    <div className="mb-8">
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Amount to provide"
                            className="w-full bg-[#11504c] text-white text-lg p-3 rounded-xl outline-none placeholder-white"
                        />
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleProvideLiquidity}
                        className="w-full bg-[#11504c] text-white text-lg font-medium py-3 rounded-md hover:opacity-90 transition"
                    >
                        Provide Liquidity
                    </button>
                </div>
            </div>
        </>
    );
};

export default Provide;
