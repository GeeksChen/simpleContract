---
title: 【智能合约01】简易智能合约开发（本地）
categories: BlockChain
abbrlink: 17270
date: 2018.10.30
---

## 前言
>智能合约（Smart Contract）是一种旨在以信息化方式传播、验证或执行合同的计算机协议。智能合约允许在没有第三方的情况下进行可信交易，这些交易可追踪且不可逆转。

<!--more-->

## 一.基础环境的搭建和工具的下载

### 1.node环境

>node -v 查看版本

### 2.ethereumjs-testrpc

>testrpc不同于geth,他是在本地使用内存模拟的一个以太坊环境，对于开发调试来说，更方便，快捷。一般是当合约在testrpc中测试通过后，再部署到geth。
```
npm install -g ethereumjs-testrpc
```
### 3.truffle

>truffle是本地用来编译、部署智能合约的工具。
```
npm install -g truffle
```

### 4.效果图

![安装工具.png](https://upload-images.jianshu.io/upload_images/1745735-99adb1bb62b4ca6d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 5.启动testrpc

![启动testrpc.png](https://upload-images.jianshu.io/upload_images/1745735-c322287ec7783669.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 二.编写简易智能合约

### 1.创建项目

```
  truffle init
```

![truffle init.png
](https://upload-images.jianshu.io/upload_images/1745735-ee2153ed9522a529.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>项目结构

![项目结构.png](https://upload-images.jianshu.io/upload_images/1745735-e21db2a53171014e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2.编写

>tokenDemo.sol
```
pragma solidity ^0.4.23;

contract tokenDemo {
  function sayHello() public pure returns (string) {
    return ("Hello World");
  }
}
```

![编写.png](https://upload-images.jianshu.io/upload_images/1745735-e0d7b0dbae506887.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 3.配置

>truffle.js
```
module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // 匹配任何network id
    }
  },
  rinkeby: {
    host: "localhost", // Connect to geth on the specified
    port: 8545,
    network_id: "*",
  }
};
```
>2_deploy_contracts.js

```
var tokenDemo = artifacts.require("./tokenDemo.sol");

module.exports = function(deployer) {
  deployer.deploy(tokenDemo);
};
```
![WechatIMG93.jpeg](https://upload-images.jianshu.io/upload_images/1745735-b2689ad0b37cc04e.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![WechatIMG94.jpeg](https://upload-images.jianshu.io/upload_images/1745735-5079326421e478a3.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 三.编译,部署智能合约

### 1.编译

```
truffle compile
```

![编译.png](https://upload-images.jianshu.io/upload_images/1745735-9bd9acfddc9b5af9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![编译成功.png](https://upload-images.jianshu.io/upload_images/1745735-4645508ffc257bf4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![6.png](https://upload-images.jianshu.io/upload_images/1745735-0e6f9e7f55bce302.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2.部署

```
truffle migrate
```

![部署.png](https://upload-images.jianshu.io/upload_images/1745735-58b10e0368bc8036.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![部署成功.png](https://upload-images.jianshu.io/upload_images/1745735-025e1aa312050185.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 四.与合约互动

```
  1.truffle console
  2.tokenDemo.deployed().then(instance => contract = instance)
  3.truffle(development)> contract.sayHello.call()
```

![1and2.png](https://upload-images.jianshu.io/upload_images/1745735-7e3532252e1101f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![操作内部方法.png](https://upload-images.jianshu.io/upload_images/1745735-879ed97cd36cf739.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>说明：truffle(development)> contract.sayHello.call(),打印Hello World 操作合约中的方法成功

## 五.遇到的问题

### 1.solidity 函数要求

![函数要求.png](https://upload-images.jianshu.io/upload_images/1745735-e5029a69455c2c3d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![正确写法.png](https://upload-images.jianshu.io/upload_images/1745735-7b56b662a7f73805.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2.编译报错

![编译报错原因.png](https://upload-images.jianshu.io/upload_images/1745735-c36101874d13a1ef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>源码地址：https://github.com/GeeksChen/simpleContract.git

>参照资料：http://liyuechun.org/2017/09/19/how-to-code-smart-contract/

## 结尾
>技术交流可以加我 QQ:553292626
