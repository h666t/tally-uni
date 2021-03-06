import dayjs from "dayjs"

let result = '0'
const moneyFooterlib = {
  clickNumberPad: (e, $store) => {
    let value = e.$orig
    if (typeof value === "number") {
      value = JSON.stringify(value)
    }
    switch (value) {
      case "删除":
        if (result.length === 1) {
          result = 0
        } else {
          result = result.substring(0, result.length - 1)
        }
        return result;
      case '清零':
        result = '0'
        return result;
      case '.' :
        if (result.indexOf('.') === -1) {
          result += value
        }
        if (result === '0') {
          result = '0.'
        }
        return result;
      case 'ok':
        result = 0
        if ($store.state.beSelectedTags.length === 0){
          uni.showModal({
            title:'请至少选择一个标签'
          })
          return ;
        }
        $store.commit('updateDataList', {
          type: $store.state.type,
          amount: $store.state.amount,
          date: $store.state.date,
          beSelectedTags: $store.state.beSelectedTags,
        })
        $store.commit('updateAmount', 0)
        $store.commit('updateType','支出')
        $store.commit('updateBeSelectedTags',[])
        $store.commit('updateDate',dayjs().format('YYYY-MM-DD'))
        return result;
      case "0":
        if (result.indexOf("0") === 0 && result.indexOf('.') === -1) {
          return;
        } else {
          result += value
        }
        return result;
      default:
        result += value
        if (result.indexOf('0') === 0 && result.indexOf('.') !== 1) { // 第一位为0，就删除它
          result = result.substring(1)
        }
        return result;
    }
  },
  resetAmount() {
    result = '0'
  },
  fetchSpecialDateAmount(type,date,$store){
    const {dataList} = $store.state
    let amount = 0
    for (let i = 0; i < dataList.length; i++){
      if (dataList[i].date.indexOf(date) >= 0 && dataList[i].type === type){
        amount += dataList[i].amount
      }
    }
    return amount
  },
  fetchSpecialDateDataList(type,date,$store){
    const {dataList} = $store.state
    const result = []
    for (let i = 0; i < dataList.length; i++){
    if (dataList[i].date.indexOf(date) >= 0 && dataList[i].type === type){
      result.push(dataList[i])
    }}
    return result
  }
}

export default moneyFooterlib