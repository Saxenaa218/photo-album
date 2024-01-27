const Avatar = ({ nameInitials }: { nameInitials: string }) => {
  return (
    <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex justify-center items-center">
      {nameInitials}
    </div>
  );
};

export default Avatar;
