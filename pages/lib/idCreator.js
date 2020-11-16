let n = uni.getStorage({
  key:'maxId',
  success(res) {
    return res
  }
}) || 0

const IdCreator = () => {
  n += 1
  uni.setStorage({key: 'maxId', data: n})
  return n
}

export default IdCreator