let result = '0'
const moneyFooterlib={
   clickNumberPad : (e, $store) => {
    let value = e.$orig
    if (typeof value === "number"){
      value = JSON.stringify(value)
    }
    switch (value) {
      case "删除":
        if (result.length === 1){
          result = 0
        }else {
          result = result.substring(0,result.length-1)
        }
        return result;
      case '清零':
        result = '0'
        return result;
      case '.' :
        if (result.indexOf('.')===-1){
          result += value
        }
        if (result === '0'){
          result = '0.'
        }
        return result;
      case 'ok':
        $store.commit('updateAmount',parseFloat(result))
        return;
      case "0":
        if (result.indexOf("0")===0 && result.indexOf('.') === -1){
          return ;
        }else {
          result += value
        }
        return result;
      default:
        result += value
        if (result.indexOf('0')===0 && result.indexOf('.')!==1){ // 第一位为0，就删除它
          result = result.substring(1)
        }
        return result;
    }
  },
 resetAmount(){
     result = '0'
 }
}

export default moneyFooterlib