import * as React from 'react';
import * as test from 'tape';
import { shallow } from 'enzyme';

import Icon from 'components/Icon';

test('example', t => {
  const wrapper = shallow(<Icon />);
  t.isEqual('sup', wrapper.text());
  t.end();
});
