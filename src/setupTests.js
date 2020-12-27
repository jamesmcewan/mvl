import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import enzymeSerializer from 'enzyme-to-json/serializer'

expect.addSnapshotSerializer(enzymeSerializer)
enzyme.configure({ adapter: new Adapter() })
