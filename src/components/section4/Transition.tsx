import { useDeferredValue, useMemo, useState, useTransition } from 'react';
import Avatar from '@/components/section4/_components/Avatar';
import TaskList from '@/components/section4/_components/TaskList';
import type { SelectedAssignee } from '@/components/section4/_type/selectedAssignee';
import { generateDummyTask } from '@/components/section4/_util/generateDummyTask';
import { MEMBER } from '@/components/section4/constants/member';

const tasks = generateDummyTask();

const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [selectedAssignee, setSelectedAssignee] = useState<SelectedAssignee | null>(null);
  const taskList = useMemo(
    () =>
      selectedAssignee === null
        ? tasks
        : tasks.filter(({ assignee }) => assignee === selectedAssignee),
    [selectedAssignee],
  );
  // const deferredTaskList = useDeferredValue(taskList);

  const handleClick = (member: SelectedAssignee) =>
    startTransition(() => setSelectedAssignee(member));

  return (
    <div className="text-center space-y-3">
      <h2 className="text-2xl font-bold text-gray-900">Transition</h2>
      <div className="flex justify-center gap-4">
        {Object.values(MEMBER).map((member) => (
          <Avatar
            key={member}
            member={member}
            onClick={handleClick}
            isPending={isPending}
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
          <TaskList key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Transition;
