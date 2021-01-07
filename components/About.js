import React from 'react';
import { Button } from 'react-native-paper';

const About = () => 
<Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
</Button>

export default About;