type StudentInfoProps = {
    name: string;
    course: string;
};

function StudentInfo({ name, course }: StudentInfoProps) {
    return (
        <div className="border border-gray-300 rounded-xl p-6 shadow-md bg-white w-64">
            <h2 className="text-xl font-bold text-black">
                {name}
            </h2>
            <p className="text-gray-600 mt-2">
                {course}
            </p>
        </div>
    );
}
export default StudentInfo;