import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enzymeSerializer from 'enzyme-to-json/serializer';
import 'jest-styled-components';

expect.addSnapshotSerializer(enzymeSerializer);
enzyme.configure({ adapter: new Adapter() });
global.fetch = require('jest-fetch-mock');
