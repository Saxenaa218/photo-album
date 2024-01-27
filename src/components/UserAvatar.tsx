import Avatar from "./Avatar";

type UserAvatarProps = {
  userName: string;
  email: string;
  onClick?: () => void;
};

const UserAvatar = (props: UserAvatarProps) => {
  const { userName, email, onClick } = props;
  return (
    <div
      className="p-5 hover:bg-blue-100 border border-blue-100 cursor-pointer flex flex-col gap-3 items-center rounded-md"
      onClick={onClick}
    >
      <Avatar nameInitials={userName[0].toUpperCase()} />
      <div className="text-center">
        <p>
          <b>{userName}</b>
        </p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserAvatar;
