import kth from "../Assets/education/kth.png";
import um from "../Assets/education/um.png";


const Study = function ({university, subject, degree, logo, graduation, gpa, homepage}) {
    return (
        <div className="max-w-md py-3 transition duration-500 hover:scale-105 hover:bg-indigo-700 rounded-lg border-2 border-gray-700 place-self-center self-stretch">
            <div className="px-5 flex items-center justify-between">
                <div>
                    <a href={homepage}>
                        <h4 className="mb-2 text-2xl font-bold text-purple-500">{university}</h4>
                    </a>
                    <h5 className="mb-2 text-xl font-medium text-white">{subject}</h5>
                    <p className="mb-2 text-xl font-medium text-white">{degree}</p>
                    <h5 className="mb-3 text-lg text-gray-400">Graduation {graduation}</h5>
                    <h5 className="mb-3 text-lg text-gray-400">Gpa: {gpa}</h5>
                </div>
                <img className="m-5 h-20" src={logo} alt=""/>
            </div>
        </div>
    );
};

const Education = function () {
    return (
        <div className="flex-col pt-9">
            <div className="text-center text-white text-4xl pb-3 font-medium">
                Education
            </div>
            <div
                className="p-6 grid grid-cols-2 m-auto max-w-6xl">
                <Study
                    university={"UM"}
                    subject={"Data Science and Artificial Intelligence"}
                    degree={"BSc"}
                    graduation={2021}
                    gpa={'8.2/10'}
                    logo={um}
                    homepage={"https://www.maastrichtuniversity.nl/"}
                />
                <Study
                    university={"KTH"}
                    subject={"Computer Science - Security and Privacy"}
                    degree={"MSc"}
                    graduation={'2023?'}
                    gpa={'N/A'}
                    logo={kth}
                    homepage={"https://www.kth.se/en"}
                />

            </div>
        </div>
    );
};

export default Education;
