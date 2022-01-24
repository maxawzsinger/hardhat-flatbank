const { expect } = require("chai");
const { ethers } = require("hardhat");
const molochABI= [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "proposals",
    "outputs": [
      {
        "name": "applicant",
        "type": "address"
      },
      {
        "name": "proposer",
        "type": "address"
      },
      {
        "name": "sponsor",
        "type": "address"
      },
      {
        "name": "sharesRequested",
        "type": "uint256"
      },
      {
        "name": "lootRequested",
        "type": "uint256"
      },
      {
        "name": "tributeOffered",
        "type": "uint256"
      },
      {
        "name": "tributeToken",
        "type": "address"
      },
      {
        "name": "paymentRequested",
        "type": "uint256"
      },
      {
        "name": "paymentToken",
        "type": "address"
      },
      {
        "name": "startingPeriod",
        "type": "uint256"
      },
      {
        "name": "yesVotes",
        "type": "uint256"
      },
      {
        "name": "noVotes",
        "type": "uint256"
      },
      {
        "name": "details",
        "type": "string"
      },
      {
        "name": "maxTotalSharesAndLootAtYesVote",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "processingReward",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "memberAddress",
        "type": "address"
      },
      {
        "name": "proposalIndex",
        "type": "uint256"
      }
    ],
    "name": "getMemberProposalVote",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getCurrentPeriod",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "members",
    "outputs": [
      {
        "name": "delegateKey",
        "type": "address"
      },
      {
        "name": "shares",
        "type": "uint256"
      },
      {
        "name": "loot",
        "type": "uint256"
      },
      {
        "name": "exists",
        "type": "bool"
      },
      {
        "name": "highestIndexYesVote",
        "type": "uint256"
      },
      {
        "name": "jailed",
        "type": "uint256"
      },
      {
        "name": "proposalsSubmittedInLastPeriod",
        "type": "uint256"
      },
      {
        "name": "periodMemberLastSubmittedProposalIn",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "token",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawBalance",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_newTime",
        "type": "uint256"
      }
    ],
    "name": "changeSummoningTime",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "memberToKick",
        "type": "address"
      },
      {
        "name": "details",
        "type": "string"
      }
    ],
    "name": "submitGuildKickProposal",
    "outputs": [
      {
        "name": "proposalId",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "sharesToBurn",
        "type": "uint256"
      },
      {
        "name": "lootToBurn",
        "type": "uint256"
      }
    ],
    "name": "ragequit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "approvedTokens",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newDelegateKey",
        "type": "address"
      }
    ],
    "name": "updateDelegateKey",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "TOTAL",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalShares",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "proposalQueue",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "proposedToKick",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "memberAddressByDelegateKey",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "tokens",
        "type": "address[]"
      },
      {
        "name": "amounts",
        "type": "uint256[]"
      },
      {
        "name": "max",
        "type": "bool"
      }
    ],
    "name": "withdrawBalances",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "revertSummoningTime",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "userTokenBalances",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "applicant",
        "type": "address"
      },
      {
        "name": "sharesRequested",
        "type": "uint256"
      },
      {
        "name": "lootRequested",
        "type": "uint256"
      },
      {
        "name": "tributeOffered",
        "type": "uint256"
      },
      {
        "name": "tributeToken",
        "type": "address"
      },
      {
        "name": "paymentRequested",
        "type": "uint256"
      },
      {
        "name": "paymentToken",
        "type": "address"
      },
      {
        "name": "details",
        "type": "string"
      }
    ],
    "name": "submitProposal",
    "outputs": [
      {
        "name": "proposalId",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "token",
        "type": "address"
      }
    ],
    "name": "collectTokens",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalLoot",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "gracePeriodLength",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "proposalIndex",
        "type": "uint256"
      },
      {
        "name": "uintVote",
        "type": "uint256"
      }
    ],
    "name": "submitVote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "user",
        "type": "address"
      },
      {
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getUserTokenBalance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTokenCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getProposalQueueLength",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "summoningTime",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "votingPeriodLength",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "originalSummoningTime",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "proposalDeposit",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "startingPeriod",
        "type": "uint256"
      }
    ],
    "name": "hasVotingPeriodExpired",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "proposalId",
        "type": "uint256"
      }
    ],
    "name": "sponsorProposal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getMemberCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalGuildBankTokens",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "highestIndexYesVote",
        "type": "uint256"
      }
    ],
    "name": "canRagequit",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_summoner",
        "type": "address[]"
      },
      {
        "name": "_approvedTokens",
        "type": "address[]"
      },
      {
        "name": "_periodDuration",
        "type": "uint256"
      },
      {
        "name": "_votingPeriodLength",
        "type": "uint256"
      },
      {
        "name": "_gracePeriodLength",
        "type": "uint256"
      },
      {
        "name": "_proposalDeposit",
        "type": "uint256"
      },
      {
        "name": "_dilutionBound",
        "type": "uint256"
      },
      {
        "name": "_processingReward",
        "type": "uint256"
      },
      {
        "name": "_summonerShares",
        "type": "uint256[]"
      }
    ],
    "name": "init",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "dilutionBound",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "proposalId",
        "type": "uint256"
      }
    ],
    "name": "getProposalFlags",
    "outputs": [
      {
        "name": "",
        "type": "bool[6]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "memberList",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "periodDuration",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_memberAddress",
        "type": "address"
      }
    ],
    "name": "checkMemberInDao",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "depositToken",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "proposalCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "memberToKick",
        "type": "address"
      }
    ],
    "name": "ragekick",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "proposalId",
        "type": "uint256"
      }
    ],
    "name": "cancelProposal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "proposedToWhitelist",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "proposalIndex",
        "type": "uint256"
      }
    ],
    "name": "processGuildKickProposal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "proposalIndex",
        "type": "uint256"
      }
    ],
    "name": "processProposal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "ESCROW",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "GUILD",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "tokenToWhitelist",
        "type": "address"
      },
      {
        "name": "details",
        "type": "string"
      }
    ],
    "name": "submitWhitelistProposal",
    "outputs": [
      {
        "name": "proposalId",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "summoner",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "tokens",
        "type": "address[]"
      },
      {
        "indexed": false,
        "name": "summoningTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "periodDuration",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "votingPeriodLength",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "gracePeriodLength",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "proposalDeposit",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "dilutionBound",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "processingReward",
        "type": "uint256"
      }
    ],
    "name": "SummonComplete",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "applicant",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "sharesRequested",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "lootRequested",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "tributeOffered",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "tributeToken",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "paymentRequested",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "paymentToken",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "details",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "flags",
        "type": "bool[6]"
      },
      {
        "indexed": false,
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "delegateKey",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "memberAddress",
        "type": "address"
      }
    ],
    "name": "SubmitProposal",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "delegateKey",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "memberAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "proposalIndex",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "startingPeriod",
        "type": "uint256"
      }
    ],
    "name": "SponsorProposal",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "proposalIndex",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "delegateKey",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "memberAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "uintVote",
        "type": "uint256"
      }
    ],
    "name": "SubmitVote",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "proposalIndex",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "didPass",
        "type": "bool"
      }
    ],
    "name": "ProcessProposal",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "proposalIndex",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "didPass",
        "type": "bool"
      }
    ],
    "name": "ProcessWhitelistProposal",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "proposalIndex",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "didPass",
        "type": "bool"
      }
    ],
    "name": "ProcessGuildKickProposal",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "memberAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "sharesToBurn",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "lootToBurn",
        "type": "uint256"
      }
    ],
    "name": "Ragequit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amountToCollect",
        "type": "uint256"
      }
    ],
    "name": "TokensCollected",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "applicantAddress",
        "type": "address"
      }
    ],
    "name": "CancelProposal",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "memberAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "newDelegateKey",
        "type": "address"
      }
    ],
    "name": "UpdateDelegateKey",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "memberAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Withdraw",
    "type": "event"
  }
];

describe("Proposal flow", function () {
  it("should not cost a lot", async function () {

    const signersArray = await ethers.getSigners();
    const account = signersArray[0];
    console.log('account is signer: ', account.isSigner);
    const accountAddress = await account.getAddress();
    console.log('account: ', accountAddress);

    const token = await ethers.getContractFactory("dummytoken");
    const deployedToken = await token.deploy();
    await deployedToken.deployed();
    console.log('token address: ',deployedToken.address);

    const molochContract = await ethers.getContractFactory("Moloch");
    const deployedMolochContract = await molochContract.deploy();
    await deployedMolochContract.deployed();
    console.log('deployed moloch template at : ', deployedMolochContract.address);

    const summonerContract = await ethers.getContractFactory("contracts/flatmoloch.sol:MolochSummoner");
    const deployedSummonerContract = await summonerContract.deploy(deployedMolochContract.address);
    await deployedSummonerContract.deployed();
    console.log('deployed summoner contract at : ', deployedSummonerContract.address);

    //call summon moloch


    await deployedSummonerContract.connect(account).summonMoloch(
      [accountAddress], //list of members
      [deployedToken.address],//list of approved tokens
      17280,//period duration (4.8hr in seconds)
      35, //voting period (7 days)
      35, //grace period
      0, //proposal deposit
      3,//dilution bound
      0,//processing reward.
      [1] //summoner shares - to be same length as num of MEMBERS
    );

    //automatically adds to a lookup table
    const summonedAddress = await deployedSummonerContract.addressLUT(0);
    console.log('summoned address:', summonedAddress);

    const provider = ethers.getDefaultProvider('http://localhost:8545');

    console.log('provider: ', provider);

    const summonedMoloch = new ethers.Contract(summonedAddress, molochABI, provider);

    const tx = await summonedMoloch.connect(account).submitProposal(
      '0x2546BcD3c84621e976D8185a91A922aE77ECEc30',
      1,
      0,
      0,
      deployedToken.address,
      0,
      deployedToken.address,
      'test'
    );

    const receipt = await tx.wait();

    // console.log(receipt);

    const gasUsed = receipt.gasUsed;

    console.log('gas:' ,gasUsed);



    // address applicant,
    // uint256 sharesRequested,
    // uint256 lootRequested,
    // uint256 tributeOffered,
    // address tributeToken,
    // uint256 paymentRequested,
    // address paymentToken,
    // string memory details


    //
    //
    // const contract = await ethers.getContractFactory("deployedmoloch");
    //
    // console.log("balance of token (owner): ", await deployedToken.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"));
    //
    // const deployedContract = await contract.deploy(deployedToken.address); //params
    // await deployedContract.deployed();
    // console.log('contract address: ',deployedContract.address);
    // console.log("balance of token (contract): ", await deployedToken.balanceOf(deployedContract.address));
    //
    // // await deployedToken.connect(hardcodedMolochMember).transfer(deployedContract.address.toLowerCase(), 1);
    // console.log("balance of token (contract): ", await deployedToken.balanceOf(deployedContract.address.toLowerCase()));
    //
    // //transfer 1 token to the moloch addr
    // console.log('transferred');
    // await deployedContract.connect(hardcodedMolochMember).submitProposal(
    //   "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    //   1,
    //   0,
    //   0,
    //   deployedToken.address,
    //   0,
    //   deployedToken.address,
    //   "Test"
    //
    // );
    //
    // //
    // // function submitProposal(
    // //     address applicant,
    // //     uint256 sharesRequested,
    // //     uint256 lootRequested,
    // //     uint256 tributeOffered,
    // //     address tributeToken,
    // //     uint256 paymentRequested,
    // //     address paymentToken,
    // //     string memory details
    //
    // console.log("Called submit proposal");
    // expect(await deployedContract.proposalCount()).to.equal(1);
    // expect(await deployedContract.getProposalQueueLength()).to.equal(0);
    // console.log("balance of token (owner): ", await deployedToken.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"));
    // // await deployedToken.connect(hardcodedMolochMember).transfer(deployedContract.address.toLowerCase(), 1);
    // console.log("balance of token (contract): ", await deployedToken.balanceOf(deployedContract.address.toLowerCase()),deployedContract.address.toLowerCase());
    // console.log("balance", await hardcodedMolochMember.getbalance());
    //
    // await deployedContract.connect(hardcodedMolochMember).sponsorProposal(0);
    // console.log("sponsored proposal")
    // console.log("balance", await hardcodedMolochMember.getbalance());
    // expect(await deployedContract.getProposalQueueLength()).to.equal(1);
    //
    // // await deployedContract.connect(hardcodedMolochMember)
    //
    //
    //
    //
    //
    // // 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199
    // // await deployedContract.submitProposal()
    // // expect(await greeter.greet()).to.equal("Hello, world!");
    // //
    // // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    // //
    // // // wait until the transaction is mined
    // // await setGreetingTx.wait();
    // //
    // // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
