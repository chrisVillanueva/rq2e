import { useState, memo, Fragment, useMemo } from 'react';

import { StepList } from '../step';
import useTask from './useTask';
import TaskHeader from './TaskHeader';
import TaskControls from './TaskControls';
import TaskProgress from './TaskProgress';

function Task({ id }) {
  const isExpanded = useTask(({ state: { expandedId } }) => expandedId === id);

  const [isEditable, setEditable] = useState(false);

  const cardId = useMemo(() => `card-${Math.random()}`, []);
  const titleId = useMemo(() => `title-${Math.random()}`, []);

  return (
    <li className="card" id={cardId} aria-labelledby={titleId}>
      <TaskHeader
        id={id}
        isEditable={isEditable}
        setEditable={setEditable}
        cardId={cardId}
        titleId={titleId}
      />
      {isExpanded && (
        <>
          <TaskControls
            id={id}
            isEditable={isEditable}
            setEditable={setEditable}
            />
          <StepList taskId={id} />
        </>
      )}
      <TaskProgress id={id} />
    </li>
  );
}

export default memo(Task);
