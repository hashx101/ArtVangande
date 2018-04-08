var ArtTransaction = artifacts.require("./ERC721ArtTransaction.sol");

module.exports = function(deployer) {
  deployer.deploy(ArtTransaction);
}
