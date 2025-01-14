import React from "react";
import glogo from "../asset/images/G.png"
import icp from "../asset/images/icp.png"
import dollar from "../asset/images/dollar.png"
import oc from "../asset/images/oc.jpeg"
import gf from "../asset/images/GF.jpeg"
import btc from "../asset/images/btc.png"
import usdt from "../asset/images/usdt.png"
import usdc from "../asset/images/usdc.png"
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className=" min-h-screen ">
            {/* Top Right Button */}
            <div className="absolute top-12 right-12">
                <Link className="px-6 py-3 text-lg font-bold  bg-green-600 rounded-lg hover:bg-green-500 transform transition duration-300 hover:scale-105" to="/deposit">
                    Go to G_app
                </Link>
            </div>

            {/* Centered Logo */}
            <div className="text-center mt-12">
                <img src={glogo} alt="G Finance Logo" className="w-1/3 mx-auto" />
                <img src={icp} alt="Internet Computer" className="w-16 mx-auto -mt-4" />
            </div>

            {/* About Section */}
            <div className="text-center mt-8">
                <h2 className="text-2xl font-bold">About G Finance</h2>
                <p className="mt-4 text-lg leading-relaxed px-4 md:px-0">
                    G Finance is a Decentralized Collateral Lending Platform built on the ICP blockchain. It enables users to lend and borrow crypto assets, offering permissionless lending, automated interest rates, and secure peer-to-peer transactions without intermediaries. We are also launching a governance token called <strong>$G</strong>.
                </p>
            </div>

            {/* OpenChat Community Button */}
            <div className="flex justify-center items-center mt-10">
                <img src={dollar} alt="Dollar" className="w-12 h-12 rounded-full mx-3" />
                <a
                    href="https://oc.app/community/4q2vw-6yaaa-aaaaf-bpexa-cai/channel/1332933619"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-lg font-bold bg-green-600 px-6 py-3 rounded-lg hover:bg-green-500 transform transition duration-300 hover:scale-105"
                >
                    <img src={oc} alt="OpenChat Logo" className="w-12 h-12 rounded-full mr-3" />
                    G_Givers OpenChat Community
                    <img src={gf} alt="G Finance" className="w-12 h-12 rounded-full ml-3" />
                </a>
                <img src={dollar} alt="Dollar" className="w-12 h-12 rounded-full mx-3" />
            </div>

            {/* Random Images Under OpenChat Button */}
            <div className="flex">

                <div className="flex justify-center mt-8 space-x-6">
                    <img src={btc} alt="Bitcoin" className="w-12 animate-bounce" />
                    <img src={usdt} alt="Tether" className="w-12 animate-bounce" />
                    <img src={usdc} alt="USD Coin" className="w-12 animate-bounce" />
                </div>

                {/* Powered by Internet Computer Badge */}
                <div className="fixed mt-10 left-1/2 transform -translate-x-1/2 flex items-center bg-opacity-90 px-4 py-2 rounded-lg">
                    <a
                        href="https://internetcomputer.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center font-bold"
                    >
                        <img src={icp} alt="Internet Computer" className="w-10 mr-2" />
                        Powered by Internet Computer
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
