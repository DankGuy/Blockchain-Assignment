
const web3 = new Web3(Web3.givenProvider || "http://localhost:5000");
//1- connect metamask
let account;

const accessToMetamask = async () => {
    if(window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts"});
        account = accounts[0];
    }
}

    //2- connect to smart contract
    const accessToContract = async () => {
    const ABI =[
{
"inputs": [
{
    "internalType": "string",
    "name": "_id",
    "type": "string"
},
{
    "internalType": "string",
    "name": "durian_id",
    "type": "string"
}
],
"name": "addDurianToRequest",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "string",
    "name": "_password",
    "type": "string"
}
],
"name": "login",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [],
"name": "logout",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "string",
    "name": "_password",
    "type": "string"
},
{
    "internalType": "string",
    "name": "_name",
    "type": "string"
},
{
    "internalType": "string",
    "name": "_location",
    "type": "string"
},
{
    "internalType": "string",
    "name": "_contact",
    "type": "string"
},
{
    "internalType": "uint256",
    "name": "_role",
    "type": "uint256"
}
],
"name": "register",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "string",
    "name": "_treeID",
    "type": "string"
},
{
    "internalType": "uint256",
    "name": "weight_g",
    "type": "uint256"
},
{
    "internalType": "uint256",
    "name": "_timeHarvest",
    "type": "uint256"
},
{
    "internalType": "string",
    "name": "_workerHarvest",
    "type": "string"
},
{
    "internalType": "string",
    "name": "_description",
    "type": "string"
}
],
"name": "registerDurian",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "uint256",
    "name": "speciesIndex",
    "type": "uint256"
}
],
"name": "registerTree",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "string",
    "name": "_id",
    "type": "string"
}
],
"name": "sendDurian",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "string",
    "name": "_ID",
    "type": "string"
},
{
    "internalType": "uint256",
    "name": "_species",
    "type": "uint256"
},
{
    "internalType": "uint256",
    "name": "_quantity",
    "type": "uint256"
}
],
"name": "sendRequest",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "string",
    "name": "_durianID",
    "type": "string"
},
{
    "internalType": "uint256",
    "name": "time_arrival",
    "type": "uint256"
},
{
    "internalType": "uint256",
    "name": "_creaminess",
    "type": "uint256"
},
{
    "internalType": "uint256",
    "name": "_taste",
    "type": "uint256"
},
{
    "internalType": "uint256",
    "name": "_fragrance",
    "type": "uint256"
}
],
"name": "updateDurian",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
},
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
}
],
"name": "addressListWType",
"outputs": [
{
    "internalType": "address",
    "name": "",
    "type": "address"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
}
],
"name": "allUser",
"outputs": [
{
    "internalType": "address",
    "name": "",
    "type": "address"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "",
    "type": "address"
},
{
    "internalType": "string",
    "name": "",
    "type": "string"
}
],
"name": "currentDurianCountOnSpecies",
"outputs": [
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "string",
    "name": "",
    "type": "string"
},
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
}
],
"name": "durianForRequest",
"outputs": [
{
    "components": [
        {
            "internalType": "string",
            "name": "treeID",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "treeSpecies",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "treeBelongFarmID",
            "type": "string"
        },
        {
            "internalType": "uint256",
            "name": "durianCount",
            "type": "uint256"
        }
    ],
    "internalType": "struct testing.Tree",
    "name": "durianBelongTree",
    "type": "tuple"
},
{
    "internalType": "string",
    "name": "durianID",
    "type": "string"
},
{
    "internalType": "uint256",
    "name": "durianWeight_g",
    "type": "uint256"
},
{
    "internalType": "string",
    "name": "description",
    "type": "string"
},
{
    "components": [
        {
            "internalType": "uint256",
            "name": "timeHarvest",
            "type": "uint256"
        },
        {
            "internalType": "string",
            "name": "workerHarvest",
            "type": "string"
        }
    ],
    "internalType": "struct testing.Harvest",
    "name": "harvestInfo",
    "type": "tuple"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "",
    "type": "address"
},
{
    "internalType": "string",
    "name": "",
    "type": "string"
},
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
}
],
"name": "DurianIn",
"outputs": [
{
    "components": [
        {
            "internalType": "string",
            "name": "treeID",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "treeSpecies",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "treeBelongFarmID",
            "type": "string"
        },
        {
            "internalType": "uint256",
            "name": "durianCount",
            "type": "uint256"
        }
    ],
    "internalType": "struct testing.Tree",
    "name": "durianBelongTree",
    "type": "tuple"
},
{
    "internalType": "string",
    "name": "durianID",
    "type": "string"
},
{
    "internalType": "uint256",
    "name": "durianWeight_g",
    "type": "uint256"
},
{
    "internalType": "string",
    "name": "description",
    "type": "string"
},
{
    "components": [
        {
            "internalType": "uint256",
            "name": "timeHarvest",
            "type": "uint256"
        },
        {
            "internalType": "string",
            "name": "workerHarvest",
            "type": "string"
        }
    ],
    "internalType": "struct testing.Harvest",
    "name": "harvestInfo",
    "type": "tuple"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "",
    "type": "address"
},
{
    "internalType": "string",
    "name": "",
    "type": "string"
}
],
"name": "durianStatus",
"outputs": [
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "_address",
    "type": "address"
}
],
"name": "findUser",
"outputs": [
{
    "internalType": "int256",
    "name": "_type",
    "type": "int256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "string",
    "name": "_ID",
    "type": "string"
}
],
"name": "findUserID",
"outputs": [
{
    "internalType": "address",
    "name": "_type",
    "type": "address"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "",
    "type": "address"
},
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
}
],
"name": "requestReceived",
"outputs": [
{
    "internalType": "string",
    "name": "requestID",
    "type": "string"
},
{
    "internalType": "string",
    "name": "destinationID",
    "type": "string"
},
{
    "internalType": "string",
    "name": "species",
    "type": "string"
},
{
    "internalType": "uint256",
    "name": "quantity",
    "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "",
    "type": "address"
},
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
}
],
"name": "requestSent",
"outputs": [
{
    "internalType": "string",
    "name": "requestID",
    "type": "string"
},
{
    "internalType": "string",
    "name": "destinationID",
    "type": "string"
},
{
    "internalType": "string",
    "name": "species",
    "type": "string"
},
{
    "internalType": "uint256",
    "name": "quantity",
    "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "",
    "type": "address"
},
{
    "internalType": "string",
    "name": "",
    "type": "string"
}
],
"name": "RequestStatus",
"outputs": [
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
}
],
"name": "Species",
"outputs": [
{
    "internalType": "string",
    "name": "",
    "type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "string",
    "name": "_id",
    "type": "string"
}
],
"name": "trackAndTrace",
"outputs": [
{
    "components": [
        {
            "components": [
                {
                    "internalType": "string",
                    "name": "treeID",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "treeSpecies",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "treeBelongFarmID",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "durianCount",
                    "type": "uint256"
                }
            ],
            "internalType": "struct testing.Tree",
            "name": "durianBelongTree",
            "type": "tuple"
        },
        {
            "internalType": "string",
            "name": "durianID",
            "type": "string"
        },
        {
            "internalType": "uint256",
            "name": "durianWeight_g",
            "type": "uint256"
        },
        {
            "internalType": "string",
            "name": "description",
            "type": "string"
        },
        {
            "components": [
                {
                    "internalType": "uint256",
                    "name": "timeHarvest",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "workerHarvest",
                    "type": "string"
                }
            ],
            "internalType": "struct testing.Harvest",
            "name": "harvestInfo",
            "type": "tuple"
        }
    ],
    "internalType": "struct testing.Durian",
    "name": "durian",
    "type": "tuple"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "",
    "type": "address"
},
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
}
],
"name": "TreeIn",
"outputs": [
{
    "internalType": "string",
    "name": "treeID",
    "type": "string"
},
{
    "internalType": "string",
    "name": "treeSpecies",
    "type": "string"
},
{
    "internalType": "string",
    "name": "treeBelongFarmID",
    "type": "string"
},
{
    "internalType": "uint256",
    "name": "durianCount",
    "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "string",
    "name": "",
    "type": "string"
}
],
"name": "updateInfo",
"outputs": [
{
    "internalType": "uint256",
    "name": "timeArrivalDC",
    "type": "uint256"
},
{
    "internalType": "uint256",
    "name": "timeArrivalRetailer",
    "type": "uint256"
},
{
    "internalType": "uint256",
    "name": "timeConsume",
    "type": "uint256"
},
{
    "internalType": "uint256",
    "name": "rate_creaminess",
    "type": "uint256"
},
{
    "internalType": "uint256",
    "name": "rate_taste",
    "type": "uint256"
},
{
    "internalType": "uint256",
    "name": "rate_fragrance",
    "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "",
    "type": "address"
}
],
"name": "user",
"outputs": [
{
    "internalType": "string",
    "name": "ID",
    "type": "string"
},
{
    "internalType": "string",
    "name": "Password",
    "type": "string"
},
{
    "internalType": "string",
    "name": "Name",
    "type": "string"
},
{
    "internalType": "string",
    "name": "Location",
    "type": "string"
},
{
    "internalType": "string",
    "name": "Contact",
    "type": "string"
},
{
    "internalType": "uint256",
    "name": "UserType",
    "type": "uint256"
},
{
    "internalType": "uint256",
    "name": "loginStatus",
    "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
}
];
    
    const Address = "0x2185734BCF8Ed6B5a7DaBB56Cc2d26622632757e";
    window.web3 = await new Web3(window.ethereum); //how to access to smart contract 
    window.contract = await new window.web3.eth.Contract( ABI, Address); //how you create an instance of that contract by using the abi and address  
}
accessToContract();
accessToMetamask();