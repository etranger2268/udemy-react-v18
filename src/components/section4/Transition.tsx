import { useMemo, useState } from 'react';
import Avatar from '@/components/section4/_components/Avatar';
import type { SelectedAssignee } from '@/components/section4/_type/selectedAssignee';
import { generateDummyTask } from '@/components/section4/_util/generateDummyTask';
import { MEMBER } from '@/components/section4/constants/member';

const Transition = () => {
  const [selectedAssignee, setSelectedAssignee] = useState<SelectedAssignee | null>(null);
  const tasks = useMemo(() => generateDummyTask(), []);
  const taskList =
    selectedAssignee === null
      ? tasks
      : tasks.filter(({ assignee }) => assignee === selectedAssignee);

  const handleClick = (member: SelectedAssignee) => setSelectedAssignee(member);

  return (
    <div className="text-center space-y-3">
      <h2 className="text-2xl font-bold text-gray-900">Transition</h2>
      <div className="flex justify-center gap-4">
        {Object.values(MEMBER).map((member) => (
          <Avatar
            key={member}
            member={member}
            onClick={handleClick}
            isSelected={selectedAssignee === member}
          >
            {member}
          </Avatar>
        ))}
      </div>
      <div>
        <button
          type="button"
          onClick={() => setSelectedAssignee(null)}
          className="py-2 px-4 text-sm font-semibold bg-blue-500 rounded-md text-white shadow transition-all duration-300 hover:opacity-75 "
        >
          reset
        </button>
      </div>
      <div className="space-y-2">
        {taskList.map((task) => (
          <div key={task.id} className="bg-blue-100">
            <p>タイトル: {task.title}</p>
            <p>担当: {task.assignee}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transition;
