
interface ProfileCardProps {
  name: string;
  role: string;
  age: number;
}

function ProfileCard({ name, role, age }: ProfileCardProps) {
  return (
    <div className="border border-gray-300 rounded-xl p-6 shadow-md bg-white w-64">

      <h2 className="text-xl font-bold text-black">
        {name}
      </h2>

      <p className="text-gray-600 mt-2">
        {role}
      </p>

      <p className="text-gray-500 mt-2">
        Age: {age}
      </p>

    </div>
  );
}

export default ProfileCard;
