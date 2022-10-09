import {Envelope, GithubLogo, LinkedinLogo, Flag} from "phosphor-react";

const Footer = function () {
    return (
        <footer className="flex justify-center pt-6 mt-52">
            <div className="flex flex-wrap">
                <a className="m-3 transition duration-500 hover:scale-125" href="https://ctftime.org/user/127095">
                    <Flag color={"white"} size={40}/>
                </a>
                <a className="m-3 transition duration-500 hover:scale-125" href="mailto:fred@windt.me">
                    <Envelope color={"white"} size={40}/>
                </a>
                <a className="m-3 transition duration-500 hover:scale-125"
                   href="https://www.linkedin.com/in/frederick-van-der-windt-072530184/">
                    <LinkedinLogo color={"white"} size={40}/>
                </a>
                <a className="m-3 transition duration-500 hover:scale-125" href="https://github.com/vanFrZy">
                    <GithubLogo color={"white"} size={40}/>
                </a>

            </div>
        </footer>);
}

export default Footer;
