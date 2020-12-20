import { useState } from 'react';
import Cover from '../Cover/Cover';
import Info from '../Info/Info';

const Comic = ({ ...rest }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      class="relative overflow-hidden rounded-lg"
      data-selector="comic-wrapper"
    >
      <Cover {...rest} {...{ visible, setVisible }} />
      <Info {...rest} {...{ visible, setVisible }} />
    </div>
  );
};

export default Comic;
