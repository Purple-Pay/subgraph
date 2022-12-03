import { newMockEvent } from "matchstick-as";
import { ethereum, Address } from "@graphprotocol/graph-ts";
import {
	MerchatWalletCreated,
	OwnershipTransferred,
} from "../generated/Contract/Contract";

export function createMerchatWalletCreatedEvent(
	merchantAddress: Address,
	merchant: Address
): MerchatWalletCreated {
	let merchatWalletCreatedEvent = changetype<MerchatWalletCreated>(
		newMockEvent()
	);

	merchatWalletCreatedEvent.parameters = new Array();

	merchatWalletCreatedEvent.parameters.push(
		new ethereum.EventParam(
			"merchantAddress",
			ethereum.Value.fromAddress(merchantAddress)
		)
	);
	merchatWalletCreatedEvent.parameters.push(
		new ethereum.EventParam(
			"merchant",
			ethereum.Value.fromAddress(merchant)
		)
	);

	return merchatWalletCreatedEvent;
}

export function createOwnershipTransferredEvent(
	previousOwner: Address,
	newOwner: Address
): OwnershipTransferred {
	let ownershipTransferredEvent = changetype<OwnershipTransferred>(
		newMockEvent()
	);

	ownershipTransferredEvent.parameters = new Array();

	ownershipTransferredEvent.parameters.push(
		new ethereum.EventParam(
			"previousOwner",
			ethereum.Value.fromAddress(previousOwner)
		)
	);
	ownershipTransferredEvent.parameters.push(
		new ethereum.EventParam(
			"newOwner",
			ethereum.Value.fromAddress(newOwner)
		)
	);

	return ownershipTransferredEvent;
}
