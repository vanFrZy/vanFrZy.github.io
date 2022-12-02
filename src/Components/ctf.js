import rr from "../Assets/CaptureTheFlag/rr.png";

const Team = function ({teamname, logo, homepage, ctftime}) {
    return (
        <div className="max-w-md py-3 transition duration-500 hover:bg-indigo-700 hover:scale-105 rounded-lg border-2 border-gray-700 place-self-center">
            <div className="px-5 flex items-center">
                <div >
                    <a href={`https://${homepage}`}>
                        <h4 className="mb-2 text-2xl font-bold text-purple-500">{teamname}</h4>
                    </a>
                    <p/>
                    <a href={`https://ctftime.org/team/${ctftime}`}>
                        <h5 className="mb-2 text-xl font-medium text-purple-300">CtfTime</h5>
                    </a>
                </div>
                <img className="m-5 h-20" src={logo} alt=""/>
            </div>
        </div>
    );
};

const Ctf = function () {
    return (
        <div className="flex-col pt-9">
            <div className="text-center text-white text-4xl pb-3 font-medium">
                Capture The Flag Teams
            </div>
            <div
                className="p-6 grid grid-cols-1 sm:grid-cols-1 sm:p-6 md:grid-cols-2 m-auto max-w-6xl">
                <Team
                    teamname={"RoyalRoppers"}
                    logo={rr}
                    homepage={"royalroppers.team"}
                    ctftime={"176008"}
                />
                <Team
                    teamname={"LetzPwn"}
                    logo={"https://letzpwn.com/assets/images/logo.png"}
                    homepage={"letzpwn.com"}
                    ctftime={"78388"}
                />

            </div>
        </div>
    );
};

export default Ctf;
