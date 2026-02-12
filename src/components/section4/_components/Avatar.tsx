import type { SelectedAssignee } from '@/components/section4/_type/selectedAssignee';

type AvatarProps = {
  onClick: (member: SelectedAssignee) => void;
  member: SelectedAssignee;
  isSelected?: boolean;
  isPending: boolean;
  children: React.ReactNode;
};

const Avatar = ({ onClick, isSelected = false, member, isPending, children }: AvatarProps) => {
  return (
    <button
      type="button"
      onClick={() => onClick(member)}
      className={`flex justify-center items-center size-7.5 border rounded-full text-sm font-semibold select-none ${isPending ? 'opacity-50' : 'opacity-100'} ${isSelected ? 'bg-green-500 text-white' : 'text-black'}`}
    >
      {children}
    </button>
  );
};

export default Avatar;
