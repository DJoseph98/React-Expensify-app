import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import dotenv from 'dotenv';

dotenv.config({
    path: '.env.test'
});

Enzyme.configure({
    adapter: new Adapter()
});