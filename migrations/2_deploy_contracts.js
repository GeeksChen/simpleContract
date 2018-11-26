var tokenDemo = artifacts.require("./tokenDemo.sol");

module.exports = function(deployer) {
  deployer.deploy(tokenDemo);
};
