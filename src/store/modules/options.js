const state={
    options:[],  //初始化一个colects数组
    changableNum:0
};
const getters={
  renderOptions(state){ //承载变化的options
    return state.options;
  },
  getChangedNum(){  //承载变化的changebleNum的值
    return state.changableNum
 }
};
const mutations={
     pushOptions(state,items){ //如何变化options,插入items
        state.options.push(items)
     },
     newNum(state,sum){ //同上，这里面的参数除了state之外还传了需要增加的值sum
        state.changableNum+=sum;
     }
 };
const actions={
    invokePushItems(context,item){ //触发mutations里面的pushOptions ,传入数据形参item 对应到items
        context.commit('pushOptions',item);
    },
    getNewNum(context,num){   //同上注释，num为要变化的形参
        context.commit('newNum',num)
     }
};
export default {
     namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
     state,
     getters,
     mutations,
     actions
}