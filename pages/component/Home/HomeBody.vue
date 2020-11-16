<template>
  <view class="wrapper">
    <view class="header">
      <text class="output">今日支出 ￥0.00</text>
      <text class="input">今日收入 ￥0.00</text>
    </view>
    <ol class="list">
      <li>
        <text>衣</text>
        <text>
          <text>-</text>
          <text>￥25</text>
        </text>
      </li>
    </ol>
  </view>
</template>

<style scoped lang="scss">
.wrapper {
  .header {

    > .output, > .input {
      margin-left: 15px;
      font-weight: bold;
    }
  }

  > .list {
    display: flex;
    flex-direction: column;
    height: 200px;
    overflow: auto;
    padding: 10px;

    > li {
      padding: 0 20px;
      border-radius: 15px;
      background: white;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>