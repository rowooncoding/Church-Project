import React, { useState } from 'react'
import {Text, View, Button} from 'react-native';

type CatPrpos = {
    name: string;
}

const Cat = (props: CatPrpos) => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Text>I am {props.name} and I am {isHungry ? 'Hungry' : 'Full'}!</Text>
            <Button
                onPress={() => {
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? 'Give me some food now' : 'Thanks'}
            />
        </View>
    );
};

export default Cat;
