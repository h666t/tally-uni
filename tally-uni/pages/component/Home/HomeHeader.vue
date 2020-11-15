<template>
  <view class="parent">
    <view class="wrapper">
      <view class="inputAndOutput">
        <view class="input">
          <text class="text">本月支出：</text>
          <text class="money">￥0.00</text>
        </view>
        <view class="output">
          <text class="text">本月收入：</text>
          <text class="money">￥0.00</text>
        </view>
      </view>
      <text class="chartAnalyse">查看图标分析</text>
    </view>

  </view>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  .parent{
    display: flex;
    justify-content: center;
    >.wrapper{
      margin: 10px;
      padding: 10px 30px;
      border-radius: 15px;
      background: white;
      width: 80%;
      display: flex;
      flex-direction: column;
      >.inputAndOutput{
        display: flex;
        justify-content: space-between;
        >.input,>.output{
          display: flex;
          flex-direction: column;
          >.text{
            color: #9b9b9b;
          }
        }
      }
      >.chartAnalyse{
        display: flex;
        justify-content: center;
        margin-top: 10px;
        color: #0f9570;
      }
    }
  }
</style>