import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../screens/Login';
import Console	from '../screens/Console';
import Settings from '../screens/Settings';

const HomeStack = createStackNavigator({
	Login: {
	screen: Login
},

Console: {
	screen: Console
},

Settings: {
	screen: Settings
}});

export default createAppContainer(HomeStack);
