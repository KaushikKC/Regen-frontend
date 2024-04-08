// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract FarmerPlatform is ERC721URIStorage, ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // Struct to hold farmer details
    struct FarmerDetails {
        string name;
        string ipfsHash;
    }
struct ProjectDetails {
        string name;
        string ipfsHash;
        uint funds;
        address owner;
    }

    // Mapping from tokenId to FarmerDetails
    mapping(address => FarmerDetails) private _farmerDetails;
    mapping(address => ProjectDetails) private _projectDetails;

    mapping(string  => ProjectDetails) private _projectDetailsName;

     

    constructor() ERC721("FarmerPlatform", "FARM") {}

    // Function to onboard a new farmer, mint an NFT, and store their details
    function onboardFarmer(string memory name, string memory ipfsHash) public returns (uint256) {
        _tokenIds.increment();

        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, ipfsHash);

        // Store the farmer's details
        _farmerDetails[msg.sender] = FarmerDetails(name, ipfsHash);

        return newTokenId;
    }

    function RegisterProject(string memory name, string memory ipfsHash) public {
        _projectDetails[msg.sender] = ProjectDetails(name,ipfsHash,0,msg.sender);
        // _projectDetailsName[name] = ProjectDetails(name,ipfsHash,0, msg.sender);

    }

    function fundProject(uint amount, address name) public payable {
        require(msg.value == amount, "Sent value does not match specified amount");
        ProjectDetails storage project = _projectDetails[name];
        require(bytes(project.name).length != 0, "Project does not exist");
        project.funds += amount;
    }

    // Withdraw funds from a project
    function withdrawFunds(address name, uint amount) public nonReentrant {
        ProjectDetails storage project = _projectDetails[name];
        require(msg.sender == project.owner, "Caller is not the project owner");
        require(project.funds >= amount, "Insufficient funds in the project");
        project.funds -= amount;
        (bool sent, ) = project.owner.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }


    // Function to retrieve farmer details by tokenId
    function getFarmerDetails() public view returns (FarmerDetails memory) {
    return _farmerDetails[msg.sender];
    }

     // Retrieve project details by name
    function getProjectDetails(address name) public view returns (ProjectDetails memory) {
        require(bytes(_projectDetails[name].name).length != 0, "Project does not exist");
        return _projectDetails[name];
    }

    // Ensure contract can receive ETH
    receive() external payable {}

}
