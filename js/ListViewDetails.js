/**
 * Created by zhf on 16/12/1.
 */
"use static"
var React = require('react-native'); // 引用React库
var {
    Component,
    }=React;

class ListViewDetails extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <ScrollView>
                <View style={styles.viewStyle}>
                     <View style={styles.viewStyle}>
                         <image style={{flex:1}} source={'../icon/ic_launcher'}></image>
                         <Text style={{flex:2}}>测试一下</Text>
                     </View>


                </View>
            </ScrollView>
        );
    }


}
const styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:'white'
    },

})