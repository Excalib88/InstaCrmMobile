import React from 'react';
import { BottomNavigation} from 'react-native-paper';
import Product from './Product';
import About from './About';

const Main = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'product', title: 'Product', icon: 'home' },
      { key: 'about', title: 'About', icon: 'account' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      product: Product,
      about: About,
    });
  
    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    );
  };


export default Main;