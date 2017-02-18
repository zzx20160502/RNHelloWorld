import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const {width} = Dimensions.get('window')


class SwiperView extends Component {
    render() {
        return (
            <View>
                <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} height={240}
                        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                        dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                        activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                        paginationStyle={{
            bottom: -23, left: null, right: 10
          }} loop={false}>
                    {this._renderItem()}

                </Swiper>
            </View>
        )
    }

    _itemOnclick(str) {
        alert('测试一下'+str);
    }

    _renderItem() {
        var itemArr = [];
        for (var i = 0; i <= 10; i++) {
            itemArr.push(
                    <View style={styles.slide} >
                        <Image resizeMode='stretch' style={styles.image} source={require('./img/4.jpg')}/>
                    </View>
            )
        }
        return itemArr;
    }
}

const styles = {
    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        flex: 1
    }
}
export default  SwiperView;

