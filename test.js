/**
 * Created by zhf on 16/12/24.
 */
"use strict";

function blockBindingDemo(){
    let a = 123;
    var b = 123;
    if(true){
        let a = 456;
        b = 456;
        console.log("使用let语句块中的a为" +a);//456
        console.log("使用var语句块中的b为" +b)
    }
    console.log("使用let语句块外的a为" +a);//123
    console.log("使用var语句块外的b为" +b);//456

    var courses = ['hello','world'];
    console.log(courses.map(course => {
        return course.toUpperCase();
    }))
}

blockBindingDemo();